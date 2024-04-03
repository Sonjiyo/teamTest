let msg = document.createElement('p');
msg.classList.add('msg');
let msgOk = document.createElement('p');
msgOk.classList.add('msg');
msgOk.classList.add('msg-ok');

//정보입력
function joinCheck(form){
    msg.textContent='';

    //아이디 체크
    if(!form.loginId.value.trim()){
        msg.textContent='아이디를 입력해주세요';
        document.querySelector('.login-id').appendChild(msg);
        return false;
    }
    if(!form.loginId.value.trim().match(/^[A-Za-z]{1}[A-Za-z\d]{2,19}$/)){
        msg.textContent='영어 포함 3자이상 20자 미만으로 작성해주세요';
        document.querySelector('.login-id').appendChild(msg);
        return false;
    }

    //비밀번호 체크
    if(!form.password.value.trim()){
        msg.textContent='비밀번호를 입력해주세요';
        document.querySelector('.password').appendChild(msg);
        return false;
    }
    if(!form.password.value.trim().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/)){
        msg.textContent='영어 포함 3자이상 20자 미만으로 작성해주세요';
        document.querySelector('.password').appendChild(msg);
        return false;
    }

    if(!form.passwordCheck.value.trim()){
        msg.textContent='비밀번호를 다시 한 번 입력해주세요';
        document.querySelector('.password-check').appendChild(msg);
        return false;
    }
    //번호
    if(!form.phone.value.trim()){
        msg.textContent='휴대전화 번호를 입력해주세요';
        document.querySelector('.phone').appendChild(msg);
        return false;
    }
    if (!form.phone.value.match(/^[\d]{2,3}-[\d]{3,4}-[\d]{4}$/)) {
		msg.textContent= "전화번호 형식에 맞게 입력해주세요";
		document.querySelector('.phone').appendChild(msg);
		return false;
	}


    if(!form.terms.checked){
        msg.textContent= "약관에 동의해주세요";
		document.querySelector('.terms').appendChild(msg);
		return false;
    }
}

function passwordCompare(form){
    if(form.password.value.trim()!=form.passwordCheck.value.trim()){
        msgOk.textContent='';
        msg.textContent='비밀번호가 맞지 않습니다.';
        document.querySelector('.password-check').appendChild(msg);
        return false;
    }else{
        msg.textContent='';
        msgOk.textContent='비밀번호가 같습니다.'
        document.querySelector('.password-check').appendChild(msgOk);
    }
}

//핸드폰 번호 자동 완성
function autoHyphen(form){
    form.phone.value = form.phone.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

//본인인증------------------------------------------------------

//이메일 체크
let emailPatternCheck = false;
function emailCheck(form){
    if(!form.email.value.trim()){
        msg.textContent='이메일을 입력해주세요';
        document.querySelector('.email').appendChild(msg);
        emailPatternCheck = false;
        return;
    }
    if (!form.email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
		msg.textContent= "이메일 형식에 맞게 입력해주세요";
		document.querySelector('.email').appendChild(msg);
        emailPatternCheck = false;
        return;
	}
    msg.textContent='';
    emailPatternCheck = true;
}

let timeLeft = document.createElement('span');
timeLeft.classList.add('time-left');

//카운트다운
function countDown(form){
    msg.textContent='';

    emailCheck(form);
    if(!emailPatternCheck){return false;}
    timeLeft.innerHTML = 0o3 + ":" + 0o0;
    document.querySelector('.verification label').appendChild(timeLeft);
    startTimer();
}

function verificationCheck(form){
    msg.textContent='';

    emailCheck(form);
    if(!emailPatternCheck){return false;}

    //인증번호 확인
    if(!form.verification.value.trim()){
        msg.textContent= "인증번호를 입력해주세요";
		document.querySelector('.verification').appendChild(msg);
    }
}

function startTimer() {
    let timeArray = timeLeft.innerHTML.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
        return
    }
    
    timeLeft.innerHTML = m + ":" + s;

    setTimeout(startTimer, 1000);

}

function checkSecond(sec) { //초가 0이 되면 59로 만듦
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
}

//상점 등록------------------------------------------------------
function resturantCheck(form){
    msg.textContent='';
    //이미지 체크
    if(!form.logo.value.trim()){
        msg.textContent= "로고 이미지를 넣어주세요";
		document.querySelector('.logo-upload').appendChild(msg);
        return false;
    }

    //식당 이름 체크
    if(!form.name.value.trim()){
        msg.textContent= "식당 이름을 입력해주세요";
		document.querySelector('.resturant-name').appendChild(msg);
        return false;
    }
    if(form.name.value.trim().match(/[\{\}\[\]\/;:|*~`^\-_+<>@\#$%&\\\=\'\"]/)){
        msg.textContent=',.!?() 외의 특수문자는 불가능합니다';
        document.querySelector('.resturant-name').appendChild(msg);
        return false;
    }

    //전화번호 체크
    if(!form.phone.value.trim()){
        msg.textContent='식당 전화번호를 입력해주세요';
        document.querySelector('.resturant-phone').appendChild(msg);
        return false;
    }
    if (!form.phone.value.match(/^[\d]{2,3}-[\d]{3,4}-[\d]{4}$/)) {
		msg.textContent= "전화번호 형식에 맞게 입력해주세요 000-0000-0000";
		document.querySelector('.resturant-phone').appendChild(msg);
		return false;
	}
    //식당주소 체크
    if(!form.addressFirst.value.trim()){
        msg.textContent='식당 주소를 입력해주세요';
        document.querySelector('.resturant-address').appendChild(msg);
        return false;
    }

    //테이블 수 체크
    if(!form.restaurantTable.value.trim()){
        msg.textContent='테이블 수를 입력해주세요';
        document.querySelector('.restaurant-table').appendChild(msg);
        return false;
    }
    if(form.restaurantTable.value<=0){
        msg.textContent='테이블 수는 1이상으로 입력해주세요.';
        document.querySelector('.restaurant-table').appendChild(msg);
        return false;
    }

    
}

//이미지 미리보기
function readURL(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();
		reader.onload = function(e) {
			document.querySelector('#logoImage').src = e.target.result;
		};
		reader.readAsDataURL(input.files[0]);
	} else {
		document.querySelector('#logoImage').src = '';
	}
}