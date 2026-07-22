package com.example.repository;

import com.example.entity.User;

import org.junit.jupiter.api.Test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository repository;

    @Test
    void testFindByName() {

        repository.save(new User(1L, "John"));
        repository.save(new User(2L, "David"));
        repository.save(new User(3L, "John"));

        List<User> users = repository.findByName("John");

        assertEquals(2, users.size());

        assertEquals("John", users.get(0).getName());
        assertEquals("John", users.get(1).getName());

    }

}