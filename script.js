// h2 color lightblue

const classNames = document.getElementsByClassName('heading');
for (names of classNames) {
    names.style.color = 'lightblue';
}

const cardNames = document.getElementsByClassName('backside');
for (cards of cardNames) {
    cards.style.backgroundColor = 'tomato';
    cards.style.color = 'white';
}

const buttonNames = document.getElementsByClassName('show-btn');
for (button of buttonNames) {
    button.addEventListener('click', function () {
        const colnames = document.getElementsByClassName('remove');
        for (namecol of colnames) {
            namecol.remove();
        }
    })
}

const cardside = document.getElementsByClassName('card');
for (nameCard of cardside) {
    nameCard.style.borderRadius = '30px';
}

document.getElementById('email-btn').addEventListener('click', function() {
    // document.getElementById('para').style.display = "none";
})

document.getElementById('email-input').addEventListener('focus', function(){
    document.getElementById('email-input').style.borderColor = 'red';
})
document.getElementById('email-input').addEventListener('blur', function(){
    document.getElementById('email-input').style.borderColor = 'white';
})

document.getElementById('email-input').addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('email-btn');
    if(event.target.value == "email"){
        deleteBtn.removeAttribute('disabled');
    }else{
        deleteBtn.setAttribute('disabled', true);
    }
})

document.getElementById('email-input').addEventListener('change', function(){
    const confirmDelete = document.getElementById('email-btn');
    console.log(confirmDelete.value);
})

const card = document.getElementById('subscribe');

card.addEventListener('dblclick', function (e) {
//   card.classList.toggle('large');
    card.style.backgroundColor = "red";
});

// const cardName = document.getElementsByClassName('backside');
// console.log(cardName);
// document.getElementById('card-two').style.backgroundColor = 'tomato';
// document.getElementById('card-two').style.color = 'white';
// document.getElementById('card-two').style.borderRadius = '30px';
// document.getElementById('card-three').style.backgroundColor = 'tomato';
// document.getElementById('card-three').style.color = 'white';
// document.getElementById('card-three').style.borderRadius = '30px';
// document.getElementById('card-four').style.backgroundColor = 'tomato';
// document.getElementById('card-four').style.color = 'white';
// document.getElementById('card-four').style.borderRadius = '30px';
// document.getElementById('card-5').style.borderRadius = '30px';
// document.getElementById('card-6').style.borderRadius = "30px";
// document.getElementById('card-one').style.borderRadius = "30px";

// banner button

// document.getElementById('show-btn').addEventListener('click',function(){
//     document.getElementById('empty').innerText = "made me";
// })

