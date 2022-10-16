package com.mainproject.mainBuddy.service.image;

import com.mainproject.mainBuddy.domain.likes.Likes;
import com.mainproject.mainBuddy.domain.likes.LikesRepository;
import javax.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LikesService {

    private final LikesRepository likesRepository;

    @Transactional
    public void likes(Long imageId, Long principalId) {
        likesRepository.mLikes(imageId, principalId);
    }

    @Transactional
    public void unLikes(Long imageId, Long principalId) {
        likesRepository.mUnLikes(imageId, principalId);
    }

    public Page<Likes> findLikes(@Positive int imageId, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("id").descending());
        return likesRepository.findAll(pageRequest);
    }
}
