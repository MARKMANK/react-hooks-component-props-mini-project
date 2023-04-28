import React from "react";
import Article from "./Article";

function ArticleList({posts}){

    return(
        <main>
            <Article postDetails={posts}/>
        </main>
    )
}

export default ArticleList;