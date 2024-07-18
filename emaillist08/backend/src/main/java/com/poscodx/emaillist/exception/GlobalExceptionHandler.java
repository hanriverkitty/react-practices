package com.poscodx.emaillist.exception;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.poscodx.emaillist.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(Exception.class)
	public void handler(Exception e, HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 1. 로깅(logging)
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());

		// 2. 요청구분
		// request header에 accept를 보고 json인지 html인지 확인한다

		// json 요청: requsat header에 application/json (o)
		// html 요청: requsat header에 application/json (x)
		String accept = request.getHeader("accept");

		// handler 가 String 이면 json과 jsp 응답을 동시에 해줄 수 없다 -> void로 변경
		if (accept.matches(".*application/json.*")) {

			// 3. json 응답
			// 메시지 컨버터를 통한 것이 아닌 json을 직접 string으로 바꾼다
			JsonResult jsonResult = JsonResult.fail(errors.toString());
			String jsonString = new ObjectMapper().writeValueAsString(jsonResult);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setContentType("application/json; charset=utf-8");
			OutputStream os = response.getOutputStream();
			os.write(jsonString.getBytes("utf-8"));
			os.close();

			return;
		}
		// for 404 html request
		if (e instanceof NoHandlerFoundException) {
			request.getRequestDispatcher("/error/404").forward(request, response);

		// for 500 html request
		} else {
			request.setAttribute("error", errors.toString());
			request.getRequestDispatcher("/error/500").forward(request, response);
		}

	}
}
