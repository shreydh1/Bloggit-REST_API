package com.shreydh.bloggit;

import com.shreydh.bloggit.accessors.IPostAccessor;
import com.shreydh.bloggit.domains.DomainPost;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class Application {

    private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);

    }

    @Bean
    public CommandLineRunner startup(IPostAccessor postAccessor) {
        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {
                DomainPost domainPost = new DomainPost();
                domainPost.setTitle("My new domainPost");
                domainPost.setAuthor("Brian");
                domainPost.setCreatedOn(LocalDateTime.now());
                LOGGER.info("Created a new domainPost: {}", domainPost);
                postAccessor.save(domainPost);
                LOGGER.info("More posts: " + postAccessor.findAll());
                LOGGER.info("Author is Brian: " + postAccessor.findAllByAuthor("Brian"));
                LocalDateTime yesterday = LocalDateTime.now().minusDays(1);
                LocalDateTime tomorrow = LocalDateTime.now().plusDays(1);
                LOGGER.info("Posts between yesterday and tomorrow: " +
                        postAccessor.findAllByCreatedOnBetween(yesterday, tomorrow));
                postAccessor.delete(domainPost);
                LOGGER.info("Less posts: " + postAccessor.findAll());
            }
        };
    }
}