package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.model.CountryList;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private final ApplicationContext context;

    public CountryService(ApplicationContext context) {
        this.context = context;
    }

    public Country getCountry(String code) {

        CountryList countries =
                context.getBean("countryList", CountryList.class);

        for (Country country : countries.getCountryList()) {

            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }

        }

        return null;
    }
}