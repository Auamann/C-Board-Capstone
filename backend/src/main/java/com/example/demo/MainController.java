package com.example.demo;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/")
    public String home() {
        return "home page";
    }
@GetMapping("/profile")
@PreAuthorize("hasRole(USER)")
public String profile(){
        return "profile page";
}
    @GetMapping("/admin")
    @PreAuthorize("hasRole(ADMIN)")
    public String admin() {
        return "admin page";
    }
}