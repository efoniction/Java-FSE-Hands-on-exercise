package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.AuthenticationResponse;
import com.cognizant.springlearn.security.JwtUtil;

import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    private final JwtUtil jwtUtil;

    public AuthenticationController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {

        String base64Credentials =
                authorizationHeader.substring("Basic".length()).trim();

        byte[] decoded =
                Base64.getDecoder().decode(base64Credentials);

        String credentials =
                new String(decoded, StandardCharsets.UTF_8);

        String[] values = credentials.split(":", 2);

        String username = values[0];

        String token = jwtUtil.generateToken(username);

        return new AuthenticationResponse(token);
    }
}