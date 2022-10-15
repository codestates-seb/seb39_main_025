package com.mainproject.mainBuddy.domain.comment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mainproject.mainBuddy.domain.image.Image;
import com.mainproject.mainBuddy.domain.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Comment {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    // 댓글인데 댓글이 안들어오면 안되니 nullable false로
    @Column(length = 100,nullable = false)
    private String content;
    // 누가썼는지 알아야됨, 하나의 댓글은 한명이 쓴다, 한명의 유저는 댓글을 여러개 쓸 수 있다
    // 내가 뭔가 하나를 선택했을떄 딸려오는것들이 하나면 기본전략 eager.

    @JsonIgnoreProperties({"images"})
    @JoinColumn(name = "memberId")
    @ManyToOne(fetch = FetchType.EAGER)
    private Member member;

    // 어떤 게시물에 글이 들어가는지도 알아야함
    @JoinColumn(name = "imageId")
    @ManyToOne(fetch = FetchType.EAGER)
    private Image image;

    private LocalDateTime createDate;


    @PrePersist
    public void createDate(){
        this.createDate = LocalDateTime.now();
    }
}
