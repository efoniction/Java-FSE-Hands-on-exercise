package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    private final ApplicationContext context;

    public CountryController(ApplicationContext context) {
        this.context = context;
    }

    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("START");

        Country country = context.getBean("country", Country.class);

        LOGGER.info("END");

        return country;
    }
}