package com.mainproject.mainBuddy.mapper;

import com.mainproject.mainBuddy.domain.likes.Likes;
import com.mainproject.mainBuddy.dto.auth.MemberRegisterDto;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface LikesMapper {

    List<LikesResponseDto> likesResponseDtos(List<Likes> likes);
}