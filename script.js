const btnPlay = document.querySelector('#playClick');
const videoModal = document.querySelector('#videoModal')

btnPlay.addEventListener('click', modalAparece);btnPlay.addEventListener('click', videoPlay);


function modalAparece(event){
  const modal = document.querySelector('.modal_container');
  modal.classList.add('aberto');
  
}

// fechar Modal

const fechaModal = document.querySelector('.modal_container');

fechaModal.addEventListener('click', fecharModal)

function fecharModal(event){
  if(event.target == fechaModal){
    fechaModal.classList.remove('aberto');
    videoModal.pause();
  };
}


//startar video sozinho

function videoPlay(event){
 
  if(event.currentTarget == btnPlay){
      videoModal.play();
      console.log(event.currentTarget);  
  }

}

// fechar video ao clicar fora 

