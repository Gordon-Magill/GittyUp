const commentSubmit = async (event) => {
    event.preventDefault();
    console.log("commentSubmit event occured")
    const commentBody = document.querySelector('#comment-body').value.trim();
    const postID = document.querySelector('#comment-submit').getAttribute('data-post');
    // console.log(postID)

    if(commentBody){
        const response = await fetch(`/api/comment/create`,{
        method: "POST",
        body: JSON.stringify({commentBody, postID}),
        headers:{
            "Content-Type": "application/json",
        },
    });

        if(response.ok){
            console.log("Bing Bong")
        } else {
            alert("Failed to add comment");
        }
    }
}

const commentDelete = async (event) => {
 //todo: all of this lol
}

document
.querySelector('#comment-submit')
.addEventListener('click', commentSubmit);
