//varibales

const accordion = document.getElementsByClassName('content-container')
console.log(accordion)
for(let i =0; i<accordion.length; i++){
    console.log(accordion[i])
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
        
    })
}


