package com.mainproject.mainBuddy.mapper;

import com.mainproject.mainBuddy.dto.image.ImageResponseDto;
import java.awt.Image;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ImageMapper {

    List<ImageResponseDto> pageResponseDtos(List<Image> images);
}