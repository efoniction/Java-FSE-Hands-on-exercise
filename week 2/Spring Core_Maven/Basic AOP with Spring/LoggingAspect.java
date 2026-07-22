package com.library.aspect;

public class LoggingAspect {

    // Before Advice
    public void beforeMethod() {
        System.out.println("Logging: Method execution started.");
    }

    // After Advice
    public void afterMethod() {
        System.out.println("Logging: Method execution completed.");
    }

}