let btnItem = document.querySelectorAll('.dropdown-item')
let divs = document.querySelectorAll('div')



var getId = function getId(elementIdButton){
    
    divs.forEach(divs => 
        {
            let div = divs
        
            if(div.hasAttribute('id'))
            {
                
            let divContensId = div
                if(divContensId.id !== elementIdButton)
                {
                    div.classList.add('oculta')
                }else
                {
                    div.classList.remove('oculta')
                    div.classList.add('visivel')
                }
            }
        })
}




btnItem.forEach(btnItem => 
    {
        
        btnItem.addEventListener('click', (e)=>
        {
                
            btnId = btnItem.id
              
            getId(btnId)
            
    
        })

 
    })



/*divs.forEach(divs => {
   let divsId =  divs.id
    divs.classList.toggle('visivel')
});*/