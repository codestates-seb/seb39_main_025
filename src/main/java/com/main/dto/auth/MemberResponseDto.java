package com.main.dto.auth;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String password;
    private String username;
    private String userId;
    private String role;
    private LocalDateTime createDate;
}
