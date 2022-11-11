// Upvotes a post
// Requires that the button for updating the post encodes the associated post ID
async function upvote(event) {
    let clickedButton = event.currentTarget
    let associatedPost = clickedButton.getAttribute('data-post-id')

    let upvoteRequest = await fetch(`/api/submissionRoutes/upvote/${associatedPost}`,{
        method: 'PUT'
    })

    if (upvoteRequest.ok) {
        // Disable the button
        clickedButton.disabled=true
    } else {
        alert('Upvote attempt failed:\n', JSON.stringify(upvoteRequest.json()))
    }
}

const upvoteButtons = $('.upvoteButton')
upvoteButtons.on('click', upvote)


// Downvotes a post
// Requires that the button for updating the post encodes the associated post ID
async function downvote(event) {
    let clickedButton = event.currentTarget
    let associatedPost = clickedButton.getAttribute('data-post-id')

    let downvoteRequest = await fetch(`/api/submissionRoutes/downvote/${associatedPost}`,{
        method: 'PUT'
    })

    if (downvoteRequest.ok) {
        // Disable the button
        clickedButton.disabled=true
    } else {
        alert('Downvote attempt failed:\n', JSON.stringify(upvoteRequest.json()))
    }
}

const downButtons = $('.downvoteButton')
downButtons.on('click', down)