package com.mainproject.mainBuddy.dto.comment;

import com.mainproject.mainBuddy.domain.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    private Long id;
    private Long imageId;
    private String content;
    private Member member;


}
