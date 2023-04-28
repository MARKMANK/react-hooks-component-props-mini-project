import React from "react";

function Article(props){
    console.log(props)
    
    
    
    const splitPropsArray = props.postDetails.map((entry)=>{
        return(
        <>
        <h3 key={entry.id}>{entry.title}</h3>
        <small>{entry.date}</small>
        <p>{entry.preview}</p>
        </>
    )
    })

    return(
        splitPropsArray
    )
}
export default Article;