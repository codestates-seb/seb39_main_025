package com.mainproject.mainBuddy.controller.comment;

import com.mainproject.mainBuddy.config.auth.PrincipalDetails;
import com.mainproject.mainBuddy.domain.comment.Comment;
import com.mainproject.mainBuddy.dto.comment.CommentDto;
import com.mainproject.mainBuddy.dto.comment.CommentResponseDto;
import com.mainproject.mainBuddy.dto.member.CMRespDto;
import com.mainproject.mainBuddy.exception.CustomValidationApiException;
import com.mainproject.mainBuddy.mapper.MemberMapper;
import com.mainproject.mainBuddy.service.commit.CommentService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;
    private final MemberMapper mapper;


    /**
     *  댓글 생성
     */
    @ApiOperation(value = "댓글 생성", notes = "게시글에 댓글 생성(본인 및 타인 게시물에 게시글 등록 가능), 요청 해주신 가입한 회원 아이디가 아닌" +
            "닉네임으로 댓글 생성한 사람 보이도록 함 ")
    @PostMapping("/api/comments")
    public ResponseEntity commentSave(@Valid @RequestBody CommentDto commentDto, BindingResult bindingResult, @AuthenticationPrincipal PrincipalDetails principalDetails){
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            //for문을 돌면서 에러 생긴 필드에 관한 메세지를 모음
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }   //강제로 Exception이 터지도록하였다. 이렇게 Exception만 터지게되면 ux가 좋지않다.
            //그러므로 Exception만을 따로 처리하는 handler패키지 만듦
            throw new CustomValidationApiException("유효성 검사를 실패하였습니다", errorMap);
        }


        Comment comment  =  commentService.댓글쓰기(commentDto.getContent(),commentDto.getImageId(),principalDetails.getMember().getMemberId());  //여기에 날라가야할게 content,ImageId,UserId 세개가 날라갸야됨

        return new ResponseEntity<>(new CMRespDto<>("댓글 쓰기 성공",comment), HttpStatus.CREATED);
    }

    /**
     *  댓글 조회
     */


    @ApiOperation(value = "댓글 조회", notes = "댓글 조회하도록함 ")
    @GetMapping("/api/{postId}/comments")
    public ResponseEntity getComments(@PathVariable("postId") @Positive long postId,
                                      @Positive @RequestParam(required = false, defaultValue = "1") Integer page, @Positive @RequestParam(required = false, defaultValue = "100") Integer size){
        Page<Comment> pageComments = commentService.findComments(postId,page-1,size);
        List<Comment> comments = pageComments.getContent();
        List<CommentResponseDto> responses = mapper.commentsToCommentResponses(comments);

        return new ResponseEntity<>(
                new MultiResponseDto<>(responses,pageComments),HttpStatus.OK
        );
    }

    /**
     *  댓글 삭제
     */

    @ApiOperation(value = "댓글 삭제", notes = "댓글 삭제 가능")
    @DeleteMapping("/api/comments/{commentId}")
    public ResponseEntity commentDelete(@PathVariable Long commentId){
        commentService.댓글삭제(commentId);
        return new ResponseEntity<>(new CMRespDto<>("댓글삭제 성공",null),HttpStatus.OK);
    }
}
