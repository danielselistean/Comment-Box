const comments =[{
    name: 'razvan',
    msg: 'ce faci?'
},
{
    name: 'razvan',
    msg: 'ce faci2?'
},
{
    name: 'razvan',
    msg: 'ce faci3?'
}
]


const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const commentList = document.querySelector('#commentList');
btn.addEventListener('click', function() {
    comments.push({
        name: 'Alex',
        msg: input.value
    });

   displayComments(comments, commentList)
})


displayComments(comments, commentList)



function displayComments(comments, containerNode) {
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    function addTitle(title) {
        const h1 = document.createElement("h1");
        h1.innerText = title;
        return h1;
    }



    function createCommentNode(comment) {
        const containerBox = document.createElement('div');

        const title = addTitle(comment.name);
        const p = addParagraph(comment.msg);
        containerBox.appendChild(title);
        containerBox.appendChild(p);

        return containerBox;
    }



    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
        const commentNode = createCommentNode(comment);
        containerNode.appendChild(commentNode);
    }
}