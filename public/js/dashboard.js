// Post creation
const newFormHandler = async (event) => {
  event.preventDefault();
  // console.log(
  //   "\n**********\n\n**********\n\n**********\nNew post request activated\n**********\n\n**********\n\n**********\n"
  // );

  // Get post information from page elements
  const name = document.querySelector("#submission-name").value.trim();
  const description = document.querySelector("#submission-desc").value.trim();
  const content = document.querySelector("#submission-content").value.trim();
  const language = document.querySelector("#submission-language").value.trim();

  // If the user filled in all the required fields...
  if (name && content && description && language) {
    // Call the API route to make the post
    const response = await fetch(`/api/submission/create`, {
      method: "POST",
      body: JSON.stringify({ name, content, description, language }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Take action based on the server response
    if (response.ok) {
      // Reload the page to show the new post
      document.location.replace("/dashboard");
    } else {
      // Indicate the error
      alert("Failed to create submission");
    }
  }
};

// Delete post functionality
const delButtonHandler = async (event) => {
  // Check to see if the button actually has post information associated with it
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    // Call the API route to delete the offending post
    const response = await fetch(`/api/submission/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Reload the page to update the posts
      document.location.replace("/dashboard");
    } else {
      // Indicate the error
      alert("Failed to delete submission");
    }
  }
};

// Adding event handlers
$("#form-submit").on("click", newFormHandler);

$(".submission-list").on("click", delButtonHandler);
