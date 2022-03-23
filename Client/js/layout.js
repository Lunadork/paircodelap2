const fields =
[
    { tag: 'input', attributes: { type: 'text', name: 'title', placeholder: 'Title' }},
    { tag: 'input', attributes: { type: 'text', name: 'author', placeholder: 'Your pseudonym (anon if empty)' }},
    { tag: 'textarea', attributes: { type: 'text', name: 'body', placeholder: 'Post content here'}},
    { tag: 'input', attributes: {type: 'submit', value: 'Submit Post'}}
]



function renderPostForm()
{
    // ADD SOMETHING TO PAGE TO SAY WHAT THIS IS FOR HERE

    const form = document.createElement('form');

    fields.forEach(f => 
        {
        const field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
        form.appendChild(field);
    })

    form.onsubmit = createPost;
    // APPEND TO OUR PAGE HERE
    // SET THE HREF  HERE (IF WE DO THAT)
}


