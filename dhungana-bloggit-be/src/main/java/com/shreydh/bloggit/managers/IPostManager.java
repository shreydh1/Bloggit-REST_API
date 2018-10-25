package com.shreydh.bloggit.managers;

import com.shreydh.bloggit.views.ViewPost;

import java.util.List;

public interface IPostManager {

    List<ViewPost> getAllPosts();

    ViewPost getPostById(Long postId);

    List<ViewPost> getPostsByDate(Long startDate, Long endDate);

    ViewPost createPost(ViewPost viewPost);

    ViewPost updatePost(Long postId, ViewPost viewPost);

    ViewPost deletePost(Long postId);


}
