<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- header -->
    <meta charset="UTF-8">
    <title>사용자 정보 | S.U.T.A.</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico" type="image/icon">
    <link rel="shortcut icon" href="/resources/images/favicon.ico">
    <link rel="apple-touch-icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="/resources/css/library/csslibrary.css">
    <link rel="stylesheet" href="/resources/css/common.css">
    <script src="/resources/js/library/bluebird.min.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript" charset="utf-8"></script>
<![endif]-->
    <script src="/resources/js/library/jquery.min.js"></script>
    <script src="/resources/js/library/jquerylibrary.min.js"></script>
    <script src="/resources/js/common.js"></script>
    <script type="text/javascript" src="/resources/js/cmn.js" content="text/html;charset=utf-8"></script>
    <script type="text/javascript" src="/resources/js/login_info_modify.js" content="text/html;charset=utf-8"></script>
    <script src="/resources/js/library/bluebird.min.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!-- //header -->
</head>

<body>
    <div class="wrapper member">
        <!-- header -->
        <div id="header" class="member_user_info">
            <div class="inner">
                <h1 class="logo"></h1>
                <ul class="util-list">




                    <li><a>비밀번호찾기</a></li>
                    <!-- [2018-1226] 테그수정 -->
                    <li><a>회원탈퇴</a></li>
                    <!-- //[2018-1226] 테그수정 -->
                    <li><a>로그아웃</a></li>

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
                                <h2 class="h1">사용자 정보</h2>
                            </div>
                            <form action="" class="js-av_form">
                                <!-- 
                                오류 : input_error
                                성공 : input_success 
                                메시지 : error-msg 
                            -->
                                <ul class="input-list">
                                    <li>
                                        <div class="free_member">
                                            <a href="#">BASIC(Free) member</a>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="trp member_sns">
                                        <input type="text" placeholder="" class="" id="js_id" readonly>
                                    </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                        <input type="password" placeholder="비밀번호 (8~16자의 영문, 숫자 조합)	
                                        " class="js-av_pass" id="input-pass1">
                                        <i></i>
                                    </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                        <input type="password" placeholder="비밀번호 확인" class="js-av_pass2" id="input-pass2">
                                        <i></i>
                                    </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                        <input type="text" placeholder="이름" class="" id="input-name" value="">
                                        <i></i>
                                    </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                        <input type="text" placeholder="전화번호" class="js-av_phone" id="input-phone" value="">
                                        <i></i>
                                    </span>
                                    </li>
                                    <li>
                                        <p class="text-notice">확인을 누르시면 변경사항이 저장됩니다.</p>
                                        <p class="error-msg mt15">입력하신 정보가 정확하지 않습니다. </p>
                                    </li>
                                    <li class="pt25">
                                        <div class="btn_set-double">
                                            <div class="btn_item">
                                                <button class="btn btn_gray btn_lg" type="button" id="but_cancel">취소</button>
                                            </div>
                                            <div class="btn_item">
                                                <button class="btn btn_blue btn_lg" type="button" id="but_confirm">확인</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </form>
                        </article>

                    </div>
                </section>

            </div>
        </div>
        <!-- //container -->


    </div>
</body>

</html>