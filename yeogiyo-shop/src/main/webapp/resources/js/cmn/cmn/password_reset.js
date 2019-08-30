$(document).ready(function() {
  var mappKey = getParameter("mapp_key");
  if (typeof mappKey === "undefined" || mappKey === null || mappKey.length === 0) {
    alert("정상적인 Key 값이 아닙니다.");
    $("#_cmn_loader").show();
    window.open("", "_self").close();
  } else {
    cmnSyncCall("GetIsMappKeyExist", {mapp_key: mappKey}, callback, null, callbackErr);
  }
});

function callbackErr(error_num, tpNm, param, callbackVar) {
  if (error_num === 11) {
    window.open("", "_self").close();
  }
}

function callback(data, act, input_param, callbackVar) {
  if (act === "GetRSAKey") {
    var rsa = new RSAKey();
    rsa.setPublic(data.pub_key_modulus, data.pub_key_exponent);
    cmnSyncCall("RequestPwdChg", {mapp_key: getParameter("mapp_key"), pwd: rsa.encrypt($("#input-id").val())
                                  , pub_modulus: data.pub_key_modulus, pub_exponent: data.pub_key_exponent
                                 }, callback, null);
  } else if (act === "GetIsMappKeyExist") {
    $("#confirm").click(function() {
      if (validChk() === true) {
        cmnSyncCall("GetRSAKey", {}, callback, null);
        return;
      }
    });
  } else if (act === "RequestPwdChg") {
    Swal.fire(
      "Good job!",
      "비밀번호가 변경되었습니다.",
      "success"
    ).then(function() {
      location.href = "/";
    });    
  }
}

function validChk() {
  if ($("#input-id").val().length < 8 || $("#input-id").val().length > 16) {
    Swal.fire({
      type: "error",
      title: "Ooops...",
      text: "정상적인 비밀번호가 아닙니다.(8글자에서 16글자 사이)"      
    });
    return false;
  } else if ($("#input-pass").val() !== $("#input-id").val()) {
    Swal.fire({
      type: "error",
      title: "Ooops...",
      text: "비밀번호 확인 결과가 일치하지 않습니다."      
    });
    return false;
  } else {
    return true;
  }
}