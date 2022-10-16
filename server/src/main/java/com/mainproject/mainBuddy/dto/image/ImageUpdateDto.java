package com.mainproject.mainBuddy.dto.image;

import com.mainproject.mainBuddy.domain.image.Image;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ImageUpdateDto {
    private String caption;
    private String username;
    private Long liked;


    //엔티티 -> dto
    public static ImageUpdateDto toDto(Image image){
        return new ImageUpdateDto(
                image.getCaption(),
                image.getMember().getUsername(),
                image.getLiked());
    }
}
