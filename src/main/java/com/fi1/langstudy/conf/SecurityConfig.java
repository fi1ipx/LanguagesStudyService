package com.fi1.langstudy.conf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private static final String MATCH_ALL = "/**";

    protected DataSource dataSource;

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
                    .formLogin();
        } else {
            http
                    .authorizeRequests()
                    .antMatchers(MATCH_ALL)
                    .permitAll();
            http.csrf().disable();
        }
    }

    @Bean
    public JdbcUserDetailsManager userDetailsManager() {
        final JdbcUserDetailsManager manager = new JdbcUserDetailsManager();
        manager.setDataSource(dataSource);
        manager.setUsersByUsernameQuery(
                "select username,password,enabled from study.users where username=?");
        manager.setAuthoritiesByUsernameQuery(
                "select username, role from study.user_roles where username=?");
        manager.setRolePrefix("ROLE_");
        return manager;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder builder)
            throws Exception {

        builder.userDetailsService(userDetailsManager());
    }

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }
}
