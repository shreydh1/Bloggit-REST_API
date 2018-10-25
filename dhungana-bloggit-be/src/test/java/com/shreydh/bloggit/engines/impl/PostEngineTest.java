package com.shreydh.bloggit.engines.impl;

import com.shreydh.bloggit.engines.IPostEngine;
import com.shreydh.bloggit.views.ViewPost;
import org.junit.Before;
import org.junit.Test;


import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;


public class PostEngineTest {

    IPostEngine postEngine = new PostEngine();

    private ViewPost defaultPost;

    @Before
    public void setUp() throws Exception {
        defaultPost = new ViewPost();
        defaultPost.setPostId(1L);
        defaultPost.setTitle("A sample post");
        defaultPost.setBody("This is a sample post.");
        defaultPost.setSummary("This is a default post.");
        defaultPost.setAuthor("Brian J. Walters");
        defaultPost.setCreatedOn(1497812309081L);
        defaultPost.setLastUpdated(1497812309081L);
    }

    @Test
    public void getSummaryText() {
        String result = postEngine.getSummaryText(defaultPost.getBody());
        assertThat(result.length(), is(defaultPost.getBody().length()));
    }

    @Test
    public void getSummaryText_NullText() {
        String result = postEngine.getSummaryText(null);
        assertThat(result, is(nullValue()));
    }

    @Test
    public void testGetSummaryText_Truncating() {
        String text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum "
                + "gravida aliquam tellus sed eleifend. Donec fermentum ligula dapibus "
                + "felis interdum molestie. Nam tempor ex odio, a dignissim nunc ornare "
                + "sit amet. Vestibulum scelerisque, ligula ac blandit maximus, velit dui "
                + "lobortis tellus posuere.";

        String result = postEngine.getSummaryText(text);
        assertThat(result.length(), is(256));
    }
}

