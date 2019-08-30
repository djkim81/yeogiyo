$(document).ready(function() {
  $(".js-add").click(function() {
	$(".input-list").append(
	  $("<li>").append(
	    $("<span>").addClass("trp").addClass("check_validity").css("width", "800px").append(
	      $("<input>").attr("type", "text").attr("placeholder", "테이블번호").addClass("js-table_num").css("width", "90px")	  
	    ).append(
		  $("<i>")
	    ).append(
		  $("<input>").attr("type", "text").attr("placeholder", "테이블 설명").addClass("js-table_desc").css("width", "250px")	  
	    ).append(
		  $("<i>")
	    ).append(
		  $("<button>").attr("type", "button").addClass("btn").addClass("btn_gray").addClass("btn_md").addClass("js-del").css("width", "20px").html("삭제").click(function(event) {
		    delData($(event.target));
		  })
	    ).append(
		  $("<button>").attr("type", "button").addClass("btn").addClass("btn_gray").addClass("btn_md").addClass("js-barcode").css("width", "20px").html("바코드").click(function(event) {
		    location.href = "/ui/barcode?tableNum=" + $(event.target).closest("span").find("input").eq(0).val() + "&shopId=" + getParameter("shopId");
		  })
		)
	  )
	)
  });
  $(".js-barcd").eq(0).click(function() {
	    location.href = "/ui/barcode?tableNum=" + $(event.target).closest("span").find("input").eq(0).val() + "&shopId=" + getParameter("shopId");	
  });
  $(".js-save").click(function() {
	var data = $(".input-list").find("li");
	for (var i = 0; i < data.length; i++) {
	  $.ajax({url: "/table_rgst", method: "POST", contentType:"json", data: {tableNum: Number(data.eq(i).find("input").eq(0).val()), shopId: getParameter("shopId")
		  , success: function() {
		       Swal.fire({
		  	     title: "Good job!",
		  	     type: "success",
		           text: "저장에 성공하였습니다."
		  	   });
		  }
	    }
	  })
	}
  });
});

function delData(target) {
  target.closest("li").remove();
}