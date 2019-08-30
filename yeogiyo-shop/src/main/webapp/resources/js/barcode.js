$(document).ready(function() {
  $.ajax({url: "/table_info", data: {shopId: getParameter("shopId"), tableNum: Number(getParameter("tableNum"))}, method: "GET"
	  , contentType: "json"
	  , success: function(data) {
		$(".barcode_img").attr("src", "data:image/jpeg;base64," + data.encodedQrImg);
	  }
  });
  $(".h1").eq(0).html("테이블번호 : " + getParameter("tableNum"));
});