package com.cognizant.springlearn.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class AppUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) {

        return new User(
                "user",
                "{noop}pwd",
                Collections.emptyList());
    }
}