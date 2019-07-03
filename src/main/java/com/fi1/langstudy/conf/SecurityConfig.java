package com.fi1.langstudy.conf;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String MATCH_ALL = "/**";

    @Value("${langstudy.security.enabled:true}")
    private boolean securityEnabled;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        if (securityEnabled) {
            http
                    .authorizeRequests()
                    .antMatchers(MATCH_ALL)
                    .authenticated()
                    .and()
                    .httpBasic();
        } else {
            http
                    .authorizeRequests()
                    .antMatchers(MATCH_ALL)
                    .permitAll()
                    .and()
                    .httpBasic();
        }
        http.csrf().disable();
    }
}
