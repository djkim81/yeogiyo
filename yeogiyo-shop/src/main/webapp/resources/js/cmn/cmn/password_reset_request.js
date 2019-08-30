var emailValidRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

$(document).ready(function() {
  var redirectUrl = "";
  var redirectUrlParam = getParameter("redirect_url");
  if (typeof redirectUrlParam !== "undefined" && redirectUrlParam !== null && redirectUrlParam.length > 0) {
    $(".util-list").children("li").eq(1).children("a").attr("href", "/cmn/cmn/register?redirect_url=" + encodeURIComponent(redirectUrlParam));
    $(".util-list").children("li").eq(2).children("a").attr("href", "/cmn/cmn/login?redirect_url=" + encodeURIComponent(redirectUrlParam));
  } else {
    $(".util-list").children("li").eq(1).children("a").attr("href", "/cmn/cmn/register");
    $(".util-list").children("li").eq(2).children("a").attr("href", "/cmn/cmn/login");    
  }
  $(".btn.btn_blue.btn_lg").on("click", eventBtnConfirmClick);
});

function eventBtnConfirmClick(event) {
  if (validEventBtnConfirmClick() === false) {
    return;
  }
  cmnSyncCall("RequestPwdIni", {email: $("#input-id").val().trim()}, callback, null);          
}

function validEventBtnConfirmClick() {
  setErrMsg("");
  var err = true;
  if ($("#input-id").val().match(emailValidRegExp) == null) {
    setErrMsg("이메일 형식이 올바르지 않습니다.");
    if ($("#input-id").hasClass("input_success") === true) {
      $("#input-id").removeClass("input_success");
    }
    if ($("#input-id").hasClass("input_error") === false) {
      $("#input-id").addClass("input_error");
    }
    err = false;
  }
  return err;
}

function callback(data, act, input_param, callbackVar) {
  if (act == "RequestPwdIni") {
    $("#_cmn_loader").show();
    alert("비밀번호 초기화를 요청하였습니다. 이메일에 첨부된 URL 주소를 통해 초기화 바랍니다.");
    var redirectUrlParam = getParameter("redirect_url");
    if (typeof redirectUrlParam !== "undefined" && redirectUrlParam !== null && redirectUrlParam.length > 0) {
      location.href = redirectUrlParam;
    } else {
      location.href = "";
    }
  }
}

function setErrMsg(msg) {
  $(".error-msg").html(replaceForXss(msg));
  $(".error-msg").css("display", "block");
}