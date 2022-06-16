var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

function opener() {
  modal.classList.add('modal_active');
}

function closer() {
  modal.classList.remove('modal_active');
}


button.addEventListener('click', function(){
  console.log('Пользователь нажал кнопку');
  opener();
  console.log('Открытие')
  setTimeout(closer, 5000);
  
  //setTimeout( opener(), 5000);
  //closer();
});

close.addEventListener('click', function(){
  console.log(' Пользователь закрывает модальное окно ');
  closer();
})