// Get all posts and return them as data variable
async function getAllPosts()
{
    try
    {
        const response = await fetch (`http://locahost:3000/posts`);
        let data = await response.json();
        return data;
    }
    catch (err)
    {
        alert(`Failed to get posts for reason:  ${err}`);
        console.log(`failed to get posts, reason: ${err}`);
    }
}

//get a single post and return it as data variable 
async function getPostById(id)
{
    try 
    {
        const response = await fetch (`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    }
    catch
    {
        alert(`Failed to get post:  ${err}`);
        console.log(`Failed to get post, reason: ${err}`);
    }
}

// Create a new post
async function createPost(e)
{
    e.preventDefault();

    //Get the text input - not for saving, just for checking input lengths
    let titleInput = document.getElementById("titleInput").value;
    let authorInput = document.getElementById("authorInput").value;
    let contentInput = document.getElementById("contentInput").value;

    //If the user forgot something important or went over character limits... throw an error.
    if (titleInput === "" || contentInput === "" )
    {
        alert("Did you forget to add a title or content?");
    }
    else if (titleInput.length > 199)
    {
        alert(`Title length too long!  200 characters or fewer.  Title length was ${titleInput.length}`);
    }
    else if (contentInput.length > 499 )
    {
        alert(`Content length too long! 500 characters or fewer.  Content length was ${contentInput.length}`);
    }
    else if (authorInput.length > 99)
    {
        alert(`Author name too long! 100 characters or fewer.  Author length was ${authorInput.length}`);
    }
    //Else we all good, do the posting!
    else
    {
        try
        {
            const options = 
            { 
            method: 'POST', 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
            };

            const response = await fetch ("http://localhost:3000/posts",options);
            const data = await response.json();

            if(data.err)
            {
                throw Error(data.err)
            }
            else
            {
                //All successful, redirect us to the post hash.
                window.location.hash = `#${data.id}`;
            }
        }
        catch (err)
        {
            console.log("Failed to create post :" +err);
            alert("Failed to create post:" +err);
        }
    }
}