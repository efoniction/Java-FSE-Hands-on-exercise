package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {

        System.out.println("BookService is processing...");

        bookRepository.saveBook();

        try {
            Thread.sleep(500); // Simulate processing time
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}