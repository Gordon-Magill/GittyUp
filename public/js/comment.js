// Create a new comment
const commentSubmit = async (event) => {
  // Prevent premature page reload
  event.preventDefault();
  // console.log("commentSubmit event occured")

  // Get comment information from page elements
  const commentBody = document.querySelector("#comment-body").value.trim();
  const postID = document
    .querySelector("#comment-submit")
    .getAttribute("data-post");
  // console.log(postID)

  // If a comment body was written...
  if (commentBody) {
    // Use API route to create the comment
    const response = await fetch(`/api/comment/create`, {
      method: "POST",
      body: JSON.stringify({ commentBody, postID }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check the response type
    if (response.ok) {
      console.log("Bing Bong");
    } else {
      // Indicate a failure
      alert("Failed to add comment");
    }
  }
};

const commentDelete = async (event) => {
  //todo: all of this lol
};

document
  .querySelector("#comment-submit")
  .addEventListener("click", commentSubmit);
