package com.shreydh.bloggit.converters;
import com.shreydh.bloggit.domains.DomainPost;

public interface IPostConverter {
    DomainPost viewToDomain(com.shreydh.bloggit.views.ViewPost viewPost);

    com.shreydh.bloggit.views.ViewPost domainToView(DomainPost domainPost);


}
