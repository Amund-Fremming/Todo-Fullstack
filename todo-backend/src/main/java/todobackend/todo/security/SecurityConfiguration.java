package todobackend.todo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    private final JwtTokenProvider jwtTokenProvider; // You need to define this bean

    @Autowired
    public SecurityConfiguration(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // You usually need to disable CSRF with JWT based authentication
                .authorizeHttpRequests((authz) -> authz
                        .antMatchers("/auth/**").permitAll() // Allow unauthenticated access to authentication endpoints
                        .anyRequest().authenticated()
                )
                .apply(jwtConfigurer());

        return http.build();
    }

    private JwtConfigurer jwtConfigurer() {
        return new JwtConfigurer(jwtTokenProvider);
    }
}
