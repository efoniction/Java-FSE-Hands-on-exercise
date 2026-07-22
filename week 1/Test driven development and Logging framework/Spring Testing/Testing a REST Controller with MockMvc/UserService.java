package com.example.service;

import com.example.entity.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User getUserById(Long id) {

        // Dummy data
        return new User(id, "John");
    }

}