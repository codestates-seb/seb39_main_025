package com.mainproject.mainBuddy.domain.comment;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment,Long> {
    public Page<Comment> findByImageId(long imageId, Pageable pageable);
}
