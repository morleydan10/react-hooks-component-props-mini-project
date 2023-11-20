import React from "react";
import Article from "./Article";




function ArticleList (posts) {
    
    const renderPosts = posts.map(post => 
    <Article 
        key={post.title} 
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutes={post.minutes}
    ></Article>);
    
    return <main>{renderPosts}</main>;
}

export default ArticleList;