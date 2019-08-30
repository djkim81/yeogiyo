$(document).ready(function() {
  var url = null;
  $(".logo").click(function() {
    $("#_cmn_loader").show();
    location.href = "/skd/sel";
  });
  $(".util-list > li > a").eq(1).click(function() {
    url = "/cmn/cmn/register"
    if (getParameter("redirect_url") !== null) {
      url = url + "?redirect_url=" + getParameter("redirect_url");
    }
    location.href = url;
  });
  $(".util-list > li > a").eq(2).click(function() {
    url = "/cmn/cmn/login"
    if (getParameter("redirect_url") !== null) {
      url = url + "?redirect_url=" + getParameter("redirect_url");
    }
    location.href = url;
  });
  setAutoFocusCover($("#input-pass"));
  $("#input-pass").focus();
  $("#confirm").click(eventConfirmClick);
  $("#confirm").keydown(eventConfirmKeydown);
  $("#input-pass").keydown(eventInputPassKeydown);
});

function eventConfirmClick(event) {
  submit();
}

function eventConfirmKeydown(event) {
  if (event.keyCode == 13) {
    submit();
    return false;
  }
}

function eventInputPassKeydown(event) {
  if (event.keyCode == 13) {
    submit();
    return false;
  }
}

function callback(data, act, input_param, callbackVar) {
  if (act === "Req") {
    var url = "/cmn/cmn/login_info_modify?mapp_key=" + data.mapp_key;
    if (getParameter("redirect_url") !== null) {
      url = url + "&redirect_url=" + getParameter("redirect_url");
    }
    $("#_cmn_loader").show();
    location.href = url;
  }
}

function submit() {
  var passwd = $("#input-pass").val();
  if (passwd.length < 8 || passwd.length > 16) {
    setErrMsg("비밀번호가 올바르지 않습니다.");
    return;
  }
  cmnSyncCall("Req", {passwd: passwd}, callback, null);
  return;
}

function setErrMsg(msg) {
  if (typeof Swal === "undefined") {
    alert(msg);
  } else {
    Swal.fire({
      type: "error",
      title: "Ooops...",
      text: msg
    });
  }
}