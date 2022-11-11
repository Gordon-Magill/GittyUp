const commentSubmit = async (event) => {
    event.preventDefault();
    console.log("commentSubmit event occured")
    const commentBody = document.querySelector('#comment-body').value.trim();

    if(commentBody){
        const response = await fetch(`/api/comment/create`,{
        method: "POST",
        body: JSON.stringify({commentBody}),
        headers:{
            "Content-Type": "application/json",
        },
    });

        if(response.ok){
            // add comment to list
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
