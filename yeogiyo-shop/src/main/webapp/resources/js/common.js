$(function(){    
    /*  아이디 검사식 : 영문, 숫자, 언더스코어(_), 하이픈(-)이 포함된 3~16 문자. */
    var re_id = /^[a-z0-9_-]{3,16}$/; 
    /*  비밀번호 검사식 :       
        - re_pwbasic : 영문, 숫자, 언더스코어(_), 하이픈(-)이 포함된 6~18 문자.
        - re_pw : 영문, 숫자 조합된 6~18 문자.
    */
    //var re_pwbasic = /^[a-z0-9_-]{6,18}$/; 
    var re_pw = /^.*(?=.{6,18})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

    /*  이메일 검사식 */
    var re_email = /^([\w\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/; 
    /* URL 검사식 */
    var re_url = /^(https?:\/\/)?([a-z\d\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/; 
    /* 전화번호 검사식 :
        - re_tel 하이픈(-)은 입력하지 마세요.
        - re_phone : 01로 시작하는 핸드폰 및 지역번호와 050, 070 검증함. 그리고 -(하이픈)은 넣어도 되고 생략해도 되나 넣을 때에는 정확한 위치에 넣어야 함.
    */
    //var re_tel = /^[0-9]{8,11}$/; 
    var re_phone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

    var form = $('.js-av_form'),
    uid = $('.js-av_id'),
    upw = $('.js-av_pass'),
    upw2 = $('.js-av_pass2'),
    email = $('.js-av_email'),
    url = $('.js-av_url'),
    phone = $('.js-av_phone');

    // 선택한 form에 서밋 이벤트가 발생하면 실행한다
    // if (사용자 입력 값이 정규식 검사에 의해 참이 아니면) {포함한 코드를 실행}
    // if 조건절 안의 '정규식.test(검사할값)' 형식은 true 또는 false를 반환한다
    // if 조건절 안의 검사 결과가 '!= true' 참이 아니면 {...} 실행
    // 사용자 입력 값이 참이 아니면 alert을 띄운다
    // 사용자 입력 값이 참이 아니면 오류가 발생한 input으로 포커스를 보낸다
    // 사용자 입력 값이 참이 아니면 form 서밋을 중단한다
    // form.submit( function() {
    //     if (re_id.test(uid.val()) != true) { // 아이디 검사
    //         alert('[ID 입력 오류] 유효한 ID를 입력해 주세요.');
    //         uid.focus();
    //         return false;
    //     } else if(re_pw.test(upw.val()) != true) { // 비밀번호 검사
    //         alert('[PW 입력 오류] 유효한 PW를 입력해 주세요.');
    //         upw.focus();
    //         return false;
    //     } else if(re_mail.test(mail.val()) != true) { // 이메일 검사
    //         alert('[Email 입력 오류] 유효한 이메일 주소를 입력해 주세요.');
    //         mail.focus();
    //         return false;
    //     } else if(re_url.test(url.val()) != true) { // URL 검사
    //         alert('[Web 입력 오류] 유효한 웹 사이트 주소를 입력해 주세요.');
    //         url.focus();
    //         return false;
    //     } else if(re_tel.test(tel.val()) != true) { // 전화번호 검사
    //         alert('[Tel 입력 오류] 유효한 전화번호를 입력해 주세요.');
    //         tel.focus();
    //         return false;
    //     }
    // });
        
    // #uid, #upw 인풋에 입력된 값의 길이가 적당한지 알려주려고 한다
    // #uid, #upw 다음 순서에 경고 텍스트 출력을 위한 빈 strong 요소를 추가한다
    // 무턱대고 자바스크립트를 이용해서 HTML 삽입하는 것은 좋지 않은 버릇
    // 그러나 이 경우는 strong 요소가 없어도 누구나 form 핵심 기능을 이용할 수 있으니까 문제 없다
    $('#uid, #upw').after('<strong></strong>');
        
    var _error_msg = $(".js-av_form .error-msg");        
    // uid 아이디 검사
    uid.focusout( function() { 
        if(re_email.test(uid.val()) != true) { // 이메일 검사        
            _error_msg.text('아이디가 올바르지 않습니다.').show();//;           
            uid.addClass("input_error").focus();
            return false;
        }else{
            uid.removeClass("input_error").addClass("input_success")
            _error_msg.hide();
        }
    });
        
    // upw1 비밀번호 검사
    upw.focusout( function() { 
        if(re_pw.test(upw.val()) != true) { // 비밀번호 숫자,문자 조합 검사        
            _error_msg.text('비밀번호가 올바르지 않습니다.').show();
            upw.addClass("input_error").focus();
            return false;
        }else{
            upw.removeClass("input_error").addClass("input_success")
            _error_msg.hide();
        }
    });
        
    // upw2 비밀번호 동읾한지 검사
    upw2.focusout( function() { 
        if(upw.val() !=  upw2.val()) { // 비밀번호 동일한지 검사 
            _error_msg.text('비밀번호가 동일하지 않습니다.').show(); 
            upw2.addClass("input_error").focus();
            return false;
        }else{
            upw2.removeClass("input_error").addClass("input_success")
            _error_msg.hide();
        }
    });
        
    // email 이메일
    email.focusout( function() { 
        if(re_email.test(email.val()) != true) { // 이메일 검사        
            _error_msg.text('이메일 형식이 올바르지 않습니다.').show();
            email.addClass("input_error").focus();
            return false;
        }else{
            email.removeClass("input_error").addClass("input_success");
            _error_msg.hide();
        }
    });

    // phone 전화번호
    phone.focusout( function() { 
        if(re_phone.test(phone.val()) != true) { // 이메일 검사        
            _error_msg.text('전화번호 형식이 올바르지 않습니다.').show();       
            phone.addClass("input_error").focus();
            return false;
        }else{
            phone.removeClass("input_error").addClass("input_success");
            _error_msg.hide();
        }
    });


});;$(function(){
    ///console.log("common.js"); 

    /* project_mm 텝형태 js-g_date */
    $(".js-g_date button").on("click", function(){
        $(this).closest(".js-g_date").find("button").removeClass("on");
        $(this).addClass("on");
    })

    /*  scenario_mm.html js-scenario (상단 ▼) */
    $(".js-scenario").on("click", function(){
        $(this).siblings(".scenario_group").toggleClass("scenario_open");
        if ( $(".scenario_group").hasClass("scenario_open") ){
            $(".scenario_group").slideDown(300);
        }else{
            $(".scenario_group").slideUp(300);
        }
    })

    /* Y 축 스크롤  */
    $(".mCustomScrollbar").mCustomScrollbar();
    /* X 축 스크롤  */
    $(".mCustomScrollbar-x").mCustomScrollbar({
        axis:"x",
        advanced:{autoExpandHorizontalScroll:true}
    });

    /* table_resize */
    $(".js-table_resize").colResizable();

    /* scenario_mm.html 스텝 테이블 do { } while (condition); 라디오버튼 클릭 */
    $(".mCustomScrollbar_table").mCustomScrollbar();
    $(".mCustomScrollbar_table .js-table_check").on("click", function($e){         
        var _index   =  $(this).closest("tr").index(), _data, _to;
        var _total   =  $(".mCustomScrollbar_table tr").length;
        
        if( _index <= 1 ){
            _index = 0;
        }else if( _index == _total ){
            _index = _total - 1;
        }else{
            _index -= 1; 
        }
                
        $(".mCustomScrollbar_table tr").removeClass("active");
        $(this).closest("tr").addClass("active");

        _data   = $(".mCustomScrollbar_table").find("tr:eq("+_index+")");
        _to     = $(".mCustomScrollbar_table").find(".mCSB_container").find(_data);
        $(".mCustomScrollbar_table").mCustomScrollbar("scrollTo",_to);
    });

    // 테이블 체크 삭제  
    // (popup 시나리오스텝전체보기 체크) 
    // (popup 권한 대상 목록)
    $("body").on("click", ".js-table_checkbox_del .js-table_checkbox", function($e){
        $(this).closest("tr").toggleClass("active");
    });
    $("body").on("click", ".js-table_checkbox_del .js-table_checkbox_del-btn", function($e){  
        var _trActive = $(this).closest(".js-table_checkbox_del").find(".table_body .table_board tbody tr.active");
        var _tbodyTr  = $(this).closest(".js-table_checkbox_del").find(".table_body .table_board tbody tr");
        var _theadThLength = $(this).closest(".js-table_checkbox_del").find(".table_board thead tr th").length;
        var _data_empty =   '<tr>'+
                                '<td colspan="'+_theadThLength+'" class="data-empty">데이터가 없습니다.</td>'+
                            '</tr>';
        // 체크된 거 삭제
        if( _trActive.length ){
            $(this).closest(".js-table_checkbox_del").find(".table_board tr.active").remove();
            _tbodyTr = $(this).closest(".js-table_checkbox_del").find(".table_body .table_board tbody tr");
        }else{
            alert("삭제하실 스텝을 선택해주세요.");
        }

        // 삭제 후 데이터 가 0 이면
        if( _tbodyTr.length == 0 ){
            $(this).closest(".js-table_checkbox_del").find(".table_body .table_board tbody").append(_data_empty);
        }
    });

    // (popup 프로젝트권한요청, 권한자권한이관)
    $("body").on("click", ".js-table_checkbox_send .js-table_checkbox", function($e){
        var _jsTableWrap = $(this).closest(".js-table_checkbox_send");
        $(this).closest("tr").toggleClass("active");
         if( _jsTableWrap.find("tr.active").length ){
            _jsTableWrap.find(".js-send-btn").removeProp( "disabled", false )
         }else{
            _jsTableWrap.find(".js-send-btn").prop("disabled", true );
         }
    });


    /* 권한 대상 추가 (드래그, 더블클릭) */
    $( "#js-sortable1, #js-sortable2" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
    $("body").on("dblclick", "#js-sortable1>li", function(){
        $("#js-sortable2").append(this);
    })
    $("body").on("dblclick", "#js-sortable2>li", function(){
        $("#js-sortable1").append(this);
    })


    /* 켈리터 열고 닫기 */
    $(".js-calendar").on("click", function(){
        $(this).closest(".calendar-box").toggleClass("calendar_open");
    })

    /* dot */
    //$('.js-ell').dotdotdot({ watch: 'window' });
    //$('.js-ell').ellipsis({ row: 2 , position: 'tail'});
    $(".js-ell").trpEllipsis({lines:2, responsive: true});

});



/* ========================= fixedPopupObj ========================= */ 
var fixedPopupObj = {};
function openLayerFixedPopup($this, id) { 
    //console.log('d', id);
    event.preventDefault();
    fixedPopupObj[id] = $($this).trpLayerFixedPopup('#' + id);
    fixedPopupObj[id].open($this);  // 버튼 or false

    $('.mCustomScrollbar').mCustomScrollbar();
    $('.mCustomScrollbar_table').mCustomScrollbar();
    $(".select2Basic_pop").select2({   
        dropdownCssClass : 'increasedzindexclass_pop',
        minimumResultsForSearch: Infinity,
        width:"100%"
    });

    // dim close
    //$("body").on("click", "#"+id+" .popup-dim" ,function(e){ e.preventDefault(); closeLayerFixedPopup(id); })
}
function closeLayerFixedPopup(id) { 
    event.preventDefault();
    if(fixedPopupObj[id]) fixedPopupObj[id].close(); 
    delete fixedPopupObj[id];
}
/* //========================= fixedPopupObj ========================= */ 

;$(document).ready(function () {  
    //console.log("form2.js"); 
     
    /* ie9 placeholder */
    $('input, textarea').placeholder({customClass:'my-placeholder'});
    
    /* 선택박스 */
    $(".select2Basic").select2({            
        minimumResultsForSearch: Infinity,
        /*theme: "basic"*/
    });
    // 팝업 선택박스 index 높이기
    // $(".select2Basic_pop").select2({   
    //     dropdownCssClass : 'increasedzindexclass_pop',
    //     minimumResultsForSearch: Infinity,
    //     width:"100%"
    // });
    
    /* datepicker(.datepicker-box) */
    $(".js-datepicker").datepicker({ 
        dateFormat: "yy-mm-dd", 
        showMonthAfterYear: true,
        yearSuffix: "년",
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ] ,
        dayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
        dayNamesMin: [ "Sun","Mon","Tue","Wed","Thu","Fri","Sat" ],
        dayNamesShort : [ "Sun","Mon","Tue","Wed","Thu","Fri","Sat" ],
    });
          
  

    /* 일반 툴팁 */
    $(".js-tooltip").tooltip({ 
        position: { 
            my: "center bottom-15",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" ).addClass( "arrow" ).addClass( feedback.vertical ).addClass( feedback.horizontal ).appendTo( this );
            }
        }
    });//.tooltip( "open" );

    
    /* 길설명 툴팁 */
    $(".js-tooltip_sendstate").tooltip({ 
        position: { 
            my: "center bottom-10",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" ).addClass( "arrow" ).addClass( feedback.vertical ).addClass( feedback.horizontal ).appendTo( this );
            }
        },
        tooltipClass:"tooltip_big",
        items: "img, [data-geo], [title]",
        content: function() {
            var element = $( this );
            var selcet = $( this ).attr("data-geo");
            if ( element.is( "[data-geo]" ) ) {
                $(".ui-tooltip").css({"max-width":"500px;" });
                return $(selcet).html();
            }
            if ( element.is( "[title]" ) ) {
                return element.attr( "title" );
            }
            if ( element.is( "img" ) ) {
                return element.attr( "alt" );
            }
        }   
    });//.tooltip( "open" );       

    
    $("body").on("click", "js-checkbox_del", function(){})


    /* 그룹 추가 */
    var add_group = '<li>'+
        '<span class="trp input_icon del">'+
        '<input type="text" placeholder="그룹명 입력" id="" onload="dataCheckDel(this)" onchange="dataCheckDel(this);"  value="">'+
        '<button class="">삭제</button>'+
        '</span>'+
        '</li>';
    $("body").on("click", ".js-gruopadd .btn.icon_plus", function($e){
        $e.preventDefault();
        $(this).closest(".js-gruopadd").find(".input-list").append(add_group);
    });

    /* 그룹 삭제 */ 
    $("body").on("click", ".js-gruopadd .input_icon.del button", function($e){
        $e.preventDefault();
        $(this).closest("li").remove();
    });

});

/* 그룹 삭제 버튼 생성 */
function dataCheckDel($this){ 
    $($this).each(function(i) {
        if ( $(this).val() ){
            $(this).siblings("button").show();
        }else{
            $(this).siblings("button").hide();
        }
    });
}
//# sourceMappingURL=maps/common.js.map
