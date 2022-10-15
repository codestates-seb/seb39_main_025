package com.mainproject.mainBuddy.config.filter;

import com.mainproject.mainBuddy.domain.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    @Autowired
    private final CorsFilter corsFilter;

    private final MemberRepository memberRepository;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .addFilter(corsFilter) // 추가
            .apply(new CustomDsl())
            .and()// 추가
            .formLogin().disable()
            .httpBasic().disable()
            .authorizeRequests()
            .antMatchers("/api/users/**")
            .access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
            .antMatchers("/api/users/**", "/subscribe/**", "/comment/**", "/image/**")
            .authenticated()
            .antMatchers("/api/v1/admin/**")
            .access("hasRole('ROLE_ADMIN')")
            .anyRequest().permitAll();
        return http.build();
    }

    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(
                AuthenticationManager.class);
            builder
                .addFilter(corsFilter)
                .addFilter(new JwtAuthenticationFilter(authenticationManager))
                .addFilter(
                    new JwtAuthorizationFilter(authenticationManager, memberRepository)); // 추가

        }
    }
}
