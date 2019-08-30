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
    <script type="text/javascript" src="/resources/js/rgst.js" content="text/html;charset=utf-8"></script>
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
                                <h2 class="h1">회원가입</h2>
                                <div class="t_desc">회원가입에 필요한 정보를 입력해주세요. </div>
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
                                            <input type="text" placeholder="Shop ID" class="js-av_id" id="input-id">
                                            <i></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                            <input type="password" placeholder="비밀번호 (8~16자의 영문, 숫자 조합) 	
                                            " class="js-av_pass" id="input-pass">
                                            <i></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                            <input type="password" placeholder="비밀번호 확인 	
                                            " class="js-av_pass2" id="input-pass2">
                                            <i></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="trp check_validity">
                                            <input type="text" placeholder="가게명" class="" id="input-name">
                                            <i></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="">
                                            <input type="text" placeholder="가게 설명" class="" id="input-phone">
                                            <i></i> 
                                        </span>
                                    </li>
                                    <li>
                                        <span class="">
                                            <input type="text" placeholder="이메일" class="" id="input-email">
                                            <i></i> 
                                        </span>
                                    </li>
                                    <li>
                                        <span class="">
                                            <input type="text" placeholder="주소" class="" id="input-addr">
                                            <i></i> 
                                        </span>
                                    <li class="pt5">
                                        <span class="trp checkbox-box">
                                            <input id="checkbox1" type="checkbox" name=""><i></i>
                                        </span>
                                        <div class="label"><a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에 동의 (필수)</div>
                                        <p class="error-msg mt15" style="">입력하신 비밀번호가 정확하지 않습니다. </p>
                                    </li>
                                    <li class="pt25">
                                        <div class="btn_set-single">
                                            <div class="btn_item">
                                                <button class="btn btn_blue btn_lg" type="submit">확인</button>
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
    <script>
        /* == 휴대전화번호 인증 == */
        $(".js-certification").on("click", function() {
//            $(".phone_certification").show();
        })
        /* == 휴대전화번호 인증 == */
    </script>
</body>

</html>