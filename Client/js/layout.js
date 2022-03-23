//Get the divs we're going to be renderring elements to
const formDiv = document.getElementById("formDiv");
const postDiv = document.getElementById("postDiv");

//On load, render the post form
window.addEventListener('load',renderPostForm);
//If the hash changes, call update content
window.addEventListener('hashchange', updateContent);

//Fields variable storing array of tags and attributes we're going ot use to create the form
const fields =
[
    { tag: 'input', attributes: { class:"col-12", id:"titleInput", type: 'text', name: 'title', placeholder: 'Title' }},
    { tag: 'input', attributes: { class:"col-12", id:"authorInput", type: 'text', name: 'author', placeholder: 'Your pseudonym (anon if empty)' }},
    { tag: 'textarea', attributes: { class:"col-12", id:"contentInput", type: 'text', name: 'body', placeholder: 'Post content here'}},
    { tag: 'input', attributes: { class:"col-12", id: "postButton", type: 'submit', value: 'Publish'}}
]


//Renders the post form on the screen after clearning the post Div of any content (if any)
async function renderPostForm()
{
    postDiv.innerHTML = "";
    formDiv.innerHTML = "";

    //Basic header at the top of the page.  Creates, adds.
    const formHeader = document.createElement("h1");
    formHeader.textContent = "Your post";
    formDiv.appendChild(formHeader);

    // creates the form element and loops through fields array, creating elements based on tag and adding their attributes as per their entries
    const form = document.createElement('form');
        fields.forEach(f => 
            {
                const field = document.createElement(f.tag);
                Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
                form.appendChild(field);
            })

            
    //Add our form to the formDiv
    formDiv.appendChild(form);

    //Set the onsubmit attribute to the form to call create post
    form.onsubmit = createPost;

}

//Takes an id, renders the post with that id on the screen.
async function renderPost(id)
{
    //clear whatever is on the screen
    postDiv.innerHTML = "";
    formDiv.innerHTML = "";

    //initialise this up here for scoping reasons.
    let data = "";

    // If the id isn't a number, redirect to front page.
    if(isNaN(id))
    {
        alert("Hash code is not a number - redirecting to front page");
        window.location.hash = "";
    }
    else
    {
        //Get the data we're going to display
        try
        {
            data = await getPostById(id);
            console.log("data is: " +data)
        }
        catch (err)
        {
            alert("Couldn't find post by that ID, redirecting to front page");
            window.location.hash = "";
        }

        //Create elements to store the data
        let titleh1 = document.createElement("h1");
        let authorp = document.createElement("p");
        let bodyp = document.createElement("p");

        //Set their text content to the data values
        titleh1.textContent = data.title;
        authorp.textContent = data.author;
        bodyp.textContent = data.body;

        //Create a return button to go back to post creation form.
        let returnButton = document.createElement("button");
        returnButton.textContent = "Back";
        returnButton.addEventListener('click',renderPostForm)

        //add them all to the postDiv
        postDiv.appendChild(titleh1);
        postDiv.appendChild(authorp);
        postDiv.appendChild(bodyp);
        postDiv.appendChild(returnButton);
    }

}


//Updates content based on what the hash has been changed to.
function updateContent()
{
    let hash = window.location.hash.substring(1);

    //If hash empty, render post form
    if (!hash)
    {
        renderPostForm();
    }
    //if hash has something in it... render the post associated with that hash
    else
    {
        renderPost(hash);
    }

    
}




