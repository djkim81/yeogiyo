var emailValidRegExp = /^[a-zA-Z]([0-9a-zA-Z]){8,16}$/i;

$(document).ready(function() {
  $("#input-phone").parent().siblings("button").click(function(event) {
    alert("아직 지원하지 않는 기능입니다.");
  });
  $("#input-name").keydown(function(event) {
    var code = null;
    if (window.event) {
      code = window.event.keyCode;
    } else {
      code = event.which;
    }
    if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || (code >= 97 && code <= 122) || code == 8 || code == 9 || code == 13 || code == 46 || code == 95 || code == 37 || code == 32) {
      window.event.returnValue = true;
      return;
    }
    if (window.event) {
      window.event.returnValue = false;
    } else {
      event.preventDefault();
    }
  });
  $("#input-name").keyup(function(event) {
    if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
      $("#input-name").val($("#input-name").val().replace(/^[^0-9a-zA-Zㄱ-힣 ]/gi, ""));
    }
  });
  $(".btn.btn_blue.btn_lg").attr("type", "button");
  $(".btn.btn_blue.btn_lg").click(eventBtnConfirmClick);
  $("#input-id").attr("maxlength", 40);
  $("#input-pass").attr("maxlength", 16);
  $("#input-pass2").attr("maxlength", 16);
  $("#input-name").attr("maxlength", 40);
  $("#input-phone").keyup(function(event) {
  });
  $("#input-id").focus();
  var redirectUrl = "";
  var redirectUrlParam = getParameter("redirect_url");
  if (typeof redirectUrlParam !== "undefined" && redirectUrlParam !== null && redirectUrlParam.length > 0) {
    $(".util-list").children("li").eq(0).children("a").attr("href", "/cmn/cmn/password_reset_request?redirect_url=" + encodeURIComponent(redirectUrlParam));
    $(".util-list").children("li").eq(1).children("a").attr("href", "/cmn/cmn/register?redirect_url=" + encodeURIComponent(redirectUrlParam));
    $(".util-list").children("li").eq(2).children("a").attr("href", "/cmn/cmn/login?redirect_url=" + encodeURIComponent(redirectUrlParam));
  } else {
    $(".util-list").children("li").eq(0).children("a").attr("href", "/cmn/cmn/password_reset_request");
    $(".util-list").children("li").eq(1).children("a").attr("href", "/cmn/cmn/register");
    $(".util-list").children("li").eq(2).children("a").attr("href", "/cmn/cmn/login");    
  }
});

function eventBtnConfirmClick(event) {
  if (validRegisterValue() === false) {
    return false;
  }
  cmnSyncCall("GetRSAKey", {}, callback, null);
}

function callback(data, act, input_param, callbackVar) {
  if (act === "GetRSAKey") {
    var rsa = new RSAKey();
    rsa.setPublic(data.pub_key_modulus, data.pub_key_exponent);
    cmnSyncCall("Register", {email: rsa.encrypt($("#input-id").val().trim()), login_passwd: rsa.encrypt($("#input-pass").val())
                             , user_nm: rsa.encrypt($("#input-name").val().trim())
                             ,  pub_modulus: data.pub_key_modulus, pub_exponent: data.pub_key_exponent
                            }, callback, null, callbackErr);
  } else if (act === "Register") {
    var redirectUrl = "/cmn/cmn/subscription_completion?email=" + encodeURIComponent($("#input-id").val().trim());
    var redirectUrlParam = getParameter("redirect_url");
    if (typeof redirectUrlParam !== "undefined" && redirectUrlParam !== null && redirectUrlParam.length > 0) {
      redirectUrl = redirectUrl + "&redirect_url=" + encodeURIComponent(redirectUrlParam);
    }
    $("#_cmn_loader").show();
    location.href = redirectUrl;
  }
}

function callbackErr(error_num, tpNm, param, callbackVar) {
  if (error_num === 24) {
    setErrMsg("사전에 이미 등록되어있는 이메일 주소입니다..");    
    if ($("#input-id").hasClass("input-error") === false) {
      $("#input-id").addClass("input-error")
    }
    if ($("#input-id").hasClass("input-success") === true) {
      $("#input-id").removeClass("input-success");
    }
  }
}

function validRegisterValue() {
  if ($("#input-id").val().match(emailValidRegExp) == null) {
    setErrMsg("정상적인 이메일 주소가 아닙니다.(8~16글자 영문)");
    if ($("#input-id").hasClass("input-error") === false) {
      $("#input-id").addClass("input-error")
    }
    if ($("#input-id").hasClass("input-success") === true) {
      $("#input-id").removeClass("input-success");
    }
    return false;
  } else {
    if ($("#input-id").hasClass("input-error") === true) {
      $("#input-id").removeClass("input-error")
    }
    if ($("#input-id").hasClass("input-success") === false) {
      $("#input-id").addClass("input-success");
    }
  }
  if ($("#input-pass").val().length < 8 || $("#input-pass").val().length > 16) {
    setErrMsg("비밀번호가 올바르지 않습니다.");
    if ($("#input-pass").hasClass("input-error") === false) {
      $("#input-pass").addClass("input-error")
    }
    if ($("#input-pass").hasClass("input-success") === true) {
      $("#input-pass").removeClass("input-success");
    }
    return false;
  } else {
    if ($("#input-pass").hasClass("input-error") === true) {
      $("#input-pass").removeClass("input-error")
    }
    if ($("#input-pass").hasClass("input-success") === false) {
      $("#input-pass").addClass("input-success");
    }
  }
  if ($("#input-pass2").val() !== $("#input-pass").val()) {
    setErrMsg("비밀번호가 동일하지 않습니다.");
    if ($("#input-pass2").hasClass("input-error") === false) {
      $("#input-pass2").addClass("input-error")
    }
    if ($("#input-pass2").hasClass("input-success") === true) {
      $("#input-pass2").removeClass("input-success");
    }
    return false;
  } else {
    if ($("#input-pass2").hasClass("input-error") === true) {
      $("#input-pass2").removeClass("input-error")
    }
    if ($("#input-pass2").hasClass("input-success") === false) {
      $("#input-pass2").addClass("input-success");
    }
  }
  if ($("#input-name").val().trim().length < 3) {
    setErrMsg("이름은 최소 2글자 이상 입니다.");
    if ($("#input-name").hasClass("input-error") === false) {
      $("#input-name").addClass("input-error")
    }
    if ($("#input-name").hasClass("input-success") === true) {
      $("#input-name").removeClass("input-success");
    }
    return false;
  } else {
    if ($("#input-name").hasClass("input-error") === true) {
      $("#input-name").removeClass("input-error")
    }
    if ($("#input-name").hasClass("input-success") === false) {
      $("#input-name").addClass("input-success");
    }
  }
  if ($("#checkbox1").is(":checked") === false) {
    setErrMsg("이용약관 및 개인정보처리방침에 동의 바랍니다.");
    return false;
  }
}

function setErrMsg(msg) {
  $(".error-msg").html(replaceForXss(msg));
  $(".error-msg").css("display", "block");
}
