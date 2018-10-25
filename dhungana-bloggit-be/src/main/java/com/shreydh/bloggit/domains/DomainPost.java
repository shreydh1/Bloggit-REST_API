package com.shreydh.bloggit.domains;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="posts")


public class DomainPost {

    @Id
    @Column(name = "post_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @Column(name = "title")
    private String title;

    @Column(name = "body")
    private String body;

    @Column(name = "author")
    private String author;

    @Column(name = "created_on")
    private LocalDateTime createdOn;
    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDateTime createdOn) {
        this.createdOn = createdOn;
    }

    public LocalDateTime getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
    @Override
    public int hashCode() {
        return Objects.hash(postId, title, body, author, lastUpdated, createdOn);
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DomainPost domainPost = (DomainPost) o;
        return Objects.equals(postId, domainPost.postId) &&
                Objects.equals(title, domainPost.title) &&
                Objects.equals(body, domainPost.body) &&
                Objects.equals(author, domainPost.author) &&
                Objects.equals(lastUpdated, domainPost.lastUpdated) &&
                Objects.equals(createdOn, domainPost.createdOn);
    }
    @Override
    public String toString() {
        return "DomainPost{" +
                "postId=" + postId +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", author='" + author + '\'' +
                ", lastUpdated=" + lastUpdated +
                ", createdOn=" + createdOn +
                '}';
    }

}
