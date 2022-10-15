package com.mainproject.mainBuddy.controller.image;

import com.mainproject.mainBuddy.config.auth.PrincipalDetails;
import com.mainproject.mainBuddy.domain.image.Image;
import com.mainproject.mainBuddy.domain.likes.Likes;
import com.mainproject.mainBuddy.domain.member.MemberRepository;
import com.mainproject.mainBuddy.dto.image.ImageUpdateDto;
import com.mainproject.mainBuddy.dto.image.ImageUploadDto;
import com.mainproject.mainBuddy.dto.member.CMRespDto;
import com.mainproject.mainBuddy.dto.member.MemberProfileDto;
import com.mainproject.mainBuddy.dto.member.MemberProfileDto2;
import com.mainproject.mainBuddy.mapper.MemberMapper;
import com.mainproject.mainBuddy.service.image.ImageService;
import com.mainproject.mainBuddy.service.image.LikesService;
import com.mainproject.mainBuddy.service.member.MemberGetService;
import com.mainproject.mainBuddy.service.member.MemberService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
@RequiredArgsConstructor
@RestController
public class ImageController {

    private final MemberService memberService;

    private final MemberGetService memberGetService;

    private final MemberMapper mapper;


    private final ImageService imageService;

    private final MemberRepository memberRepository;

    private final LikesService likesService;
    // postImageUrl을 받는 것이 아닌 파일을 받아야한다.
    // 그러므로 요청을 위한 Dto가 필요
    // 이미지를 업로드 하기 위해서는 로그인이 되어있는 유저정보가 필요
    // Controller는 사용자의 데이터를 받고 서비스를 호출하기만 하면 된다.

    @ApiOperation(value = "본문 내용 및 이미지 업로드", notes = "쓰고싶은 본문 글과 함께 이미지를 업로드 할 수 있음 ")
    @PostMapping("api/posts")
    public String imageUpload(ImageUploadDto imageUploadDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
        //서비스 호출
        imageService.사진업로드(imageUploadDto,principalDetails);

        return "사진 업로드 완료";

    }


    /**
     *   멤버아이디로 사진 업로드 GET 요청
     */
    @ApiOperation(value = "회원프로필 조회", notes = "게시글 올린 작성자의 회원정보를 받아온다")
    @GetMapping("/api/posts/{pageUserId}")
    public MemberProfileDto profile(@PathVariable Long pageUserId,
                                    @AuthenticationPrincipal PrincipalDetails principalDetails) {
        MemberProfileDto dto = memberGetService.회원프로필(pageUserId,
                principalDetails.getMember().getMemberId());
        return dto;
    }

    /**
     *  PostID로 GET 조회   , 이거는 뭔가용?
     */


    @GetMapping("/api/posts2/{postId}") //postId 단일 겟 요청
    public MemberProfileDto2 profile2(@PathVariable Long postId,
                                      @AuthenticationPrincipal PrincipalDetails principalDetails) {
        MemberProfileDto2 dto2 = memberGetService.회원프로필2(postId,
                principalDetails.getMember().getMemberId());
        return dto2;
    }

    /**
     *  전체유저의 게시물 보이기
     */


    @ApiOperation(value = "회원 전체의 게시물 보이기", notes = "가입한 회원들의 게시글과 이미지들을 볼 수 있게하는 기능")
    @GetMapping("/api/posts")
    public ResponseEntity getMembers(@Positive @RequestParam(required = false, defaultValue = "1") Integer page,
                                     @Positive @RequestParam(required = false, defaultValue = "100") Integer size) {
        Page<Image> pageMembers = imageService.findImages(page - 1, size);
        List<Image> images = pageMembers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.pageResponseDtos(images),
                        pageMembers),
                HttpStatus.OK);
    }

    /**
     *
     *  게시물 삭제
     */
    @ApiOperation(value = "게시물 삭제", notes = "게시물 삭제(본인이 등록한 게시물만이 삭제가능)")
    @DeleteMapping("/api/posts/{postId}") //게시물 삭제
    public ResponseEntity deletePost(
            @PathVariable("postId") @Positive long postId) {
        System.out.println("# delete post");
        imageService.deletePost(postId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     *   사진 좋아요 API
     */
    @ApiOperation(value = "게시물 좋아요 ", notes = "좋아요를 누르면 DB에 좋아요 기능 사용한 회원이 어떤 게시물에 좋아요 눌렀는지 저장")
    @PostMapping("/{imageId}/likes")
    public ResponseEntity likes(@PathVariable("imageId") Long imageId, @AuthenticationPrincipal PrincipalDetails principalDetails){
        likesService.likes(imageId,principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(new CMRespDto<>("좋아요성공",null),HttpStatus.CREATED);
    }

    /**
     *   댓글 불러오기
     */


    @GetMapping("/{imageId}/likes")
    public ResponseEntity getComments(@PathVariable("imageId") @Positive int imageId,
                                      @Positive @RequestParam(required = false, defaultValue = "1") Integer page, @Positive @RequestParam(required = false, defaultValue = "50") Integer size){
        Page<Likes> pageLikes = likesService.findLikes(imageId,page-1,size);
        List<Likes> likes = pageLikes.getContent();
        List<LikesResponseDto> responses = mapper.likesResponseDtos(likes);

        return new ResponseEntity<>(
                new MultiResponseDto<>(responses,pageLikes),HttpStatus.OK
        );
    }

    /**
     *  좋아요 수정
     */

    @ApiOperation(value = "좋아요 수정", notes = "좋아요 2번 클릭시 좋아요 변경 ")
    @PatchMapping("/api/posts/{postId}")
    public String edit(@PathVariable Long postId, ImageUpdateDto imageUpdateDto, @AuthenticationPrincipal PrincipalDetails principalDetails){
//      Member member  =  principalDetails.getMember();
//      if (member.getUsername().equals(imageService.getImage(postId).getUsername())){
        imageService.update(postId,imageUpdateDto);
        return "수정완료";
    }
//      else{
//          return "본인 게시물만 수정할 수 있습니다";
//      }
}
