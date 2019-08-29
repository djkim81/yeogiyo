<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- header -->
    <meta charset="UTF-8">
    <title>인증 하기 | S.U.T.A.</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico" type="image/icon">
    <link rel="shortcut icon" href="/resources/images/favicon.ico">
    <link rel="apple-touch-icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="/resources/css/library/csslibrary.css">
    <link rel="stylesheet" href="/resources/css/common.css">
    <!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript" charset="utf-8"></script>
<![endif]-->
    <script src="/resources/js/library/jquery.min.js"></script>
    <script src="/resources/js/library/jquerylibrary.min.js"></script>
    <script src="/resources/js/common.js"></script>
    <script type="text/javascript" src="/resources/js/cmn.js" content="text/html;charset=utf-8"></script>
    <script type="text/javascript" src="/resources/js/cmn/cmn/reauth.js" content="text/html;charset=utf-8"></script>
    <script src="/resources/js/library/bluebird.min.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!-- //header -->
</head>

<body>
    <div class="wrapper member">
        <!-- header -->
        <div id="header" class="member_authentication">
            <div class="inner">
                <h1 class="logo"><a style="cursor:pointer;"><img src="/resources/images/common/logo.png" alt="S.U.T.A"></a></h1>
                <ul class="util-list">



                    <!-- [2018-1226] 오타 수정 -->
                    <li><a style="cursor:pointer;">이메일 아이디 찾기</a></li>
                    <!-- //[2018-1226] 오타 수정 -->
                    <li><a style="cursor:pointer;">회원가입</a></li>
                    <li><a style="cursor:pointer;">로그인</a></li>


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
                                <h2 class="h1">인증 하기</h2>
                                <div class="t_desc">고객님의 개인정보 보호를 위해, 비밀번호 확인을 부탁드립니다 </div>
                            </div>
                            <form action="" class="js-av_form">
                                <!-- 
                                오류 : input_error
                                성공 : input_success 
                                메시지 : error-msg 
                            -->
                                <ul class="input-list">
                                    <li>
                                        <span class="trp check_validity">
                                        <input type="password" placeholder="비밀번호" class="" id="input-pass">
                                        <i></i>
                                    </span>
                                    </li>
                                    <li class="pt25">
                                        <div class="btn_set-single">
                                            <div class="btn_item">
                                                <button class="btn btn_blue btn_lg" type="button" id="confirm">확인</button>
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