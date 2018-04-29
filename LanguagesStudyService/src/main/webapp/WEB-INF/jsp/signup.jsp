<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<c:set var="cp" value="${pageContext.request.servletContext.contextPath}" scope="request" />

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
    <c:if test="${not empty error}">
        ${error}
    </c:if>

    <form name='form_signup' action="register" method='POST'>
        <table>
            <tr>
                <td>E-mail:</td>
                <td><input type='text' name='user_email' value=''></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type='password' name='password' /></td>
            </tr>
            <tr>
                <td>Confirm:</td>
                <td><input type='password' name='password_confirm' /></td>
            </tr>
            <tr>
                <td><input name="submit" type="submit" value="submit" /></td>
                <td> </td>
            </tr>
        </table>
    </form>
</body>
</html>