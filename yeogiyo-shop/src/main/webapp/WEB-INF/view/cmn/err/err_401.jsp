<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8" import="com.cmn.err.KokodogException"%>
<%@ page isErrorPage="true"%>
<%
String errMsg = null;
int responseStatus = 404;
String errSubMsg = null;
if (exception != null && exception instanceof KokodogException == true) {
  errMsg = ((KokodogException)exception).getMessage();
} else if (exception != null && exception instanceof Exception == true) {
  errMsg = "내부 시스템 오류 입니다. 관리자에게 문의하세요.";
  errSubMsg = exception.getMessage();
} else {
  errMsg = "내부 시스템 오류 입니다. 관리자에게 문의하세요.";
  errSubMsg = "분석 불가한 오류";  
}
request.setAttribute("_REQUEST_RESPONSE_STATUS", responseStatus);
request.setAttribute("_REQUEST_ERR_MESSGE", errMsg);
response.setStatus(responseStatus);
if (request.getHeader("Accept") != null && request.getHeader("Accept").indexOf("json") >= 0 && (request.getHeader("Accept").indexOf("html") < 0 || request.getHeader("Accept").indexOf("json") < request.getHeader("Accept").indexOf("html"))) {
  response.setContentType("application/json");
  if (exception != null && exception instanceof KokodogException == true) {
%>
{"error_num": <%=responseStatus%>, "error_nm": "<%=errMsg%>"}
<%
  } else {
%>
{"error_num": <%=responseStatus%>, "error_nm": "<%=errMsg%>", "error_sub_nm": "<%=errSubMsg%>"}
<%
  }
} else {
%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- header -->
    <meta charset="UTF-8">
    <title>ERROR | Project</title>
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
    <script src="/resources/js/cmn.js"></script>
    <script src="/resources/js/cmn/err/err_401.js"></script>
    <script src="/resources/js/library/sweetalert2@8.js"></script>
    <!-- //header -->
</head>

<body>
    <div class="wrapper">

        <!-- container -->
        <div id="container">
            <div id="contents" class="error">

                <div class="layout_t">
                    <div class="layout_c">
                        <div class="error-inner">
                            <img src="/resources/images/etc/error_alert.png" alt="ERROR">
                            <p class="title">요청하신 페이지 호출 중 오류가 발생했습니다.</p>
                            <p class="desc">
                                해당 사용자는 이 페이지에 접근할 수 있는 권한이 없습니다.<br/>
                                만약 접근하기를 원한다면 관리자에게 접근 권한을 요청해주세요.<br/>
                            </p>
                        </div>
                        <div style="=width:600px;top:0;left:0;height:50px;text-align:center;">
                          <div style="width:600px;top:0;left:50%;display:inline-block;margin-right:0;">
                            <div class="select-box mb20" style="top:0;width:500px;top:0;left:50%;text-align:center;float:left">
                              <div class="select-box mb20">
                                <select class="select2Basic_pop long" id="id_label_single3">
                                </select>
                              </div>
                            </div>
                            <div>
                              <button class="btn btn_default" id="req_but" style="width:90px;left:5px;" type="button">요청</button>
                            </div>
                          </div>
                        </div>
                        <div class="btn_bottom btn_set-center">
                            <div class="btn_item">
                                <button class="btn btn_default btn_lg" onclick="history.go(-1);return false;" type="button">이전페이지</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- //container -->

    </div>
</body>

</html>
<%
}
%>