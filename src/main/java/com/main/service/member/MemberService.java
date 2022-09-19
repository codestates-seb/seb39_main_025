package com.main.service.member;

import com.main.domain.member.Member;
import com.main.exception.BusinessLogicException;
import com.main.exception.ExceptionCode;
import com.main.domain.member.MemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;

    public Member createMember(Member member) {

        verifyExistsEmail(member.getEmail());
        return memberRepository.save(member);
    }

    public Member findMember(long id) {
        return checkFindMember(id);
    }

    public Member updateMember(Member member) {

        Member updatedMember = member;
        return updatedMember;
    }

    private void verifyExistsEmail(String email) {
        Member member = memberRepository.findByEmail(email);

        if (member != null) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member checkFindMember(long id) {
        Optional<Member> optionalMember = memberRepository.findById(id);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }


    public void deleteMember(long id) {

        String logResult = null;
        System.out.println(logResult.toUpperCase());
    }
}
