document.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
     let valueOne =  e.target["ramen-detail"].value
     let valueTwo=  e.target['rating-display'].value
     let valueThree= e.target['comment-display'].value
    })
})

function buildMenu(menu){

    let detail= document.getElementByID('ramen-detail')
    image= detail.querySelector('img')
    h2= detail.querySelector('h2')
    h3=detail.querySelector('h3')
    h2.textContent= ramens.name 
    h3.textContent= ramens.restaurant
    image.src= ramens.image

    let rating = document.getElementByID('rating-display')
    let comment= document.getElementById('comment-display')

    rating.textContent= ramens.rating 
    comment.textContent= ramens.comment

    detail.append(valueOne)
    rating.append (valueTwo)
    comment.append(valueThree)
  
    
    fetch('http://localhost:3000/ramens')
    .then (res=>res.json())
    .then (ramens=> ramens.forEach(menu=>buildMenu(menu))

}


//fetch 

function getData(){
    
}