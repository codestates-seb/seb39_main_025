package com.mainproject.mainBuddy.domain.likes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LikesRepository  extends JpaRepository<Likes, Long> {

    @Modifying
    @Query(value = "INSERT INTO likes(image_Id, member_Id, create_Date) VALUES(:imageId, :principalId, now())", nativeQuery = true)
    int mLikes(@Param(value = "imageId") Long imageId, @Param(value = "principalId") Long principalId);

    @Modifying
    @Query(value = "DELETE FROM likes WHERE imageId = :imageId AND userId = :principalId", nativeQuery = true)
    int mUnLikes(@Param(value = "imageId") Long imageId, @Param(value = "principalId") Long principalId);
}
