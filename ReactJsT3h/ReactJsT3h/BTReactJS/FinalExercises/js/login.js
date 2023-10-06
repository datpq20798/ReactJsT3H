// let userInfo = [
//   {email: 'datpq20798@gmail.com', username: 'datpq', password: '123456', Repassword: '123456'},
//   {email: 'datpq@gmail.com', username: 'dat', password: '123456', Repassword: '123456'}
// ]

//validate Pass
const validatePass = (pass) => {
  const regexPass = /^.{6,}$/
  return regexPass.test(pass)
}
//validate Email
const validateEmail = (email) => {
	const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return regexEmail.test(email);
}

const login = () => {
  let emailValue = document.getElementById('inputEmail').value
  let passValue = document.getElementById('inputPass').value
  if(validateEmail(emailValue) === false){
    alert("Email chưa đúng định dạng. Vui lòng nhập lại !")
  }
  else if(validatePass(passValue) === false){
    alert("Password phải từ 6 ký tự trở lên. Vui lòng nhập lại !")
  }
  else{
    let checkLogin = JSON.parse(localStorage.getItem('userInfo'))
    let icheck = checkLogin.find((a) => a.email === emailValue && a.password === passValue)
    if(icheck){
      alert('Đăng nhập thành công')
    }
    else{
      alert('Sai Email hoặc mật khẩu')
    }
  }
  // localStorage.setItem("userInfo", JSON.stringify(userInfo))
  // localStorage.clear();
}



//hiển thị password
const close = document.querySelector(".close"),
  open = document.querySelector(".open"),
  eyeWrapper = document.querySelector(".eye-wrapper"),
  password = document.querySelector(".password")

let showHide = () => {
  if (password.type == "password") {
    password.setAttribute("type", "text")
    open.style.display = "block"
    close.style.display = "none"
  } else {
    password.setAttribute("type", "password")
    close.style.display = "block"
    open.style.display = "none"
  }
};
eyeWrapper.addEventListener("click", showHide)
