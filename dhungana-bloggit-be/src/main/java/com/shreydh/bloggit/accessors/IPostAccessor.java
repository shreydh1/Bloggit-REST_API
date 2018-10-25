package com.shreydh.bloggit.accessors;

import com.shreydh.bloggit.domains.DomainPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface IPostAccessor extends JpaRepository<DomainPost, Long> {

    List<DomainPost> findAllByAuthor(String author);
    List<DomainPost> findAllByCreatedOnBetween(LocalDateTime startDate, LocalDateTime endDate);
}
