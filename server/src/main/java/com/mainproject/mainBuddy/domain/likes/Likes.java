package com.mainproject.mainBuddy.domain.likes;

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
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "likes_uk",
                        columnNames = {"imageId", "memberId"}
                )
        }
)
public class Likes {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "imageId")
    @ManyToOne
    private Image image;

    @JoinColumn(name = "memberId")
    @JsonIgnoreProperties({"images"})  // 1-1. 무한 참조 해결
    @ManyToOne
    private Member member;

    private LocalDateTime createDate;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }
}
