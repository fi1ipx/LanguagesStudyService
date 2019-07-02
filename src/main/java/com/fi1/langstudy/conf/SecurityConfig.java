package com.fi1.langstudy.conf;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${langstudy.security.enabled:true}")
    private boolean securityEnabled;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        if (securityEnabled) {
            http
                    .authorizeRequests()
                    .antMatchers("/**").authenticated() // These urls are allowed by any authenticated user
                    .and()
                    .httpBasic();
        } else {
            http
                    .authorizeRequests()
                    .antMatchers("/**").permitAll() // These urls are allowed by any authenticated user
                    .and()
                    .httpBasic();
            http.csrf().disable();
        }
    }
}
