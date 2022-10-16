package com.mainproject.mainBuddy.dto.image;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
@Getter
@AllArgsConstructor
public class ImageResponseDto {
    private Long id;

    private String caption;  //글 올릴떄 올라가는 글

    private String postImageUrl; // 사진을 전송받아서 서버의 특정폴더에 저장할것, DB에 저장된 경로 INSERT,그래서 애는 경로만 갖고있다

    private String username;

    private Long snsId;

    private Long liked;

    private LocalDateTime creation_date;

    private LocalDateTime last_edit_date;
}
