function updatePostCount(postID, incValue) {
  let posts = [];
  const counterArr = document.querySelectorAll(".pointCounter");
  counterArr.forEach((obj) => {
    posts.push(obj.getAttribute("data-post-id"));
  });

  const isMatch = (id) => id === postID;

  const singleCounter = counterArr[posts.findIndex(isMatch)];
  console.log(singleCounter);
  singleCounter.innerHTML = parseInt(singleCounter.innerHTML) + incValue;
}

// Upvotes a post
// Requires that the button for updating the post encodes the associated post ID
async function upvote(event) {
  // console.log('Upvote event called')

  // Get the button that was clicked
  let clickedButton = event.currentTarget;
  // Get the post information that corresponds to the button
  let associatedPost = clickedButton.getAttribute("data-post-id");

  let upvoteRequest = await fetch(`/api/submission/upvote/${associatedPost}`, {
    method: "PUT",
  });

  if (upvoteRequest.ok) {
    // Disable the button
    clickedButton.disabled = true;
    updatePostCount(associatedPost, 1);
  } else {
    alert("Upvote attempt failed:\n", JSON.stringify(upvoteRequest.json()));
  }
}

const upvoteButtons = $(".upvoteButton");
upvoteButtons.on("click", upvote);

// Downvotes a post
// Requires that the button for updating the post encodes the associated post ID
async function downvote(event) {
  let clickedButton = event.currentTarget;
  let associatedPost = clickedButton.getAttribute("data-post-id");

  let downvoteRequest = await fetch(
    `/api/submission/downvote/${associatedPost}`,
    {
      method: "PUT",
    }
  );

  if (downvoteRequest.ok) {
    // Disable the button
    clickedButton.disabled = true;
    clickedButton.setAttribute("src", "/assets/D-DownVote.svg");
    updatePostCount(associatedPost, -1);
  } else {
    alert("Downvote attempt failed:\n", JSON.stringify(upvoteRequest.json()));
  }
}

const downButtons = $(".downvoteButton");
downButtons.on("click", downvote);
