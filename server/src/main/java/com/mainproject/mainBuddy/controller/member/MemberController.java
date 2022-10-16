package com.mainproject.mainBuddy.controller.member;

import com.mainproject.mainBuddy.config.auth.PrincipalDetails;
import com.mainproject.mainBuddy.domain.member.Member;
import com.mainproject.mainBuddy.dto.auth.MemberRegisterDto;
import com.mainproject.mainBuddy.dto.auth.MemberUpdateDto;
import com.mainproject.mainBuddy.dto.member.CMRespDto;
import com.mainproject.mainBuddy.exception.CustomValidationApiException;
import com.mainproject.mainBuddy.mapper.MemberMapper;
import com.mainproject.mainBuddy.service.member.MemberService;

import java.util.HashMap;
import java.util.Map;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@Slf4j
@RequiredArgsConstructor


public class MemberController {

    private final MemberService memberService;

    private final MemberMapper mapper;

    /**
     * 회원 가입
     */
    @ApiOperation(value = "회원 가입", notes = "회원 가입 가능, DB에 회원데이터 암호화되서 저장")
    @PostMapping("/signup") //회원가입
    public ResponseEntity postMember(@Valid @RequestBody MemberRegisterDto memberRegisterDto) {

        Member member = mapper.memberPostDtoToMember(memberRegisterDto);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
            HttpStatus.CREATED);
    }

//    @PatchMapping("/api/users/{userId}") //회원정보 수정
//    public ResponseEntity patchMember(@AuthenticationPrincipal PrincipalDetails principalDetails,
//        @PathVariable("userId") @Positive Long memberId,
//        @Valid @RequestBody MemberPatchDto memberPatchDto) {
//        memberPatchDto.setMemberId(memberId);
//
//        Member response =
//            memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));
//
//        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
//            HttpStatus.OK);
//    }

    /**
     * 마이페이지에서 회원 수정
     */

    @ApiOperation(value = "회원 수정", notes = "마이페이지에서 회원정보 수정 가능케하는 API(본인 회원정보만 수정가능)")
    @PatchMapping("/api/users/{id}")
    public CMRespDto<?> update(@PathVariable Long id,
        @Valid @RequestBody MemberUpdateDto memberUpdateDto, BindingResult bindingResult,
        @AuthenticationPrincipal PrincipalDetails principalDetails) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            //for문을 돌면서 에러 생긴 필드에 관한 메세지를 모음
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            //강제로 Exception이 터지도록하였다. 이렇게 Exception만 터지게되면 ux가 좋지않다.
            //그러므로 Exception만을 따로 처리하는 handler패키지 만듦
            throw new CustomValidationApiException("유효성 검사를 실패하였습니다", errorMap);
        } else if (principalDetails.getMember().getMemberId() == id) {

            Member memberEntity = memberService.MemberUpdate(id, memberUpdateDto.toEntity());
            return new CMRespDto<>("회원 수정이 완료되었습니다.", memberEntity);
        }
        return new CMRespDto<>("회원수정이 불가능 합니다", null);
    }

    /**
     * 회원 조회
     */
    @ApiOperation(value = "회원 단일 조회 ", notes = "개별회원 정보 조회")
    @GetMapping("/api/users/{userId}") //회원 조회
    public ResponseEntity getMember(
        @PathVariable("userId") @Positive long memberId) {
        Member response = memberService.findMember(memberId);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
            HttpStatus.OK);
    }

    /**
     * 회원 탈퇴
     */

    @ApiOperation(value = "회원 탈퇴 ", notes = "삭제 요청한 회원이 DB에 삭제되며 로그인 안됨 ")
    @DeleteMapping("/api/users/{userId}") //회원탈퇴
    public ResponseEntity deleteMember(
        @PathVariable("userId") @Positive long memberId) {
        System.out.println("# delete member");
        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
