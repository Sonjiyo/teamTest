let buttons = [...document.querySelectorAll('.title-right button')];
let content = [...document.querySelectorAll('.content')];
buttons.forEach(e=>{
    e.addEventListener('click', ()=>{
        if(e.classList.contains('on')){
            e.classList.remove('on');
            content[buttons.indexOf(e)].classList.remove('on');
        }else{
            e.classList.add('on');
            content[buttons.indexOf(e)].classList.add('on');
        }
    })
})

// 패스워드 숨기기 / 보이기

let passwordEye = [...document.querySelectorAll('.passwordEye')];
let password = [...document.querySelectorAll('.password')];

passwordEye.forEach(e=>{
    e.addEventListener('click', ()=>{
        if(e.classList.contains('fa-eye')){
            e.classList.add('fa-eye-slash');
            e.classList.remove('fa-eye');
            password[passwordEye.indexOf(e)].type = 'password';
        }else{
            e.classList.remove('fa-eye-slash');
            e.classList.add('fa-eye');
            password[passwordEye.indexOf(e)].type='text';
        } 
    })
})