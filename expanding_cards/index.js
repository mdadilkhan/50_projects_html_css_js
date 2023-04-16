

const panels=document.querySelectorAll('.panel');
// console.log(panels[1].classList.add('active'));
// console.log(panels[1].classList);


panels.forEach((panel)=>{
 
    panel.addEventListener('click',()=>{
            removeActiveClass();
            panel.classList.add('active');
       
    })
})

const removeActiveClass=()=>{
    panels.forEach((panel)=>{
      panel.classList.remove('active');
    })
}