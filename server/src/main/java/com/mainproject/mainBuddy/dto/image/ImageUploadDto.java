package com.mainproject.mainBuddy.dto.image;


import com.mainproject.mainBuddy.domain.image.Image;
import com.mainproject.mainBuddy.domain.member.Member;
import com.mainproject.mainBuddy.dto.comment.CommentResponseDto;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@Data
public class ImageUploadDto {
    private MultipartFile file;
    private String caption;

    private Long snsId;

    private Long liked;

    private List<CommentResponseDto> comments;

    // postImage가 정확하게 뭐냐면면
    public Image toEntity(String postImageUrl, Member member, String username, Long snsId, Long liked){
        return Image.builder()
                .caption(caption)
                .username(username)
                .postImageUrl(postImageUrl)
                .snsId(snsId)
                .liked(liked)
                .member(member)
                .build();
    }

}
