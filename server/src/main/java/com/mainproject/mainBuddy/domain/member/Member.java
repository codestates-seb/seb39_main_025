package com.mainproject.mainBuddy.domain.member;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.awt.Image;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Member {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long MemberId;

    @Column(nullable = false, length = 10)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false,unique = true)
    private String email;

    private String name;

    private String role;

    private String profileImageUrl;

    private Long snsId;

    @Builder.Default
    @Column
    private LocalDateTime creation_date = LocalDateTime.now();
    @Builder.Default
    @Column
    private LocalDateTime last_edit_date = LocalDateTime.now();

    @JsonIgnoreProperties({"member"})   //json으로 파싱할떄 메세지 컨버터야 user는 하지마 (Image에 있는 user를 무시하고 파싱)
    @OneToMany(mappedBy = "member",fetch = FetchType.LAZY)  //mappedby -> 1)나는 연관관계 주인이 아니다. 그러므로 테이블에 컬럼을 만들 수 없다
    private List<Image> images;    // mappedby -> User를 select할떄 해당 userId로 등록된 이미지들을 다 가져와 라는 뜻
// lazy를 할떄 해당 userID를 SELECT할떄 해당 이미지들을 가져오지마,대신 getImage가 함수가 호출될떄 가져와

// User정보와 더불어 image데이터까지 같이가져오려면 양방향 매핑하면됨

    public List<String> getRoleList() {
        if (this.role.length() > 0) {
            return Arrays.asList(this.role.split(","));
        }
        return new ArrayList<>();
    }
}
