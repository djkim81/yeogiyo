var textIdInput = "";
var textPassInput = "";
var emailValidRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

$(document).ready(function() {
  if ($("#input-id").hasClass("input_success") === true) {
    $("#input-id").removeClass("input_success");
  }
  if ($("#input-id").hasClass("input_error") === true) {
    $("#input-id").removeClass("input_error");
  }
  if ($("#input-pass").hasClass("input_success") === true) {
    $("#input-pass").removeClass("input_success");
  }
  if ($("#input-pass").hasClass("input_error") === true) {
    $("#input-pass").removeClass("input_error");
  }
  $(".bg_sns-facebook").on("click", function() {
    setErrMsg("아직 지원하지 않는 기능입니다.");
  });
  $(".bg_sns-google").on("click", function() {
    setErrMsg("아직 지원하지 않는 기능입니다.");
  });
  setOnlyEmail("#input-id");
  $("#input-id").attr("maxlength", 40);
  $("#input-pass").attr("maxlength", 40);
  $(".btn_lg.btn_blue").on("click", eventClickBtnLgBtnBlue);
  $("#input-id").keyup(function(event) {
    if (textIdInput !== $("#input-id").val()) {
      setErrMsg("");
      if ($("#input-id").hasClass("input_success") === true) {
        $("#input-id").removeClass("input_success");
      }
      if ($("#input-id").hasClass("input_error") === true) {
        $("#input-id").removeClass("input_error");
      }
    }
    textIdInput = $("#input-id").val();
  });
  $("#input-pass").keyup(function(event) {
    if (textPassInput !== $("#input-pass").val()) {
      setErrMsg("");
      if ($("#input-pass").hasClass("input_success") === true) {
        $("#input-pass").removeClass("input_success");
      }
      if ($("#input-pass").hasClass("input_error") === true) {
        $("#input-pass").removeClass("input_error");
      }
    }
    textPassInput = $("#input-pass").val();
    if (event.keyCode == 13 && $("#input-id").val().length > 0 && $("#input-pass").val().length > 0) {
      loginProcess();
    }
  });
  if (get_cookie("login_id") != null && get_cookie("login_id").length > 0) {
    $("#input-id").val(get_cookie("login_id"));
    $("#checkbox1").prop("checked", true);
    $("#input-pass").focus();
  } else {
    $("#input-id").val("");
    $("#checkbox1").prop("checked", false);
    $("#input-id").focus();
  }
  var redirectUrl = getParameter("redirect_url");
  if (typeof redirectUrl !== "undefined" && redirectUrl !== null && redirectUrl.length > 0) {
    $(".util-list").children("li").eq(0).children("a").attr("href", "/ui/rgst?redirect_url=" + encodeURIComponent(redirectUrl));
  } else {
    $(".util-list").children("li").eq(0).children("a").attr("href", "/ui/rgst");
  }
});

function eventClickBtnLgBtnBlue(event) {
  loginProcess();
}

function loginProcess() {
  if (loginValidChk() === false) {
    return;
  }
  cmnSyncCall("GetRSAKey", {}, callback, null);          
}

function loginValidChk() {
  setErrMsg("");
  var err = true;
  if ($("#input-id").val().match(emailValidRegExp) == null) {
    setErrMsg("정상적인 이메일 주소가 아닙니다.");
    if ($("#input-id").hasClass("input_success") === true) {
      $("#input-id").removeClass("input_success");
    }
    if ($("#input-id").hasClass("input_error") === false) {
      $("#input-id").addClass("input_error");
    }
    err = false;
  } else {
    if ($("#input-id").hasClass("input_success") === true) {
      $("#input-id").removeClass("input_success");
    }
    if ($("#input-id").hasClass("input_error") === true) {
      $("#input-id").removeClass("input_error");
    }
  }
  if ($("#input-pass").val().length < 8) {
    var prevMsg = getErrMsg().trim();
    if (prevMsg.length > 1) {
      setErrMsg(getErrMsg() + " 8글자 이상의 비밀번호를 입력해주세요.");      
    } else {
      setErrMsg("8글자 이상의 비밀번호를 입력해주세요.");
    }
    err = false;
    if ($("#input-pass").hasClass("input_success") === true) {
      $("#input-pass").removeClass("input_success");
    }
    if ($("#input-pass").hasClass("input_error") === false) {
      $("#input-pass").addClass("input_error");
    }
  } else {
    if ($("#input-pass").hasClass("input_success") === true) {
      $("#input-pass").removeClass("input_success");
    }
    if ($("#input-pass").hasClass("input_error") === true) {
      $("#input-pass").removeClass("input_error");
    }
  }
  return err;
}

function callback(data, act, input_param, callbackVar) {
  if (act == "TempLogin") {
    setErrMsg("로그인에 성공하였습니다.");
    if ($("#input-id").hasClass("input_success") === false) {
      $("#input-id").addClass("input_success");
    }
    if ($("#input-id").hasClass("input_error") === true) {
      $("#input-id").removeClass("input_error");
    }
    if ($("#input-pass").hasClass("input_success") === false) {
      $("#input-pass").addClass("input_success");
    }
    if ($("#input-pass").hasClass("input_error") === true) {
      $("#input-pass").removeClass("input_error");
    }
    if ($("#checkbox1").is(":checked") === true) {
      set_cookie("login_id", $("#input-id").val().trim());
    } else {
      delete_cookie("login_id");
    }
    $("body").css("cursor", "wait");
    $("#_cmn_loader").show();
    var redirectUrlParam = getParameter("redirect_url");
    if (typeof redirectUrlParam !== "undefined" && redirectUrlParam !== null && redirectUrlParam.length > 0) {
      location.href = redirectUrlParam;
    } else {
      location.href = "";
    }
  } else if (act == "GetRSAKey") {
    var rsa = new RSAKey();
    rsa.setPublic(data.pub_key_modulus, data.pub_key_exponent);
    cmnSyncCall("TempLogin", {login_id: rsa.encrypt($("#input-id").val()), login_passwd: rsa.encrypt($("#input-pass").val())
                             , pub_modulus: data.pub_key_modulus, pub_exponent: data.pub_key_exponent}, callback, null, callbackErr);          
  }
}

function callbackErr(error_num, tpNm, param, callbackVar) {
  if (error_num === 25) {
    setErrMsg("등록되지 않은 로그인ID 입니다.");
    if ($("#input-id").hasClass("input_success") === true) {
      $("#input-id").removeClass("input_success");
    }
    if ($("#input-id").hasClass("input_error") === false) {
      $("#input-id").addClass("input_error");
    }
    if ($("#input-pass").hasClass("input_success") === true) {
      $("#input-pass").removeClass("input_success");
    }
    if ($("#input-pass").hasClass("input_error") === true) {
      $("#input-pass").removeClass("input_error");
    }
    $("#input-id").focus();
    $("#input-id").select();
  } else if (error_num === 26) {
    setErrMsg("비밀번호가 틀렸습니다.");
    if ($("#input-id").hasClass("input_success") === false) {
      $("#input-id").addClass("input_success");
    }
    if ($("#input-id").hasClass("input_error") === true) {
      $("#input-id").removeClass("input_error");
    }
    if ($("#input-pass").hasClass("input_success") === true) {
      $("#input-pass").removeClass("input_success");
    }
    if ($("#input-pass").hasClass("input_error") === false) {
      $("#input-pass").addClass("input_error");
    }
    $("#input-pass").focus();
    $("#input-pass").select();    
  }
}

function setErrMsg(msg) {
  $(".error-msg").html(replaceForXss(msg));
  $(".error-msg").css("display", "block");
}

function getErrMsg() {
  return replaceHtmlToStr($(".error-msg").html());
}

function setOnlyEmail(id) {
  $(id).keydown(function(event) {
    var code = null;
    if (window.event) {
      code = window.event.keyCode;
    } else {
      code = event.which;
    }
    if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || (code >= 97 && code <= 122) || code == 8 || code == 9 || code == 13 || code == 46 || code == 95 || code == 37 || code == 39 || code == 190) {
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
      $(id).val($(id).val().replace(/^[^0-9a-zA-Z]|[^0-9a-zA-Z@\.]/gi, ""));
    }
  });
}