package com.mainproject.mainBuddy.service.member;

import com.mainproject.mainBuddy.domain.member.Member;
import com.mainproject.mainBuddy.domain.member.MemberRepository;
import com.mainproject.mainBuddy.exception.BusinessLogicException;
import com.mainproject.mainBuddy.exception.CustomValidationApiException;
import com.mainproject.mainBuddy.exception.ExceptionCode;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //verifyExistsEmail 체크후 이메일 존재여부 확인후 멤버레포지토리에 저장
    @Transactional
    public Member createMember(Member member) {

        verifyExistsEmail(member.getEmail());
        verifyExistsUsername(member.getUsername());
        member.setPassword(bCryptPasswordEncoder.encode(member.getPassword()));
        member.setRole("ROLE_USER");

        return memberRepository.save(member);
    }

    public Member findMember(long memberId) {
        return checkFindMember(memberId);
    }

    //회원정보 수정
    @Transactional
    public Member MemberUpdate(Long id,Member member){
        //1.영속화
        //.get(); 을 붙인이유: findById에서 유저번호를 찾을건데 만약에 없으면 null이 리턴되는데 Optional에 속해있다.
        // Optional은 2가지를 할 수 있는데 첫번쨰는 .get();, .Orlelsethrow()
        Member memberEntity = memberRepository.findById(id).orElseThrow(()->{ return new CustomValidationApiException("찾을 수 없는 회원입니다.");
        }); // 유저 테이블에서 등록된 번호로 그 회원이 있는지 없는지 찾는다.
        memberEntity.setUsername(member.getUsername());

        String rawPassword = member.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);

        memberEntity.setPassword(encPassword);


        // 2. 영속화된 것들을 더티체킹

        return memberEntity;  //더티체킹이 일어나 업데이트됨.
    }

    //멤버 레포지토리에서 이메일이 빈값이 아닐시 예외처리(MEMBER_EXISTS)
    private void verifyExistsEmail(String email) {
        Member member = memberRepository.findByEmail(email);

        if (member != null) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }
    //사용중인 닉네임으로 회원가입 불가능
    private void verifyExistsUsername(String username) {
        Optional<Member> member = Optional.ofNullable(memberRepository.findByUsername(username));

        if (member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.USERNAME_EXISTS);
        }
    }

    @Transactional(readOnly = true)
    public Member checkFindMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    @Transactional

    public void deleteMember(Long memberId) {
        memberRepository.deleteById(memberId);

    }
}
