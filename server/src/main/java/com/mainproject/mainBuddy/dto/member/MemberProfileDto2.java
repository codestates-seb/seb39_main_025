package com.mainproject.mainBuddy.dto.member;

import com.mainproject.mainBuddy.domain.image.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MemberProfileDto2 {
    private Image image;
}
