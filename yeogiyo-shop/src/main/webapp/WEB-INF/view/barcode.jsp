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
    <script type="text/javascript" src="/resources/js/barcode.js" content="text/html;charset=utf-8"></script>
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
                                <h2 class="h1">테이블 번호 : </h2>
                            </div>
                            <form action="" class="js-av_form">
                                <ul class="input-list" style="width:800px;">
                                    <li>
                                      <img class="barcode_img">
                                    </li>
                                    <li>
                                        <span class="trp check_validity" style="width:800px;">
                                            <button class="btn btn_gray btn_md js-add" type="button" style="width:20px;">출력</button>
                                        </span>
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