const formDiv = document.getElementById("formDiv");
const postDiv = document.getElementById("postDiv");

window.addEventListener('load',renderPostForm);


const fields =
[
    { tag: 'input', attributes: { type: 'text', name: 'title', placeholder: 'Title' }},
    { tag: 'input', attributes: { type: 'text', name: 'author', placeholder: 'Your pseudonym (anon if empty)' }},
    { tag: 'textarea', attributes: { type: 'text', name: 'body', placeholder: 'Post content here'}},
    { tag: 'input', attributes: { id: "postButton", type: 'submit', value: 'Submit Post'}}
]



async function renderPostForm()
{
    postDiv.innerHTML = "";

    const formHeader = document.createElement("h1");
    formHeader.textContent = "Your post 2";
    formDiv.appendChild(formHeader);

    const form = document.createElement('form');
        fields.forEach(f => 
            {
                const field = document.createElement(f.tag);
                Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
                form.appendChild(field);
            })

            
    
    formDiv.appendChild(form);

    form.onsubmit = createPost;

    // SET THE HREF  HERE (IF WE DO THAT)
}

async function renderPost(id)
{

    postDiv.innerHTML = "";
    formDiv.innerHTML = "";
    
    console.log("layout post id:" +id)

    
    let data = await getPostById(id);

    let titleh1 = document.createElement("h1");
    let authorp = document.createElement("p");
    let bodyp = document.createElement("p");

    titleh1.textContent = data.title;
    authorp.textContent = data.author;
    bodyp.textContent = data.body;


    let returnButton = document.createElement("button");
    returnButton.textContent = "Back";
    returnButton.addEventListener('click',renderPostForm)

    postDiv.appendChild(titleh1);
    postDiv.appendChild(authorp);
    postDiv.appendChild(bodyp);
    postDiv.appendChild(returnButton);

}




