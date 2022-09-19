package com.main.domain.member;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // DB에 테이블 생성
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Member {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 번호 증가 전략이 데이터베이스 따라감
    private Long id;

    private String username;

    @Column
    private String email;

    @Column
    private String password;

    private String userId;

    private String website;

    private String bio;

    private String phone;

    private String profileImageUrl;

    @Column
    private String role;

    @Column
    private LocalDateTime createDate;

    @PrePersist // DB에 INSERT 되기 직전에 실행
    public void createdDate() {
        this.createDate = LocalDateTime.now();
    }

    public List<String> getRoleList() {
        if (this.role.length() > 0) {
            return Arrays.asList(this.role.split(","));
        }
        return new ArrayList<>();
    }
}
