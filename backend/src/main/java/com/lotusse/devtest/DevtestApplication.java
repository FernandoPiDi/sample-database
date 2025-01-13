package com.lotusse.devtest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DevtestApplication {
	public static void main(String[] args) {
		SpringApplication.run(DevtestApplication.class, args);
	}

}
