<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<% request.setCharacterEncoding("utf-8"); %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>pg JDBC update_passwd 실습</title>
</head>
<body>
	<%
	Class.forName("org.postgresql.Driver");
	Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/mydb", "studx","gkrtod123A!");
	
	Statement stmt = conn.createStatement();
	int rec_no=stmt.executeUpdate("UPDATE studuser SET stud_name='이몽룡' WHERE stud_id='mrlee';");
	ResultSet rs = stmt.executeQuery("SELECT * FROM studuser;");
	while(rs.next()){
		out.println(rs.getString("stud_id"));
		out.println(rs.getString("stud_passwd"));
	}
	rs.close();
	stmt.close();
	conn.close();
	%>
</body>
</html>