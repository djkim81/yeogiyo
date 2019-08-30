<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- header -->
    <meta charset="UTF-8">
    <title>가입완료 | S.U.T.A.</title>
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
    <script src="/resources/js/common.js"></script>
    <script type="text/javascript" src="/resources/js/cmn.js" content="text/html;charset=utf-8"></script>
    <script type="text/javascript" src="/resources/js/cmn/cmn/subscription_completion.js" content="text/html;charset=utf-8"></script>
    <script src="/resources/js/library/bluebird.min.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!-- //header -->
</head>

<body>
    <div class="wrapper member">
        <!-- header -->
        <div id="header" class="member_login">
            <div class="inner">
                <h1 class="logo"><a href="/"><img src="/resources/images/common/logo.png" alt="S.U.T.A"></a></h1>
                <ul class="util-list">

                    <li><a href="#">비밀번호찾기</a></li>
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">로그인</a></li>




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
                                <h2 class="h1">환영합니다</h2>
                                <div class="t_desc">
                                    <em>suekim@sk.com</em> 으로 인증 메일이 발송 되었습니다. <br> 메일 안의 링크를 확인하시면 회원가입이 완료됩니다.
                                </div>
                            </div>
                            <!-- 
                                오류 : input_error
                                성공 : input_success 
                                메시지 : error-msg 
                            -->
                            <ul class="input-list">
                                <li>
                                    <div class="join-img">
                                        <img src="/resources/images/member/join_completion.png" alt="가입완료">
                                    </div>
                                </li>
                                <li class="">
                                    <div class="btn_set-single">
                                        <div class="btn_item">
                                            <button class="btn btn_blue btn_lg" type="button">확인</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </article>


                    </div>
                </section>

            </div>
        </div>
        <!-- //container -->


    </div>
</body>

</html>