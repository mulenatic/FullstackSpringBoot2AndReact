package com.packt.cardatabase;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CardatabaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardatabaseApplication.class, args);
	}

    @Bean
    CommandLineRunner runner() {
	return args -> {
	    //Place your code here
	};
    }
}
