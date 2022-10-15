package com.mainproject.mainBuddy.exception;

import java.util.Map;

public class CustomValidationApiException extends RuntimeException{

    private Map<String,String> errorMap;
    // 생성자
    public CustomValidationApiException(String message, Map<String, String> errorMap) {
        super(message);  // 부모한테 메세지 던져줌
        this.errorMap = errorMap;
    }

    public CustomValidationApiException(String message ) {
        super(message);  // 부모한테 메세지 던져줌
    }



    public Map<String,String> getErrorMap(){
        return errorMap;
    }
}
