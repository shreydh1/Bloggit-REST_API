package com.shreydh.bloggit.converters.impl;

import com.shreydh.bloggit.converters.IPostConverter;
import com.shreydh.bloggit.converters.ILocalDateTimeConverter;
import com.shreydh.bloggit.domains.DomainPost;
import com.shreydh.bloggit.engines.IPostEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PostConverter implements IPostConverter{

    @Autowired
    private ILocalDateTimeConverter localDateTimeConverter;
    @Autowired
    private IPostEngine postEngine;

    @Override
    public DomainPost viewToDomain(com.shreydh.bloggit.views.ViewPost viewPost) {
        DomainPost domainPost = new DomainPost();
        domainPost.setPostId(viewPost.getPostId());
        domainPost.setTitle(viewPost.getTitle());
        domainPost.setBody(viewPost.getBody());
        domainPost.setAuthor(viewPost.getAuthor());

        LocalDateTime now = LocalDateTime.now();
        domainPost.setLastUpdated(now);

        if (viewPost.getPostId() == null) {
            domainPost.setCreatedOn(now);
        } else {
            domainPost.setCreatedOn(localDateTimeConverter
                    .convertLongToLocalDateTime(viewPost.getCreatedOn()));
        }

        return domainPost;

    }

    @Override
    public com.shreydh.bloggit.views.ViewPost domainToView(DomainPost domainPost) {
        com.shreydh.bloggit.views.ViewPost viewPost = new com.shreydh.bloggit.views.ViewPost();
        viewPost.setPostId(domainPost.getPostId());
        viewPost.setTitle(domainPost.getTitle());
        viewPost.setBody(domainPost.getBody());
        viewPost.setAuthor(domainPost.getAuthor());

        viewPost.setLastUpdated(localDateTimeConverter
                .convertLocalDateTimeToLong(domainPost.getLastUpdated()));
        viewPost.setCreatedOn(localDateTimeConverter
                .convertLocalDateTimeToLong(domainPost.getCreatedOn()));
        viewPost.setSummary(postEngine.getSummaryText(domainPost.getBody()));
        return viewPost;
    }
}
