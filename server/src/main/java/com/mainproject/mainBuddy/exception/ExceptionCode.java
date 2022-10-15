package com.mainproject.mainBuddy.exception;

import lombok.Getter;

//서비스에서 예외처리 커스텀
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "존재하지 않는 회원입니다."),
    USERNAME_EXISTS(409, "이미 사용중인 닉네임입니다."),
    MEMBER_EXISTS(409, "이미 존재하는 회원입니다."),
    MEMBER_NOT_MATCH(403, "본인이 아닙니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}