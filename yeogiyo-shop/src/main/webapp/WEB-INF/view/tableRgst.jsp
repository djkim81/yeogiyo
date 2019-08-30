<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- header -->
    <meta charset="UTF-8">
    <title>회원가입 | 여기요</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0">
    <link rel="shortcut icon" href="/resources/images/favicon.ico">
    <link rel="stylesheet" href="/resources/css/library/csslibrary.css">
    <link rel="stylesheet" href="/resources/css/common.css">
    <!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript" charset="utf-8"></script>
<![endif]-->
    <script src="/resources/js/library/jquery.min.js"></script>
    <script src="/resources/js/library/jquerylibrary.min.js"></script>
<!--    <script src="/resources/js/common.js"></script>-->
    <script type="text/javascript" src="/resources/js/cmn.js" content="text/html;charset=utf-8"></script>
    <script type="text/javascript" src="/resources/js/tableRgst.js" content="text/html;charset=utf-8"></script>
    <script src="/resources/js/library/bluebird.min.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!-- //header -->
</head>

<body>
    <div class="wrapper member">
        <!-- header -->
        <div id="header" class="member_membership">
            <div class="inner">
                <h1 class="logo"></h1>
                <ul class="util-list">
                    <li><a href="#">회원정보수정</a></li>
                </ul>
            </div>
        </div>

        <!-- //header -->

        <!-- container -->
        <div id="container">
            <div id="contents" class="">

                <section class="body-inner">
                    <div class="login-inner">
                        <article>
                            <div class="title">
                                <h2 class="h1">테이블 등록/수정</h2>
                                <div class="t_desc">테이블 설정값을 입력해주세요. </div>
                            </div>
                            <form action="" class="js-av_form">
                                <!-- 
                                    오류 : input_error
                                    성공 : input_success 
                                    메시지 : error-msg 
                                -->
                                <ul class="input-list" style="width:800px;">
                                    <li>
                                        <span class="trp check_validity" style="width:800px;">
                                            <input type="text" placeholder="테이블 번호" class="js-table_num" style="width:90px;">
                                            <i></i>
                                            <input type="text" placeholder="테이블 설명" class="js-table_desc" id="input-table_desc" style="width:250px;">
                                            <i></i>
                                            <button class="btn btn_gray btn_md js-add" type="button" style="width:20px;">추가</button>
                                            <button class="btn btn_gray btn_md js-barcd" type="button" style="width:20px;">바코드</button>
                                        </span>
                                    </li>
                                </ul>
                            </form>
                        </article>
                        <button class="btn btn_gray btn_md js-save" type="button" style="width:80px;">저장</button>

                    </div>
                </section>

            </div>
        </div>
        <!-- //container -->

    </div>
    <script>
        /* == 휴대전화번호 인증 == */
        $(".js-certification").on("click", function() {
//            $(".phone_certification").show();
        })
        /* == 휴대전화번호 인증 == */
    </script>
</body>

</html>