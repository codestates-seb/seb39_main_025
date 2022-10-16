package com.mainproject.mainBuddy.dto.member;

import com.mainproject.mainBuddy.domain.image.Image;
import com.mainproject.mainBuddy.domain.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MemberProfileDto {
    private boolean PageOwnerState;   //이 페이지의 주인인지 아닌지의 여부에 관한 데이터
    private int imageCount;
    private Member member;
    private Image image;
}
