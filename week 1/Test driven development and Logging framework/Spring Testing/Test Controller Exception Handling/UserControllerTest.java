package com.example.controller;

import com.example.service.UserService;
import com.example.exception.GlobalExceptionHandler;

import java.util.NoSuchElementException;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.when;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.context.annotation.Import;

import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
@Import(GlobalExceptionHandler.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void testUserNotFoundException() throws Exception {

        when(userService.getUserById(1L))
                .thenThrow(new NoSuchElementException());

        mockMvc.perform(get("/users/1"))

                .andExpect(status().isNotFound())
                .andExpect(content().string("User not found"));

    }
}