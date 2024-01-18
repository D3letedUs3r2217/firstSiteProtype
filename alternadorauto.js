const elements = document.querySelectorAll('.element')
let totalelement = elements.length
let i = 0

function alterC(){
        
    function addIndex(){ 
            i++
        }
 
        if(i < 0){
            i = totalelement -1
        }else if(i >= totalelement){
            elements[3].classList.remove('class1')
            i = 0
            elements[0].classList.add('class1')
        }
        else{
        elements[i].classList.add('class1')
        }

        if(i > 0){
        elements[i -1].classList.remove('class1')
        }

    return addIndex()
}

setInterval(alterC, 2000)











