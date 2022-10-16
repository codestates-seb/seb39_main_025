package com.mainproject.mainBuddy.domain.member;

import com.mainproject.mainBuddy.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    public Member findByEmail(String email);
    public Member findByUsername(String username);
}