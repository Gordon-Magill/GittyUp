// Event handler for logging out
const logout = async () => {
  // Call the API to execute logout
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // Send the logged out user back to the homepage
    document.location.replace("/");
  } else {
    // Indicate the error
    alert(response.statusText);
  }
};

// Add the event handler
document.querySelector("#logout").addEventListener("click", logout);
