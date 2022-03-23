const formDiv = document.getElementById("formDiv");

window.addEventListener('load',renderPostForm)


const fields =
[
    { tag: 'input', attributes: { type: 'text', name: 'title', placeholder: 'Title' }},
    { tag: 'input', attributes: { type: 'text', name: 'author', placeholder: 'Your pseudonym (anon if empty)' }},
    { tag: 'textarea', attributes: { type: 'text', name: 'body', placeholder: 'Post content here'}},
    { tag: 'input', attributes: { id: "postButton", type: 'button', value: 'Submit Post'}}
]



async function renderPostForm()
{
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

    let inputButton = document.getElementById("postButton");
    inputButton.addEventListener('click',createPost);
    // SET THE HREF  HERE (IF WE DO THAT)
}




