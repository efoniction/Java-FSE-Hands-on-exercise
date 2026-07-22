package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        // Load Spring IoC Container
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean
        BookService service =
                context.getBean("bookService", BookService.class);

        // Call the service method
        service.addBook();
    }

}
