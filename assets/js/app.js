let btnItem = document.querySelectorAll('.dropdown-item')
let divs = document.querySelectorAll('div')

btnItem.forEach(btnItem => {
    btnItem.addEventListener('click', (e)=>{
    let btnId = btnItem.id
    console.log(btnId)
    
    })
});

/*divs.forEach(divs => {
   let divsId =  divs.id
    divs.classList.toggle('visivel')
});*/