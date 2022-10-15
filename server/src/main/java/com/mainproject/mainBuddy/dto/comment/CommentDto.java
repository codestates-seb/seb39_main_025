package com.mainproject.mainBuddy.dto.comment;

import lombok.Data;

@Data
public class CommentDto {
    private Long id;

    private String content;  // 내용


    private Long imageId;     // 몇번 게시글 쓸것인지

    //toEntity가 필요없다

}
