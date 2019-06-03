package com.fi1.langstudy.conf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com.fi1.langstudy.*",
		"com.fi1.langstudy.repository",
		"com.fi1.langstudy.service",
		"com.fi1.langstudy.conf"})
@EnableJpaRepositories(basePackages = "com.fi1.langstudy.repository")
@EntityScan({"com.fi1.langstudy.object"})
public class LangStudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(LangStudyApplication.class, args);
	}

}
