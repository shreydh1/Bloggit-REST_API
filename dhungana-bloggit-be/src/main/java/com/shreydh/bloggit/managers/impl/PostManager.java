package com.shreydh.bloggit.managers.impl;

import com.shreydh.bloggit.accessors.IPostAccessor;
import com.shreydh.bloggit.converters.ILocalDateTimeConverter;
import com.shreydh.bloggit.views.ViewPost;
import com.shreydh.bloggit.domains.DomainPost;
import com.shreydh.bloggit.managers.IPostManager;
import com.shreydh.bloggit.converters.IPostConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;
import java.security.InvalidParameterException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class PostManager implements IPostManager {

    @Autowired
    private IPostAccessor postAccessor;

    @Autowired
    private ILocalDateTimeConverter localDateTimeConverter;

    @Autowired
    private IPostConverter postConverter;

    @Override
    public List<ViewPost> getAllPosts() {
        return postAccessor.findAll().stream()
                .map(postConverter::domainToView)
                .collect(Collectors.toList());
    }

    @Override
    public ViewPost getPostById(Long postId) {
        DomainPost domainPost = postAccessor.findOne(postId);
        if (domainPost == null) {
            throw new EntityNotFoundException("Unable to retrieve post: "+postId.toString());
        }
        return postConverter.domainToView(domainPost);
    }

    @Override
    public ViewPost createPost(ViewPost viewPost) {
        return postConverter.domainToView(postAccessor.save(postConverter.viewToDomain(viewPost)));
    }

    @Override
    public ViewPost updatePost(Long postId, ViewPost post) {
        DomainPost currentPost = postAccessor.findOne(postId);
        if (currentPost == null) {
            throw new EntityNotFoundException("Unable to retrieve post: " + postId.toString());
        } else if (!post.getPostId().equals(postId)) {
            throw new InvalidParameterException("Provided post id: " + postId + " does not match provided post: " + post);
        }
        return  postConverter.domainToView(
                postAccessor.save(
                        postConverter.viewToDomain(post)));
    }

    @Override
    public ViewPost deletePost(Long postId) {
        DomainPost post = postAccessor.findOne(postId);
        if (post == null) {
            throw new EntityNotFoundException("Unable to retrieve post: " + postId.toString());
        }
        postAccessor.delete(postId);
        return postConverter.domainToView(post);
    }

    @Override
    public List<ViewPost> getPostsByDate(Long startDate, Long endDate){
        LocalDateTime ldtStartDate = localDateTimeConverter.convertLongToLocalDateTime(startDate);
        LocalDateTime ldtEndDate = localDateTimeConverter.convertLongToLocalDateTime(endDate);
        return postAccessor.findAllByCreatedOnBetween(ldtStartDate, ldtEndDate).stream()
                .map(postConverter::domainToView)
                .collect(Collectors.toList());
    }
}