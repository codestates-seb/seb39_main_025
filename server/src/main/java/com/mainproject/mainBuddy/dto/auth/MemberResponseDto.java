package com.mainproject.mainBuddy.dto.auth;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberResponseDto {

    private long memberId;
    private String email;

    private String password;
    private String username;
    private String name;
    private String role;

    private String profileImageUrl;

    private LocalDateTime creation_date;

    private LocalDateTime last_edit_date;
}