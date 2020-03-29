const comments =[{
    name: 'razvan',
    msg: 'ce faci?',
    id:'ID: '+ Math.floor(Math.random() * 100),
    email: 'Email: razvan@gmail.com',
    image :'avatar.svg',
    button : 'Delete'
}];

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const name = document.querySelector('#nameInput');
const commentList = document.querySelector('#commentList');


btn.addEventListener('click', function() {
    if(input.value){
    comments.push ({
        name: name.value,
        msg: input.value,
        id:'ID: '+ Math.floor(Math.random() * 100),
        email:'Email: alex@gmail.com',
        image: 'avatar.svg',
        button: 'Delete'
    });
      const lastComment = comments.slice(comments.length-1);
      displayComments(lastComment, commentList);
    }else{
        alert('empty message');
    }
})


/*function validateComment(comment) {
    if (comment.name === "" || comment.msg === "") {
        return false;
    }
    return true
}*/

function deleteChildren(element) {

    var child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

displayComments(comments, commentList)



function displayComments(comments, containerNode) {

   
    function addParagraph(msg) {
        const newP = document.createElement("p");
        newP.innerText = msg;
        return newP;
    }

    function addId(id){
        const newP4 = document.createElement("p");
        newP4.innerText = id;
        return newP4;
    }


    function addImage(image) {
        const img = document.createElement("img");
        img.src ="avatar.svg";
        img.innerHTML = image;
        return img;
    }


    function addTitle(title) {
        const h2 = document.createElement("h2");
        h2.innerText = title;
        return h2;
    }
    
    function addEmail(email){
        const newP2 = document.createElement("p");
        newP2.innerText = email;
        return newP2;
    }

    function addDeleteButton(text, commentId){
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = text;
        deleteButton.addEventListener('click', function(){
            console.log(commentId);
            deleteCommentById(commentId);
            deleteChildren(commentList);
            displayComments(comments, commentList)
        })
        return deleteButton;
    }

    

    function createCommentNode(comment) {
        const containerBox = document.createElement('div');

        
        const title = addTitle(comment.name);
        const msg = addParagraph(comment.msg);
        const id = addId(comment.id);
        const email = addEmail(comment.email);
        const image = addImage(comment.image);
        const deleteButton = addDeleteButton(comment.button);
       

        
        containerBox.appendChild(title);
        containerBox.appendChild(id);
        containerBox.appendChild(msg);
        containerBox.appendChild(email);
        containerBox.appendChild(image);
        containerBox.appendChild(deleteButton);
        

        return containerBox;
    }
    
    function deleteCommentById(commentId) {
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === commentId) {
                comments.splice(comments[i].id, 1);
            }
        }

    }    
    // parcurgere commentarii

    for (let idx = 0; idx < comments.length; idx++) {
          const comment = comments[idx];

        //creaza reprezentarea comentariului in DOM
        const commentNode = createCommentNode(comment);

        // punem comentariul in DOM
        containerNode.appendChild(commentNode);
    }
}
