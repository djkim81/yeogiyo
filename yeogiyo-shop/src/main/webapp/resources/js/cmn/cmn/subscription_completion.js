$(document).ready(function() {
  $(".t_desc").children("em").eq(0).html(replaceForXss(getParameter("email")));
  $(".btn.btn_blue.btn_lg").click(event_btn_lg_click);
});

function event_btn_lg_click(event) {
  var param = getParameter("redirect_url");
  var redirectUrl = "";
  if (typeof param !== "undefined" && param !== null && param.length > 0) {
    redirectUrl = param;
  } else {
    redirectUrl = "/cmn/cmn/login";
  }
  $("#_cmn_loader").show();
  location.href = redirectUrl;
}