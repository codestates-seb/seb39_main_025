package com.mainproject.mainBuddy.mapper;

import com.mainproject.mainBuddy.domain.member.Member;
import com.mainproject.mainBuddy.dto.auth.MemberRegisterDto;
import com.mainproject.mainBuddy.dto.auth.MemberResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {

    Member memberPostDtoToMember(MemberRegisterDto memberRegisterDto);

    MemberResponseDto memberToMemberResponseDto(Member member);
}