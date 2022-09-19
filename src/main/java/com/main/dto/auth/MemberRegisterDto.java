package com.main.dto.auth;

import com.main.domain.member.Member;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Builder
//@Data //getter,setter
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberRegisterDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{6,20}$",
        message = "비밀번호는 6~20 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String password;

    private String username;

    private String userId;
    private String role;

//    public Member toEntity() {
//        return Member.builder()
//            .email(email)
//            .password(password)
//            .role(role)
//            .build();
//    }
}
