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


async function getPostById(id)
{
    try 
    {
        const response = await fetch (`http://locahost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    }
    catch
    {
        alert(`Failed to get post:  ${err}`);
        console.log(`Failed to get post, reason: ${err}`);
    }
}

async function createPost(event)
{
    event.preventDefailt();

    try
    {
        const options = 
        { method: 'POST', 
          headers: {"Content-Type" : "application/json"}, 
          body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        };

        const response = await fetch ("http://localhost:3000/posts",options);
        const {id, err} = await response.json();

        if(err)
        {
            throw Error(err)
        }
        else
        {
            window.location.hash = `#posts/${id}`
        }
    }
    catch (err)
    {
        console.log("Failed to create post :" +err);
        alert("Failed to create post:" +err);
    }
}