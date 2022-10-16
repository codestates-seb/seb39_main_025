package com.mainproject.mainBuddy.service.member;

import com.mainproject.mainBuddy.domain.image.Image;
import com.mainproject.mainBuddy.domain.image.ImageRepository;
import com.mainproject.mainBuddy.domain.member.Member;
import com.mainproject.mainBuddy.domain.member.MemberRepository;
import com.mainproject.mainBuddy.dto.member.MemberProfileDto;
import com.mainproject.mainBuddy.dto.member.MemberProfileDto2;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@RequiredArgsConstructor
@Service
public class MemberGetService {


    private final MemberRepository memberRepository;
    private final ImageRepository imageRepository;
    MemberProfileDto dto = new MemberProfileDto();
    MemberProfileDto2 dto2 = new MemberProfileDto2();

    @Transactional(readOnly = true)
    public MemberProfileDto 회원프로필(Long pageUserId,
                                  Long principalId) {  //userId는 로그인한 아이디가 아닌 페이지아이디디
        Member memberEntity = memberRepository.findById(pageUserId).orElseThrow(() -> {
            return new IllegalArgumentException("해당 아이디를 찾을 수 없습니다.");
        });

        // pageUserId와 principalId를 비교해서 같으면 true 틀리면 false로 한다.

        dto.setMember(memberEntity);
        dto.setPageOwnerState(
                pageUserId == principalId); // 1은 페이지 주인, -1은 주인아님,삼항연산자사용  같으면 1 아니면 -1
        dto.setImageCount(memberEntity.getImages().size());

        return dto;
    }

    @Transactional(readOnly = true) //단일 포스트 겟요청 서비스
    public MemberProfileDto2 회원프로필2(Long postId, Long memberId) {
        Image memberEntity2 = imageRepository.findById(postId).orElseThrow(() -> {
            return new IllegalArgumentException("해당 포스트를 찾을 수 없습니다.");
        });

        dto2.setImage(memberEntity2);

        return dto2;
    }
}
