
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="cp" value="${pageContext.request.servletContext.contextPath}" scope="request" />

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Spring 4 Web MVC via Annotations</title>
        <link rel="stylesheet" type="text/css" href="${cp}/resources/css/site.css" />
        <script src="${cp}/resources/js/js.js"></script>
    </head>
    <body>
        <h4>Spring 4 Web MVC via Annotations</h4>
        Spring says: <span class="blue">${msg}</span>
    
    
    <c:if test="${!empty getWords}">
        <table class="tg">
            <tr>
                <th width="80">ID</th>
                <th width="120">Name</th>
                <th width="120">Lang</th>
                <th width="120">Rank</th>
                <th width="200">Definition</th>
            </tr>
            <c:forEach items="${getWords}" var="word">
                <tr>
                    <td>${word.id}</td>
                    <td>${word.name}</td>
                    <td>${word.lang}</td>
                    <td>${word.rank}</td>
                    <td>${word.defenition}</td>
                </tr>
            </c:forEach>
        </table>
    </c:if>
    </body>
</html>
