package com.mainproject.mainBuddy.service.commit;

import com.mainproject.mainBuddy.domain.comment.Comment;
import com.mainproject.mainBuddy.domain.comment.CommentRepository;
import com.mainproject.mainBuddy.domain.image.Image;
import com.mainproject.mainBuddy.domain.member.Member;
import com.mainproject.mainBuddy.domain.member.MemberRepository;
import com.mainproject.mainBuddy.exception.CustomValidationApiException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@RequiredArgsConstructor
@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;


    /**
     * 댓글 생성
     */


    @Transactional
    public Comment 댓글쓰기(String content, Long imageId, Long memberId) {

        // 객체를 만들떄 id값만 담아서 insert 함
        Image image = new Image();
        image.setId(imageId);

        Member memberEntity = memberRepository.findById(memberId).orElseThrow(() -> {
            throw new IllegalStateException("유저 아이디를 찾을 수 없습니다.");
        });

        Comment comment = new Comment();
        comment.setContent(content);
        comment.setImage(image);
        comment.setMember(memberEntity);

        return commentRepository.save(comment);
    }


    /**
     * 댓글 삭제
     */


    @Transactional
    public void 댓글삭제(Long id) {
        try {
            commentRepository.deleteById(id);
        } catch (Exception e) {
            throw new CustomValidationApiException(e.getMessage());
        }
    }

    public Page<Comment> findComments(long postId, int page, int size) {
        return commentRepository.findByImageId(postId,
                PageRequest.of(page, size, Sort.by("id").descending()));
    }

}
