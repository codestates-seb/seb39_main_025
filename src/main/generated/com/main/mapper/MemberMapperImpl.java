package com.main.mapper;

import com.main.domain.member.Member;
import com.main.dto.auth.MemberRegisterDto;
import com.main.dto.auth.MemberResponseDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-19T15:10:34+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberRegisterDto memberRegisterDto) {
        if ( memberRegisterDto == null ) {
            return null;
        }

        Member member = new Member();

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberRegisterDto memberRegisterDto) {
        if ( memberRegisterDto == null ) {
            return null;
        }

        Member member = new Member();

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

        return memberResponseDto;
    }
}
