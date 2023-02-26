console.log('hellow')

window.addEventListener('scroll',reveal,imgReveal);


function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  console.log(reveals)

  for(let i = 0; i < reveals.length; i++){
    const windowHight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if(revealTop < windowHight - revealPoint){
      reveals[i].classList.add('active')
    }
    else{
      reveals[i].classList.remove('active')
    }
  }

}


window.addEventListener('scroll',imgReveal);

function imgReveal() {
  const revealss = document.querySelectorAll(".discover_img");
  console.log(revealss)

  for(let i = 0; i < revealss.length; i++){
    const windowHights = window.innerHeight;
    const revealTops = revealss[i].getBoundingClientRect().top;
    const revealPoints = 150;
    if(revealTops < windowHights - revealPoints){
      revealss[i].classList.add('imgActive')
    }
    else{
      revealss[i].classList.remove('imgActive')
    }
  }

}




