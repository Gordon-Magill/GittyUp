// Helper function to update the numerical point counter
function updatePostCount(postID, incValue) {
  // Roundabout way of finding the post counter associated with the upvoted button
  let posts = [];
  // Find all point counters
  const counterArr = document.querySelectorAll(".pointCounter");
  // Extract the post ID's from each counter
  counterArr.forEach((obj) => {
    posts.push(obj.getAttribute("data-post-id"));
  });
  // Helper function to indicate a post match
  const isMatch = (id) => id === postID;

  // Actually identifying the proper counter that matches the post ID
  const singleCounter = counterArr[posts.findIndex(isMatch)];
  // console.log(singleCounter);
  // Update the counter
  singleCounter.innerHTML = parseInt(singleCounter.innerHTML) + incValue;
}

// Upvotes a post
// Requires that the button for updating the post encodes the associated post ID
async function upvote(event) {

  // Get the button that was clicked
  let clickedButton = event.currentTarget;

  // Get the post information that corresponds to the button
  let associatedPost = clickedButton.getAttribute("data-post-id");

  // Call the API route
  let upvoteRequest = await fetch(`/api/submission/upvote/${associatedPost}`, {
    method: "PUT",
  });

  if (upvoteRequest.ok) {
    // Disable the button
    clickedButton.disabled = true;
    // Update the point counter
    updatePostCount(associatedPost, 1);
  } else {
    // Indicate the error
    alert("Upvote attempt failed:\n", JSON.stringify(upvoteRequest.json()));
  }
}

// Add event handlers
const upvoteButtons = $(".upvoteButton");
upvoteButtons.on("click", upvote);

// Downvotes a post
// Requires that the button for updating the post encodes the associated post ID
async function downvote(event) {
  // Get the clicked button and its post
  let clickedButton = event.currentTarget;
  let associatedPost = clickedButton.getAttribute("data-post-id");

  // Call the API route to update the point count
  let downvoteRequest = await fetch(
    `/api/submission/downvote/${associatedPost}`,
    {
      method: "PUT",
    }
  );

  if (downvoteRequest.ok) {
    // Disable the button
    clickedButton.disabled = true;
    // Update the point counter
    updatePostCount(associatedPost, -1);
  } else {
    // Indicate the error
    alert("Downvote attempt failed:\n", JSON.stringify(upvoteRequest.json()));
  }
}

// Add event hanlder
const downButtons = $(".downvoteButton");
downButtons.on("click", downvote);
