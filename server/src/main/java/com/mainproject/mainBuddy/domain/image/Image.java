package com.mainproject.mainBuddy.domain.image;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mainproject.mainBuddy.domain.comment.Comment;
import com.mainproject.mainBuddy.domain.likes.Likes;
import com.mainproject.mainBuddy.domain.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Image {
    //필요한 기능 = 이미지 좋아요, 댓글
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String caption;  //글 올릴떄 올라가는 글

    private String postImageUrl; // 사진을 전송받아서 서버의 특정폴더에 저장할것, DB에 저장된 경로 INSERT,그래서 애는 경로만 갖고있다

    private String username;

    private Long snsId;
    private Long liked;
    @PrePersist
    public void prePersist() {
        this.liked = this.liked == null ? 0 : this.liked;
    }

    @Builder.Default
    @Column
    private LocalDateTime creation_date = LocalDateTime.now();
    @Builder.Default
    @Column
    private LocalDateTime last_edit_date = LocalDateTime.now();

    @JoinColumn(name = "memberId")
    @ManyToOne
    private Member member; // 한명의 유저는 여러 이미지를 업로드할 수 있다.

    @OrderBy("id DESC")
    @JsonIgnoreProperties({"image"})
    @OneToMany(mappedBy = "image", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Comment> comments;

    @JsonIgnoreProperties({"image"})
    @OneToMany(mappedBy = "image")
    private List<Likes> likes;
}
