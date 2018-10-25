package com.shreydh.bloggit.controllers;

import com.shreydh.bloggit.views.ViewPost;
import com.shreydh.bloggit.managers.IPostManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    @Autowired
    private IPostManager postManager;

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<List<ViewPost>> getAllPosts(){
        return new ResponseEntity<>(postManager.getAllPosts(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{postId}", method = RequestMethod.GET)
    ViewPost getPost(@PathVariable Long postId){
        return postManager.getPostById(postId);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    List<ViewPost> getPostsByDate(
            @RequestParam("startDate") Long startDate,
            @RequestParam("endDate") Long endDate) {
        return postManager.getPostsByDate(startDate, endDate);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    ViewPost createPost(@RequestBody ViewPost viewPost) {
        return postManager.createPost(viewPost);
    }

    @RequestMapping(value = "/{postId}", method = RequestMethod.PUT)
    ViewPost updatePost(@PathVariable Long postId, @RequestBody ViewPost viewPost) {
        return postManager.updatePost(postId, viewPost);
    }

    @RequestMapping(value = "/{postId}", method = RequestMethod.DELETE)
    ViewPost deletePost(@PathVariable Long postId) {
        return postManager.deletePost(postId);
    }


}

