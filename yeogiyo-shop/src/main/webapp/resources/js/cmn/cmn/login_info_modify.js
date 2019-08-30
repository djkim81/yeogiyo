$(document).ready(function() {
  var url = null;
  $("#input-pass1").off("focusout");
  $("#input-pass2").off("focusout");
  $("#input-name").off("focusout");
  $("#input-phone").off("focusout");
  $(".util-list > li > a").css("cursor", "pointer");
  $(".util-list > li > a").eq(0).click(function() {
    url = "/cmn/cmn/password_reset_request";
    if (getParameter("redirect_url") !== null) {
      url = url + "?redirect_url=" + getParameter("redirect_url");
    }
    $("#_cmn_loader").show();
    location.href = url;
  });
  $(".util-list > li > a").eq(1).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "정말로 탈퇴하시겠습니까?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '예! 탈퇴합니다!'
    }).then(function (result) {
      if (result.value) {
        Swal.fire(
          "Good job!",
          "탈퇴에 성공하였습니다..",
          "success"
        ).then(function (result) {
          var url = null;
          if (getParameter("redirect_url") !== null) {
            url = getParameter("redirect_url");
            $("#_cmn_loader").show();
            location.href = url;    
          } else {
            history.back();
          }
        });
      }
    });
  });
  $(".util-list > li > a").eq(2).click(function() {
    cmnSyncCall("/cmn/cmn/login/Logout", {}, callback, null);
  });
  if (getParameter("mapp_key") === null) {
    Swal.fire({
      type: "error",
      title: "Ooops...",
      text: "정상적인 매핑키 파라미터가 존재하지 않습니다.."
    }).then(
      function() {
        history.back();
      }
    );
    return;
  }
  setAutoFocusCover($("#input-pass1"));
  setAutoFocusCover($("#input-pass2"));
  setAutoFocusCover($("#input-name"));
  $("#input-phone").attr("readonly", "readonly");
  $("#but_cancel").click(function(event) {
    history.back();
  });
  $("#but_confirm").click(function(event) {
    if (inputValidChk() === false) {
      return;
    }
    cmnSyncCall("UpdateUserInfo", {mapp_key: getParameter("mapp_key")
                                  , user_nm: $("#input-name").val().trim()
                                  , login_passwd: $("#input-pass1").val().trim().length === 0 ? null : $("#input-pass1").val().trim()
                                  }, callback, null);
  });
  cmnSyncCall("GetUserInfo", {mapp_key: getParameter("mapp_key")}, callback, null);
});

function callback(data, act, input_param, callbackVar) {
  if (act === "GetUserInfo") {
    $("#js_id").val(data.email);
    $("#input-name").val(data.user_nm);
  } else if (act === "UpdateUserInfo") {
    Swal.fire(
      "Good job!",
      "사용자정보 변경에 성공하였습니다.",
      "success"
    ).then(
      function() {
        if (getParameter("redirect_url") === null) {
          history.back();
        } else {
          location.href = getParameter("redirect_url");
        }
      }
    );
  } else if (act === "/cmn/cmn/login/Logout") {
    var url = null;
    if (getParameter("redirect_url") !== null) {
      url = getParameter("redirect_url");
      $("#_cmn_loader").show();
      location.href = url;    
    } else {
      history.back();
    }
  }
}

function inputValidChk() {
  if ($("#input-pass1").val().length !== 0 || $("#input-pass2").val().length !== 0) {
    if ($("#input-pass1").val().length < 8 || $("#input-pass1").val().length > 16) {
      setErrMsg("비밀번호가 올바르지 않습니다.");
      if ($("#input-pass1").hasClass("input_error") === false) {
        $("#input-pass1").addClass("input_error")
      }
      if ($("#input-pass1").hasClass("input_success") === true) {
        $("#input-pass1").removeClass("input_success");
      }
      return false;
    } else {
      if ($("#input-pass1").hasClass("input_error") === true) {
        $("#input-pass1").removeClass("input_error")
      }
      if ($("#input-pass1").hasClass("input_success") === false) {
        $("#input-pass1").addClass("input_success");
      }
    }
    if ($("#input-pass2").val() !== $("#input-pass1").val()) {
      setErrMsg("비밀번호가 동일하지 않습니다.");
      if ($("#input-pass2").hasClass("input_error") === false) {
        $("#input-pass2").addClass("input_error")
      }
      if ($("#input-pass2").hasClass("input_success") === true) {
        $("#input-pass2").removeClass("input_success");
      }
      return false;
    } else {
      if ($("#input-pass2").hasClass("input_error") === true) {
        $("#input-pass2").removeClass("input_error")
      }
      if ($("#input-pass2").hasClass("input_success") === false) {
        $("#input-pass2").addClass("input_success");
      }
    }
  }
  if ($("#input-name").val().trim().length < 3) {
    setErrMsg("이름은 최소 2글자 이상 입니다.");
    if ($("#input-name").hasClass("input_error") === false) {
      $("#input-name").addClass("input_error")
    }
    if ($("#input-name").hasClass("input_success") === true) {
      $("#input-name").removeClass("input_success");
    }
    return false;
  } else {
    if ($("#input-name").hasClass("input_error") === true) {
      $("#input-name").removeClass("input_error")
    }
    if ($("#input-name").hasClass("input_success") === false) {
      $("#input-name").addClass("input_success");
    }
  }
}

function setErrMsg(msg) {
  $(".error-msg").html(replaceForXss(msg));
  $(".error-msg").css("display", "block");
}