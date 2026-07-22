package com.example.service;

import com.example.entity.User;
import com.example.exception.UserNotFoundException;
import com.example.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long id) {

        return userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found with ID: " + id));

    }

}