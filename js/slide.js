let arrowLeft = document.querySelector('.left-arrow')
let arrowRigth = document.querySelector('.rigth-arrow')
let contador = 1;

arrowRigth.addEventListener('click',function(){
    
    if(contador >= 3){
        contador=3
    }else{
        contador++
        let slide1 = document.querySelector('#slide'+(contador-1))
        let slide2 = document.querySelector('#slide'+contador)

        slide1.removeAttribute('class');
        slide1.classList.add('slide-hidden-rigth')

        slide2.removeAttribute('class');
        slide2.classList.add('slide-visible')
        
    }
      
    console.log(contador);
})

arrowLeft.addEventListener('click',function(){

    if(contador <= 1){
        contador=1
    }else{
        contador--
        let slide1 = document.querySelector('#slide'+(contador))
        let slide2 = document.querySelector('#slide'+(contador+1))

        slide2.classList.remove('slide-visible')
        slide2.classList.add('slide-hidden-left')
    
        slide1.classList.remove('slide-hidden-rigth')
        slide1.classList.add('slide-visible') 
        
    }
    console.log(contador);
})