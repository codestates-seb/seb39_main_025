package com.mainproject.mainBuddy.mapper;

import java.util.List;
import javax.xml.stream.events.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CommentMapper {

    List<CommentResponseDto> commentsToCommentResponses(List<Comment> comments);
}