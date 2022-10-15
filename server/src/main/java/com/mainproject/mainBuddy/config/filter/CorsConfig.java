package com.mainproject.mainBuddy.config.filter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("https://staybuddy.netlify.app/"); //프론트 엔드포인트
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedOrigin("https://server.staybuddy.net/");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.addExposedHeader("Authorization"); //프론트에서 로컬스토리지에 저장 가능하게 expose
        config.addExposedHeader("memberId");  //프론트에서 로컬스토리지에 저장 가능하게 expose
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}