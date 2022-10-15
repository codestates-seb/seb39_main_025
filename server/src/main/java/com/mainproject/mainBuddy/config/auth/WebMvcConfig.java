package com.mainproject.mainBuddy.config.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.Duration;
@Configuration
public class WebMvcConfig implements WebMvcConfigurer{

    @Value("${file.path}")
    private String uploadFolder;


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        WebMvcConfigurer.super.addResourceHandlers(registry);

        registry.addResourceHandler("/upload/**")  //이러한 주소패턴이 나오면 아래들을 발동시킬것이다.
                .addResourceLocations("file:///"+uploadFolder)  //내가 적은 경로가 발동이 됨
                .setCacheControl(CacheControl.maxAge(Duration.ofHours(1L)).cachePublic()); //캐시 설정
    }
}
