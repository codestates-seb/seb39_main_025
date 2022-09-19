package com.main.config;

import com.main.config.jwt.JwtAuthenticationFilter;
import com.main.config.jwt.JwtAuthorizationFilter;
import com.main.domain.member.MemberRepository;
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

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http.csrf().disable();
//        //  "/","/user/","/image/","/subscribe/","/comment/"
//        http.authorizeRequests()
//            .antMatchers("/","/user/","/image/","/subscribe/","/comment/").authenticated()
//            .anyRequest().permitAll()  // 그게 아닌 모든 요청은 허용하겠다.
//            //권한이 필요한 사람들에게 403에러만 뜨는것이 아닌 권한을 받을 수 있는 loginPage로 이동시키려면
//            .and()
//            .formLogin()
//            .loginPage("/auth/signin")  //GET
//            .loginProcessingUrl("/auth/signin") //POST -> 스프링시큐리티가 로그인 프로세스 진행 , login요청인지 여기서 판단
//            .defaultSuccessUrl("/");   //정상적으로 login 성공하면 Index Page로 이동
//
//        return http.build();
//    }
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
            .antMatchers("/api/v1/user/**")
            .access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
            .antMatchers("/api/v1/manager/**")
            .access("hasRole('ROLE_ADMIN')")
            .antMatchers("/api/v1/admin/**")
            .access("hasRole('ROLE_ADMIN')")
            .anyRequest().permitAll();
        return http.build();
    }
    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            builder
                .addFilter(corsFilter)
                .addFilter(new JwtAuthenticationFilter(authenticationManager))
                .addFilter(new JwtAuthorizationFilter(authenticationManager,memberRepository)); // 추가

        }
    }
}