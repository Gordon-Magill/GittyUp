// Create a new comment
const commentSubmit = async (event) => {
  // Prevent premature page reload
    event.preventDefault();
    console.log("commentSubmit event occured")
    
      // Get comment information from page elements
    const commentBody = document.querySelector('#comment-body').value.trim();
    const postID = document.querySelector('#comment-submit').getAttribute('data-post');
    let success_flag = 0;
    // console.log(postID)

    //send comment to backend
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
            success_flag = 1;
        } else {
            alert("Failed to add comment");
        }
    }
    //update submissions.comment_count
    if(success_flag === 1){
        const response = await fetch(`/api/comment/create`,{
        method: "PUT",
        body: JSON.stringify({postID}),
        headers:{
            "Content-Type": "application/json",
        },
    });

        if(response.ok){
            console.log("Submission updated")
            success_flag = 0;
            document.location.replace('')
        } else {
            alert("Failed to add comment");
        }

    }
  };

const commentDelete = async (event) => {

 //todo: eventually
}


document
  .querySelector("#comment-submit")
  .addEventListener("click", commentSubmit);
