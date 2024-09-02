document.querySelector('form').addEventListener('submit', (event) =>{ 
    const inputValue = document.querySelector('input').value;
    const img = document.querySelector('#img');
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    img.classList.add('animate-open-menu2');


})