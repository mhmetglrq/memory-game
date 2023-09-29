document.addEventListener('DOMContentLoaded', () => {

const cardArray=[
    {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
      {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
          {
        name:'Fries',    
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',    
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',    
        img:'images/hotdog.png'
    },
    {
        name:'pizza',    
        img:'images/pizza.png'
    },
    {
        name:'icecream',    
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',    
        img:'images/milkshake.png'
    },
]

cardArray.sort(()=>0.5-Math.random());

const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#score')
const scoreButton=document.querySelector('#scoreButton')
let cardChosen=[]
let cardChosenIds=[]
let cardsWon=[]

function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        const card= document.createElement('img',)
        card.className="rounded float-start col-1 m-1 p-1 "
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',index)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

function checkForMatch() {
    const cards=document.querySelectorAll('img')
    const optionOneId=cardChosenIds[0]
    const optionTwoId=cardChosenIds[1]
    if (optionOneId==optionTwoId) {
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('You have clicked the same image!')
    }
    else if (cardChosen[0]===cardChosen[1]){
    alert('You found a match');
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cards[optionOneId].removeEventListener('click',flipCard)
    cards[optionTwoId].removeEventListener('click',flipCard)
    cardsWon.push(cardChosen)
    scoreButton.className="btn btn-success"
    }
    else{
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    
    }
    cardChosen=[]
    cardChosenIds=[]
    resultDisplay.textContent = cardsWon.length.toString()

    if (cardsWon.length === cardArray.length/2) {
        alert('Congratulations! You won!')
        resultDisplay.textContent= 'Congratulations! You won!'
    }

}

function flipCard() {
    let cardId= this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img) 
    if (cardChosen.length===2) {
        setTimeout(checkForMatch,350)
        }        
    }


createBoard() 

function createAlert(){
    const alert=document.createElement('div')
    alert.role="alert"
    alert.className="alert alert-success"
    alert.setAttribute
}
})