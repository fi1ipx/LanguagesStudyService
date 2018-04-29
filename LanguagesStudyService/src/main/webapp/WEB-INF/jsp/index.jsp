<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<c:set var="cp" value="${pageContext.request.servletContext.contextPath}" scope="request" />

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>There will be landing</title>
    </head>
    <body>
        <h1>Index page with project description</h1>
        
        <c:if test="${pageContext.request.userPrincipal.name != null}">
	    <a href="<c:url value='/customer' />">Profile</a>
	</c:if>
        <c:if test="${pageContext.request.userPrincipal.name == null}">
	    <a href="<c:url value='/signup' />">Sign up</a>
        </c:if>
            
        <c:if test="${pageContext.request.userPrincipal.name != null}">
	    <a href="<c:url value='/logout' />">Logout</a>
	</c:if>
        <c:if test="${pageContext.request.userPrincipal.name == null}">
	    <a href="<c:url value='/login' />">Login</a>
        </c:if>
            
        <c:if test="${pageContext.request.userPrincipal.name == 'admin'}">
	    <a href="<c:url value='/admin' />">Administration</a>
	</c:if>
    </body>
</html>
