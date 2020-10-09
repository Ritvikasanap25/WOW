burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    
    rightnav.classList.toggle('v-classresp');
    navlist.classList.toggle('v-classresp');
    navbar.classList.toggle('h-classresp');






})