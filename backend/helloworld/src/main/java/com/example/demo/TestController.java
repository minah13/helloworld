package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@GetMapping("/test")
	public String testMsg() {
		return "Spring Boot and React 연동 테스트 \n";
	}
}
