package com.example.demo.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {

    @JsonProperty("login")
    String username;
    long id;

    public User (String username) {this.username = userName;}

}

