package com.mainproject.mainBuddy.dto.auth;

import com.mainproject.mainBuddy.domain.member.Member;
import javax.validation.constraints.NotBlank;
import lombok.Data;

@Data

public class MemberUpdateDto {
    @NotBlank
    private String username;
    @NotBlank
    private String password;

    public Member toEntity(){
        return Member.builder()
            .username(username)
            .password(password)
            .build();
    }
}