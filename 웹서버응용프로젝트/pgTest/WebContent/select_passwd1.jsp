<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<% request.setCharacterEncoding("utf-8"); %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>pgJDBC select_passwd 실습</title>
</head>
<body>
	<%
	Class.forName("org.postgresql.Driver");
	Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/mydb", "studx","gkrtod123A!");

	PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM badgex WHERE stud_id=? and stud_passwd=?;");
	pstmt.setString(1,"kdhong");
	pstmt.setString(2,"1234x");
	ResultSet rs = pstmt.executeQuery();
	
	
	while(rs.next()){
		out.println(rs.getString("stud_id"));
		out.println(rs.getString("stud_passwd"));
	}
	rs.close();
	pstmt.close();
	conn.close();
	%>
</body>
</html>