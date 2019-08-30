<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- header -->
    <meta charset="UTF-8">
    <title>로그인 | 여기요</title>
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
    <script type="text/javascript" src="/resources/js/login.js" content="text/html;charset=utf-8"></script>
    <script src="/resources/js/library/bluebird.min.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!-- //header -->
</head>

<body>
    <div class="wrapper member">
        <!-- header -->
        <div id="header" class="member_login">
            <div class="inner">
                <h1 class="logo"></h1>
                <ul class="util-list">

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
                                <h2 class="h1">로그인</h2>
                            </div>
                            <!-- 
                                오류 : input_error
                                성공 : input_success 
                                메시지 : error-msg 
                            -->
                            <ul class="input-list">
                                <li>
                                    <span class="trp check_validity">
                                        <input type="text" placeholder="Shop ID" class="input_success" id="input-id">
                                        <i></i>
                                    </span>
                                </li>
                                <li>
                                    <span class="trp check_validity">
                                        <input type="password" placeholder="PASSWORD" class="input_error" id="input-pass">
                                        <i></i>
                                    </span>
                                </li>
                                <li class="pt5">
                                    <span class="trp checkbox-box">
                                        <input id="checkbox1" type="checkbox" name="">
                                        <i></i>
                                        <label for="checkbox1">아이디저장</label>
                                    </span>
                                    <p class="error-msg mt15" style="display: none">입력하신 비밀번호가 정확하지 않습니다. </p>
                                </li>
                                <li class="pt25">
                                    <div class="btn_set-single">
                                        <div class="btn_item">
                                            <button class="btn btn_blue btn_lg" type="button">확인</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </article>

                        <article class="mt40">
                            <div class="simple-box">
                                <p class=simple_login>SNS 간편 로그인</p>
                            </div>
                            <div class="btn_set-double">
                                <div class="btn_item">
                                    <button class="btn btn_default btn_lg bg_sns-facebook" type="button"></button>
                                </div>
                                <div class="btn_item">
                                    <button class="btn btn_default btn_lg bg_sns-google" type="button"></button>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

            </div>
        </div>
        <!-- //container -->


    </div>
</body>

</html>