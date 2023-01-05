// MILESTONE 1

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null,
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// MILESTONE 2

let itemContents = "";

posts.forEach((elem) => {
    itemContents +=
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${elem.author.image ? profileImageTemplate(elem.author) : profileImageDefaultTemplate(elem.author)}
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${elem.author.name}</div>
                    <div class="post-meta__time">${formatDate(elem.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src=${elem.media} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${elem.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${elem.id}" class="js-likes-counter">${elem.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
})

const itemContainer = document.getElementById('container');
itemContainer.innerHTML = itemContents;

// BONUS 1

function formatDate(dateStr){
    return dateStr.split('-').reverse().join('/');
}

// BONUS 2

// funzione per stampare immagine di profilo

function profileImageTemplate (userData){
    const {name, image} = userData;
    return `<img class="profile-pic" src="${image}" alt="${name}">`;
}

// funzione per iniziali del nome per immagine di profilo

function profileImageDefaultTemplate (userData){
    const {name} = userData;

    // ricaviamo le iniziali del nome e cognome

    const nameParts = name.split(' ');
    
    const letters = [];
    for(let i=0; i < nameParts.length; i++){
        const namePart = nameParts[i];
        const initialLetter = namePart[0]; // oppure namePart.charAt(0);
        letters.push(initialLetter);
    }

    const initials = letters.join('');
    return `
        <div class="profile-pic-default">
            <span>${initials}</span>
        </div>
    `
}

// MILESTONE 3 e BONUS 3

const miPiace = document.getElementsByClassName('js-like-button')
const arrayLike = [];

for(let i=0; i<miPiace.length; i++){
    miPiace[i].addEventListener('click', function(e){
        //funzione per non far tornare su la pagina al click del like
        e.preventDefault();
        // dataset
        const postId = this.dataset.postid;
        const likes = document.getElementById(`like-counter-${postId}`)

        const likesNumber = parseInt(likes.innerText)

        // per mettere e togliere il like

        if(arrayLike.includes(postId)){
            likes.innerText = likesNumber-1;

            const index = arrayLike.indexOf(postId);
            if(index > -1){
                arrayLike.splice(index,1);
            }
            miPiace[i].classList.remove("like-button--liked");
            console.log(arrayLike);
        }else{
            likes.innerText = likesNumber+1;
            arrayLike.push(postId);
            console.log(arrayLike);
            miPiace[i].classList.add("like-button--liked");
        }
        
        // Solo incremento +1 di like

        // likes.innerText = likesNumber+1;
        // console.log(likesNumber);
    })
}

