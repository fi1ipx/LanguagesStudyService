
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
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
        <c:if test="${pageContext.request.userPrincipal.name != null}">
	   <h2>Welcome : ${pageContext.request.userPrincipal.name} </h2>
           <c:url var="logoutUrl" value="/logout"/>
            <form action="${logoutUrl}" method="post">
                <input type="submit" value="Logout"/>
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            </form> 
	</c:if>
        
    <h3>Word list</h3>
    <c:if test="${!empty getWords}">
        <table class="tg">
            <tr>
                <th width="80">ID</th>
                <th width="120">Lang</th>
                <th width="120">Name</th>
                <th width="120">Rank</th>
                <th width="300">Definition</th>
                <th width="60">Edit</th>
                <th width="60">Delete</th>
            </tr>
            <c:forEach items="${getWords}" var="word">
                <tr>
                    <td>${word.id}</td>
                    <td>${word.lang}</td>
                    <td>${word.name}</td>
                    <td>${word.rank}</td>
                    <td>${word.definition}</td>
                    <td><a href="<c:url value='/admin/edit/${word.id}' />">Edit</a></td>
                    <td><a href="<c:url value='/admin/remove/${word.id}' />">Delete</a></td>
                </tr>
            </c:forEach>
        </table>
    </c:if>
    
    <h3>Word editor</h3>
    <c:url var="addAction" value="/admin/words/add"/>
    <form:form action="${addAction}" commandName="editorword">
    <table>
        <c:if test="${!empty editorword.name}">
            <tr>
                <td>
                    <form:label path="id">
                        <spring:message text="ID"/>
                    </form:label>
                </td>
                <td>
                    <form:input path="id" readonly="true" size="8" disabled="true"/>
                    <form:hidden path="id"/>
                </td>
            </tr>
        </c:if>
        <tr>
            <td>
                <form:label path="name">
                    <spring:message text="Name"/>
                </form:label>
            </td>
            <td>
                <form:input path="name"/>
            </td>
        </tr>
        <tr>
            <td>
                <b>Language</b>
            </td>
            <td>
                <form:select path="lang.id">
                    <form:options items="${langList}" itemLabel="name" itemValue="id" text="Language"/>
                </form:select>
            </td>
        </tr>
        <tr>
            <td>
                <form:label path="rank">
                    <spring:message text="Rank"/>
                </form:label>
            </td>
            <td>
                <form:input path="rank"/>
            </td>
        </tr>
        <tr>
            <td>
                <form:label path="definition">
                    <spring:message text="Definition"/>
                </form:label>
            </td>
            <td>
                <form:input path="definition"/>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <c:if test="${!empty editorword.name}">
                    <input type="submit"
                           value="<spring:message text="Edit word"/>"/>
                </c:if>
                <c:if test="${empty editorword.name}">
                    <input type="submit"
                           value="<spring:message text="Add word"/>"/>
                </c:if>
            </td>
        </tr>
    </table>
    </form:form>
    
    <h3>Language list</h3>
    <c:if test="${!empty langList}">
        <table class="tg">
            <tr>
                <th width="60">ID</th>
                <th width="120">Name</th>
                <th width="60">Edit</th>
                <th width="60">Delete</th>
            </tr>
            <c:forEach items="${langList}" var="lang">
                <tr>
                    <td>${lang.id}</td>
                    <td>${lang.name}</td>
                    <td><a href="<c:url value='/admin/editlang/${lang.id}' />">Edit</a></td>
                    <td><a href="<c:url value='/admin/removelang/${lang.id}' />">Delete</a></td>
                </tr>
            </c:forEach>
        </table>
    </c:if>
    
    <h3>Language editor</h3>
    <c:url var="addAction" value="/admin/langs/add"/>
    <form:form action="${addAction}" commandName="language">
    <table>
        <c:if test="${!empty language.name}">
            <tr>
                <td>
                    <form:label path="id">
                        <spring:message text="ID"/>
                    </form:label>
                </td>
                <td>
                    <form:input path="id" readonly="true" size="8" disabled="true"/>
                    <form:hidden path="id"/>
                </td>
            </tr>
        </c:if>
        <tr>
            <td>
                <form:label path="name">
                    <spring:message text="Name"/>
                </form:label>
            </td>
            <td>
                <form:input path="name"/>
            </td>
        </tr>  
        <tr>
            <td colspan="2">
                <c:if test="${!empty language.name}">
                    <input type="submit"
                           value="<spring:message text="Edit language"/>"/>
                </c:if>
                <c:if test="${empty language.name}">
                    <input type="submit"
                           value="<spring:message text="Add language"/>"/>
                </c:if>
            </td>
        </tr>
    </table>
    </form:form>
    
    <h3>Users list</h3>
    <c:if test="${!empty susersList}">
        <table class="tg">
            <tr>
                <th width="120">Username</th>
                
                <th width="60">Edit</th>
                <th width="60">Delete</th>
            </tr>
            <c:forEach items="${susersList}" var="suser">
                <tr>
                    <td>${suser.userName}</td>
                    
                    <td><a href="<c:url value='/admin/edituser/${suser.userName}' />">Edit</a></td>
                    <td><a href="<c:url value='/admin/removeuser/${suser.userName}' />">Delete</a></td>
                </tr>
            </c:forEach>
        </table>
    </c:if>
    
    <h3>User editor</h3>
    <p>Coming soon...</p>
    
    </body>
</html>
