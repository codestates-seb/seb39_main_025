package com.main.web.controller.member;

import com.main.domain.member.Member;
import com.main.dto.auth.MemberRegisterDto;
import com.main.mapper.MemberMapper;
import com.main.service.member.MemberService;
import javax.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@Validated
@Slf4j

public class MemberController {

    private final MemberService memberService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper,
        BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberRegisterDto memberRegisterDto) {
        memberRegisterDto.setPassword(
            bCryptPasswordEncoder.encode(memberRegisterDto.getPassword()));
        memberRegisterDto.setRole("ROLE_USER");
        Member member = mapper.memberPostDtoToMember(memberRegisterDto);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
            HttpStatus.CREATED);
    }
}