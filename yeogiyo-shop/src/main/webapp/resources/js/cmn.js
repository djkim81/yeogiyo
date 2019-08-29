var g_pop_status;
var g_interval = null;
var g_callArg;
var g_status_call;
var g_is_loader_open = false;
var g_body_obj = [];

$(document).ready(function() {
  var cmnLoader = $("<div>", {id: "_cmn_loader"}).append($("<img>").attr("src", "/resources/images/loading.gif").css("position", "absolute").css("top", "50%").css("left", "50%").css("zIndex", "100"));
  cmnLoader.css("width", "100%").css("height", "100%").css("top", "0").css("left", "0").css("position", "fixed").css("display", "block").css("opacity", "0.2")
    .css("zIndex", "99999").css("textAlign", "center").css("backgroundColor", "#FFFFFF");
  cmnLoader.appendTo("body");
	$("#_cmn_loader").hide();
});

function cmnSyncCall(tpNm, param, callbackFunc, callbackVar, callbackErr) {
  openLoader();
  cmnCall(tpNm, param, callbackFunc, callbackVar, false, callbackErr);
}

function cmnASyncCall(tpNm, param, callbackFunc, callbackVar, callbackErr) {
  cmnCall(tpNm, param, callbackFunc, callbackVar, true, callbackErr);
}

function cmnCall(tpNm, param, callbackFunc, callbackVar, isASync, callbackErr) {
  var urlLengthPos = location.href.indexOf("?");
  if (urlLengthPos < 0 || (location.href.indexOf("#") > 0 && urlLengthPos > location.href.indexOf("#"))) {
    urlLengthPos = location.href.indexOf("#");
  }
  if (urlLengthPos < 0) {
    urlLengthPos = location.href.length;
  }
  var uriSplit =  location.href.substring(location.href.indexOf("://") + 3, urlLengthPos).split("/");
  var pgm = null;
  var task = null;
  var page = null;
  var url = null;
  if (tpNm.match(/(http|https|ftp|telnet|news|mms):\/\//g) != null) {
    url = tpNm;
  } else if (tpNm.substring(0, 1) != "/") {
    if (uriSplit.length >= 2 && uriSplit[1] !== "") {
      pgm = uriSplit[1];
    } else {
      pgm = "cmn";
    }
    if (uriSplit.length >= 3 && uriSplit[2] !== "") {
      task = uriSplit[2];
    } else {
      task = "cmn";
    }
    if (uriSplit.length >= 4 && uriSplit[3] !== "") {
      page = uriSplit[3];
    } else {
      page = "main";
    }
    url = "/" + pgm + "/" + task + "/" + page + "/" + tpNm;
  } else {
    url = tpNm;
  }
  $.ajax({
    url: url,
    type: "post",
    data: param,
    dataType: "JSON",
    async: true,
    success: function(data) {
      closeLoader();
      if (callbackFunc != null && typeof callbackFunc != "undefined" && callbackFunc !== "") {
        callbackFunc(data, tpNm, param, callbackVar);
      }
    },
    error: function(request, status, error) {
      var jsonMsg;
      try {
        jsonMsg = JSON.parse(request.responseText);
      } catch (e) {
        closeLoader();
      }
      var errorNum = 0;
      try {
        errorNum = jsonMsg.error_num;
      } catch (e) {
        if (typeof Swal === "undefined") {
          alert("[999] 기타 알 수 없는 오류로 인해 처리할 수 없습니다.");
        } else {
          Swal.fire({
            type: "error",
            title: "Ooops...",
            text: "[999] 기타 알 수 없는 오류로 인해 처리할 수 없습니다."
          });
          $("div.swal2-container").css("zIndex", "10000000");
        }
      }
      if (errorNum == 4) {
        g_pop_status = window.open("/cmn/cmn/login_small?redirect_url=" + encodeURIComponent(getCloseUrl()), "Auto Login",
                                    "width=600px,height=800px,left=0,top=0,scrollbars=no,toolbar=no,resizable=no");
        if (typeof g_pop_status != "undefined" && g_pop_status != null) {
          g_status_call = 0;
          g_pop_status.focus();
          g_callArg = {tpNm: tpNm, param: param, callbackFunc: callbackFunc, callbackVar: callbackVar, isASync: isASync};
          if (typeof g_interval != "undefined" && g_interval != null) {
            clearInterval(g_interval);
          }
          g_interval = setInterval(checkWindowPopup, 1000);
        }
      } else {
        if (typeof Swal === "undefined") {
          alert(jsonMsg.error_nm);
          afterErr();
        } else {
          Swal.fire({
            type: "error",
            title: "Ooops...",
            text: jsonMsg.error_nm
          }).then(function (result) {
            afterErr(jsonMsg.error_num, tpNm, param, callbackVar, callbackErr);
          });
          $("div.swal2-container").css("zIndex", "10000000");
        }
      }
    }
  });
}

function afterErr(errorNum, tpNm, param, callbackVar, callbackErr) {
  closeLoader();
  if (callbackErr != null && typeof callbackErr != "undefined" && callbackErr !== "") {
    callbackErr(errorNum, tpNm, param, callbackVar);
  }
}

function checkWindowPopup() {
  if (g_status_call >= 10) {
    clearInterval(g_interval);
    closeLoader();
  }
  if (g_pop_status == null || g_pop_status.document.location == null) {
    clearInterval(g_interval);
    closeLoader();
  }
  if (g_pop_status.document.location.href.split("://")[1].split("/")[3] === "close") {
    g_pop_status.close();
    clearInterval(g_interval);
    cmnCall(g_callArg.tpNm, g_callArg.param, g_callArg.callbackFunc, g_callArg.callbackVar, g_callArg.isASync);
  }
  g_status_call++;
}

function closeLoader() {
  if (g_is_loader_open === true) {
    $("body").css("cursor", "default");
    $("#_cmn_loader").hide();
    g_is_loader_open = false;
  }
}

function openLoader() {
  g_is_loader_open = true;
  $("body").css("cursor", "wait");
  $("#_cmn_loader").show();
}

function getCloseUrl() {
  return location.href.split("://")[0] + "://" + location.href.split("://")[1].split("?")[0].split("#")[0].split("/")[0] + "/cmn/cmn/close";
}

function getParameter(name){
  var hashes = window.location.href.slice(location.href.indexOf("?") + 1).split("&");
  var i = 0;
  var hash = null;
  for (i = 0; i < hashes.length; i = i + 1) {
    hash = hashes[i].split("=");
    if (decodeURIComponent(hash[0]) == name) {
      return decodeURIComponent(hash[1]);
    }
  }
  return null;
}

function set_cookie(name, value, exp_y, exp_m, exp_d, path, domain, secure) {
  var cookie_string = name + "=" + escape(value);
  var expires;
  if (typeof exp_y != "undefined") {
    expires = new Date(exp_y, exp_m, exp_d);
    cookie_string += "; expires=" + expires.toGMTString();
  } else {
    var today = new Date();
    expires = new Date(today.getFullYear() + 100, today.getMonth(), today.getDate());
    cookie_string += "; expires=" + expires.toGMTString();
  }
  if (typeof path != "undefined") {
    cookie_string += "; path=" + escape(path);
  }
  if (typeof domain != "undefined") {
    cookie_string += "; domain=" + escape(domain);
  }
  if (typeof secure != "undefined" && secure === true) {
    cookie_string += "; secure";
  }
  document.cookie = cookie_string;
}

function delete_cookie(cookie_name) {
  var cookie_date = new Date();
  cookie_date.setTime(cookie_date.getTime() - 1);
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function get_cookie(cookie_name) {
  var results = document.cookie.match("(^|;) ?" + cookie_name + "=([^;]*)(;|$)");
  if (typeof results != "undefined" && results != null) {
    return unescape(results[2]);
  }
  else {
    return null;
  }
}

function setCmnComboCodeMapping(obj, code, init) {
  cmnSyncCall("/cmn/cmn/main/GetCommonCode", {code: code}, cmnCallbackFunc, {obj: obj, init: init});
}

function cmnCallbackFunc(data, act, input_param, callbackVar) {
  var i = 0;
  var dict = Object.keys(data);
  for (i = 0; i < dict.length; i++) {
    callbackVar.obj.jqxDropDownList("addItem", {label: data[dict[i]], value: dict[i]});
  }
  if (typeof callbackVar.init == "undefined" || callbackVar.init == null) {
    callbackVar.obj.jqxDropDownList("selectIndex", 0);
  } else {
    callbackVar.obj.jqxDropDownList("selectIndex", callbackVar.init);    
  }
}

function cmnConfirm(callback, header, msg, callbackVar) {
  if (typeof header == "undifined") {
    header = "웹페이지 메시지";
    msg = "확인?"
  } else if (typeof msg == "undefined") {
    msg = header;
    header = "웹페이지 메시지";
  }
  var dialog = $("<div>").attr("id", "__confirm_dialog").css({width: "250px", height: "120px"});
  $("<div>").attr("id", "__confirm_dialog_header").html(header).appendTo(dialog);
  var body = $("<div>").css({overflow: "hidden"});
  body.appendTo(dialog);
  body.append($("<div>").css({position: "absolute", textAlign: "center", top: "40px", height: "35px", width: "100%"}).html(msg));
  var okButton = $("<input>").css({position: "absolute", bottom: "15px", left: "50px", width: "70px", height: "25px"}).attr("type", "button").val("확인");
  var cancelButton = $("<input>").css({position: "absolute", bottom: "15px", left: "130px", width: "70px", height: "25px"}).attr("type", "button").val("취소");
  body.append(okButton);
  body.append(cancelButton);
  okButton.jqxButton({
    width: "70px",
    height: "25px"
  });
  cancelButton.jqxButton({
    width: "70px",
    height: "25px"
  });
  dialog.jqxWindow({
    isModal: true,
    resizable: false,
    width: "250px",
    height: "120px",
    okButton: okButton,
    cancelButton: cancelButton
  });
  dialog.jqxWindow("open");
  dialog.on("close", function(event) {
    if (typeof callback == "function") {
      if (event.args.dialogResult.OK) {
        if (typeof callbackVar != "undifined") {
          callback(true, callbackVar);
        } else {
          callback(true);
        }
      } else {
        if (typeof callbackVar != "undifined") {
          callback(false, callbackVar);
        } else {
          callback(false);
        }
      }
    }
  });
}

function cmnAlert(header, msg) {
  if (typeof header == "undifined") {
    header = "웹페이지 메시지";
    msg = "확인?"
  } else if (typeof msg == "undefined") {
    msg = header;
    header = "웹페이지 메시지";
  }
  var dialog = $("<div>").attr("id", "__confirm_dialog").css({width: "250px", height: "120px"});
  $("<div>").attr("id", "__confirm_dialog_header").html(header).appendTo(dialog);
  var body = $("<div>").css({overflow: "hidden"});
  body.appendTo(dialog);
  body.append($("<div>").css({position: "absolute", textAlign: "center", top: "40px", height: "35px", width: "100%"}).html(msg));
  var okButton = $("<input>").css({position: "absolute", bottom: "15px", left: "90px", width: "70px", height: "25px"}).attr("type", "button").val("확인");
  body.append(okButton);
  okButton.jqxButton({
    width: "70px",
    height: "25px"
  });
  dialog.jqxWindow({
    isModal: true,
    resizable: false,
    width: "250px",
    height: "120px",
    okButton: okButton,
  });
  dialog.jqxWindow("open");
}

function send() {
  
}

function replaceForXss(str) {
  if (typeof str === "undefined") {
    return;
  } else if (str === null) {
    return null;
  } else if (typeof str !== "string") {
    return str;
  } else {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;");
  }
}

function replaceHtmlToStr(html) {
  var retHtml = html;
  if (typeof retHtml === "undefined") {
    return;
  } else if (retHtml === null) {
    return null;
  } else if (typeof retHtml !== "string") {
    return retHtml;
  } else {
    for (var i = 0; i < retHtml.length; i++) {
      if (retHtml.substr(i, 1) === "&") {
        if (retHtml.substr(i + 1, 3) === "lt;") {
          retHtml = retHtml.substr(0, i) + "<" + retHtml.substr(i + 4);
        } else if (retHtml.substr(i + 1, 3) === "gt;") {
          retHtml = retHtml.substr(0, i) + ">" + retHtml.substr(i + 4);
        } else if (retHtml.substr(i + 1, 5) === "nbsp;") {
          retHtml = retHtml.substr(0, i) + " " + retHtml.substr(i + 6);
        } else if (retHtml.substr(i + 1, 4) === "amp;") {
         retHtml = retHtml.substr(0, i) + "&" + retHtml.substr(i + 5);        
        }
      }
    }
  }
  return retHtml;
}

function setOnlyCharAndNumber(id) {
  $(id).keydown(function(event) {
    var code = null;
    if (window.event) {
      code = window.event.keyCode;
    } else {
      code = event.which;
    }
    if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || (code >= 97 && code <= 122) || code == 8 || code == 9 || code == 13 || code == 46 || code == 95 || code == 37 || code == 39) {
      window.event.returnValue = true;
      return;
    }
    if (window.event) {
      window.event.returnValue = false;
    } else {
      event.preventDefault();
    }
  });
  $(id).keyup(function(event) {
    if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
      $(id).val($(id).val().replace(/[^0-9a-zA-Z]/gi, ""));
    }
  });
}

function setOnlyNumber(id) {
  $(id).keydown(function(event) {
    var code = null;
    if (window.event) {
      code = window.event.keyCode;
    } else {
      code = event.which;
    }
    if ((code >= 48 && code <= 57) || code == 8 || code == 9 || code == 13 || code == 46 || code == 95 || code == 37 || code == 39) {
      window.event.returnValue = true;
      return;
    }
    if (window.event) {
      window.event.returnValue = false;
    } else {
      event.preventDefault();
    }
  });
  $(id).keyup(function(event) {
    if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
      $(id).val($(id).val().replace(/[^0-9a-zA-Z]/gi, ""));
    }
  });
}

function setLongToDt(longDt) {
  var retDate = new Date(longDt);
  return lPad(retDate.getFullYear(), "0", 4) + "-" + lPad(retDate.getMonth() + 1, "0", 2) + "-" + lPad(retDate.getDate(), "0", 2) + " " + lPad(retDate.getHours(), "0", 2) + ":" + lPad(retDate.getMinutes(), "0", 2) + ":" + lPad(retDate.getSeconds(), "0", 2);
}

function lPad(str, padStr, size) {
  if (typeof str === "undefined" || str === null) {
    return null;
  }
  var retStr = "" + str;
  var staSize = retStr.length;
  for (var i = 0; i < size - staSize; i++) {
    retStr = padStr + retStr;
  }
  return retStr;
}

function setSchDomElement(dom, var1, var2, var3, var4) {
  var selectDom = null;
  var i = 0;
  var j = 0;
  var tmpTypeof = null;
  if (typeof var1 === "number") {
    cmnSyncCall("/cmn/cmn/main/GetCdVal", {cd_num: var1}, function(data, act, input_param, callbackVar) {
      var selectDom = $(dom).filter("select");
      var i = 0;
      var j = 0;
      selectDom.children("option").remove();
      for (i = 0; i < data.length; i++) {
        if (typeof var2 === "undefined" || var2 === null) {
          var2 = "cd_seq";
        }
        if (typeof var3 === "undefined" || var3 === null) {
          var3 = "cd_val";
        }
        selectDom.append($("<option>").val(eval("data[i]." + var2)).html(replaceForXss(eval("data[i]." + var3))));
      }
      var inputDom = $(dom).filter("input");
      inputDom.siblings("div.cmn_sch_lst").remove();
      for (i = 0; i < inputDom.length; i++) {
        var tmpNewDivDom = $("<div>");
        inputDom.eq(i).after(tmpNewDivDom);
        tmpNewDivDom.append(inputDom.eq(i));
        inputDom.eq(i).parent().append(
          $("<div>").addClass("cmn_sch_lst").css("display", "none").css("zIndex", "100000").css("height", "200px")
            .css("width", inputDom.eq(i).outerWidth())
            /*.css("left", inputDom.eq(i).position().left)*/
            .css("position", "absolute")
            /*.css("top", "" + (inputDom.eq(i).position().top + 2 + inputDom.eq(i).outerHeight()) + "px")*/
            .css("backgroundColor", "#FFFFFF")
            .css("overflowY", "scroll")
        );
        for (j = 0; j < data.length; j++) {
          inputDom.eq(i).parent().children(".cmn_sch_lst").append(
            $("<a>").addClass("main").append(
              $("<div>").html(replaceForXss(data[j].cd_val))
            ).append(
              $("<input>").attr("type", "hidden").addClass("cd_seq").val("" + data[j].cd_seq)
            ).css("cursor", "pointer").click(function(event) {
              $(event.target).closest("div.cmn_sch_lst").parent().children("input").attr("data-val", $(event.target).hasClass("main") === true ? $(event.target).children("input.cd_seq").val() : $(event.target).parent().children("input.cd_seq").val());
              $(event.target).closest("div.cmn_sch_lst").parent().children("input").val($(event.target).hasClass("main") === true ? replaceHtmlToStr($(event.target).children("div").html()) : replaceHtmlToStr($(event.target).html()));
              $(event.target).closest("div.cmn_sch_lst").css("display", "none");
              $(event.target).closest("div.cmn_sch_lst").attr("clicked", "Y");
            })
          );
        }
        inputDom.eq(i).focusin(function(event) {
          $(this).select();
          var tmpDomLst = $(event.target).parent().children(".cmn_sch_lst").children(".main").children("div");
          for (j = 0; j < tmpDomLst.length; j++) {
            if (replaceHtmlToStr(tmpDomLst.eq(j).html()).toLowerCase().match($(event.target).val().toLowerCase()) !== null) {
              tmpDomLst.eq(j).parent().css("display", "block");
            } else {
              tmpDomLst.eq(j).parent().css("display", "none");
            }
          }
          $(event.target).parent().children(".cmn_sch_lst").css("display", "block");
          $(event.target).parent().children("div.cmn_sch_lst").attr("clicked", "N");
        });
        inputDom.eq(i).keyup(function(event) {
          if (event.keyCode === 13) {
            for (i = 0; i < $(event.target).parent().children(".cmn_sch_lst").children(".main").children("div").length; i++) {
              if ($(event.target).parent().children(".cmn_sch_lst").children(".main").eq(i).css("display") === "block") {
                $(event.target).val(replaceHtmlToStr($(event.target).parent().children(".cmn_sch_lst").children(".main").eq(i).children("div").html()));
                $(event.target).attr("data-val", $(event.target).parent().children(".cmn_sch_lst").children(".main").eq(i).children("input.cd_seq").val());
                break;
              }
            }
            if (i === $(event.target).parent().children(".cmn_sch_lst").children(".main").children("div").length) {
              if ($(event.target).attr("data-val").trim().length === 0) {
                $(event.target).val("");
              } else {
                var tmp = parseInt($(event.target).attr("data-val"));
                var tmpDom = $(event.target).parent().children(".cmn_sch_lst").children(".main");
                for (i = 0; i < tmpDom.length; i++) {
                  if (parseInt(tmpDom.eq(i).children("input.cd_seq").val()) === tmp) {
                    $(event.target).val(replaceHtmlToStr(tmpDom.eq(i).children("div").html()));
                    break;
                  }
                }
              }
            }
            $(event.target).parent().children(".cmn_sch_lst").css("display", "none");
            $(event.target).blur();
            return;
          }
          var tmpDomLst = $(event.target).parent().children(".cmn_sch_lst").children(".main").children("div");
          for (j = 0; j < tmpDomLst.length; j++) {
            if (replaceHtmlToStr(tmpDomLst.eq(j).html()).toLowerCase().match($(event.target).val().toLowerCase()) !== null) {
              tmpDomLst.eq(j).parent().css("display", "block");
            } else {
              tmpDomLst.eq(j).parent().css("display", "none");
            }
          }
        });
        inputDom.eq(i).focusout(function(event) {
          setTimeout(function(dom) {
            dom.css("display", "none");
          }, 200, $(event.target).parent().children(".cmn_sch_lst"));
          setTimeout(function(dom) {
            if (dom.parent().find("div.cmn_sch_lst").attr("clicked") === "Y") {
              dom.parent().find("div.cmn_sch_lst").attr("clicked", "N");
              return;
            }
            if (dom.val().trim().length === 0) {
              dom.val("");
              dom.attr("data-val", "");
              dom.parent().find("div.cmn_sch_lst").attr("clicked", "N");
              return;
            }
            for (i = 0; i < dom.parent().children(".cmn_sch_lst").children(".main").children("div").length; i++) {
              if (dom.parent().children(".cmn_sch_lst").children(".main").eq(i).css("display") === "block") {
                dom.val(replaceHtmlToStr(dom.parent().children(".cmn_sch_lst").children(".main").eq(i).children("div").html()));
                dom.attr("data-val", dom.parent().children(".cmn_sch_lst").children(".main").eq(i).children("input.cd_seq").val());
                break;
              }
            }
            if (i === dom.parent().children(".cmn_sch_lst").children(".main").children("div").length) {
              if (dom.attr("data-val").trim().length === 0) {
                dom.val("");
              } else {
                var tmp = parseInt(dom.attr("data-val"));
                var tmpDom = dom.parent().children(".cmn_sch_lst").children(".main");
                for (i = 0; i < tmpDom.length; i++) {
                  if (parseInt(tmpDom.eq(i).children("input.cd_seq").val()) === tmp) {
                    dom.val(replaceHtmlToStr(tmpDom.eq(i).children("div").html()));
                    break;
                  }
                }
              }
            }
            dom.parent().find("div.cmn_sch_lst").attr("clicked", "N");
          }, 200, $(event.target));
        });
      }
    });
  } else if (typeof var1 === "string") {
    cmnSyncCall(var1, var2, function(data, act, input_param, callbackVar) {
      var selectDom = $(dom).filter("select");
      selectDom.children("option").remove();
      for (var i = 0; i < data.length; i++) {
        if (typeof var3 === "undefined" || var3 === null) {
          var3 = "cd_seq";
        }
        if (typeof var4 === "undefined" || var4 === null) {
          var4 = "cd_val";
        }
        selectDom.append($("<option>").val(eval("data[i]." + var3)).html(replaceForXss(eval("data[i]." + var4))));
      }
    } , null);    
  } else if (typeof var1 === "object") {
    selectDom = $(dom).filter("select");
    selectDom.children("option").remove();
    for (i = 0; i < var1.length; i++) {
      var var2Split = var2.split(" ");
      var tmpVar2 = "";
      var var3Split = var3.split(" ");
      var tmpVar3 = "";
      for (j = 0; j < var2Split.length; j++) {
        if (typeof eval("var1[i]." + var2Split[j]) === "undefined") {
          tmpVar2 = tmpVar2 + var2Split[j] + " ";
        } else {
          tmpVar2 = tmpVar2 + eval("var1[i]." + var2Split[j]) + " ";
        }
      }
      tmpVar2 = tmpVar2.trim();
      for (j = 0; j < var3Split.length; j++) {
        if (var3Split[j].match(/^[0-9a-zA-Z_]+[0-9a-zA-Z_]*$/g) === null || eval("var1[i]." + var3Split[j]) === "undefined") {
          tmpVar3 = tmpVar3 + var3Split[j] + " ";
        } else {
          tmpVar3 = tmpVar3 + eval("var1[i]." + var3Split[j]) + " ";
        }
      }
      tmpVar3 = tmpVar3.trim();
      selectDom.append($("<option>").val(tmpVar2).html(replaceForXss(tmpVar3)));
    }    
  }
}

function setAutoFocusCover(dom) {
  dom.on("focus", function() {
    $(this).select();
  });
}


function findValFromInput(dom) {
  var data = "";
  if (dom.val().trim().length === 0) {
    return null;
  }
  var listDom = dom.parent().children(".cmn_sch_lst").children(".main").children("div");
  for (var i = 0; i < listDom.length; i++) {
    if (dom.val().trim() === replaceHtmlToStr(listDom.eq(i).html()).trim()) {
      return parseInt(listDom.eq(i).parent().children("input.cd_seq").val());
    }
  }
  return null;
}