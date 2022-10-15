package com.mainproject.mainBuddy.dto.likes;

import com.mainproject.mainBuddy.domain.image.Image;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
@Getter
@AllArgsConstructor
public class LikesResponseDto {
    private Long id;

    private Image image;

    private LocalDateTime createDate;

    private LocalDateTime creation_date;

    private LocalDateTime last_edit_date;

}
