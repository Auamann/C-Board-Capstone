package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        var test = new InMemoryUserDetailsManager();
        test.createUser(User.builder().username("user").password("{noop}user").roles("USER").build());
        test.createUser(User.builder().username("admin").password("{noop}admin").roles("ADMIN").build());
        return test;
    }
}
