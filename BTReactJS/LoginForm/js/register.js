
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

const register = () => {
    let emailValue = document.getElementById('rgtEmail').value 
    let userNameValue = document.getElementById('rgtUserName').value
    let passValue = document.getElementById('rgtPass').value
    let rePassValue = document.getElementById('rgtRePass').value
    let checkRegister = JSON.parse(localStorage.getItem('userInfo'))
    let addUser = {
        email: emailValue,
        username: userNameValue,
        password: passValue,
        Repassword: rePassValue
    }
    if(emailValue === '' || userNameValue === '' || passValue === '' || rePassValue ===''){
      alert('Bạn chưa nhập đầy đủ thông tin. Vui lòng kiểm tra lại !')
      }
      else if(validateEmail(emailValue) === false){
        alert("Email chưa đúng định dạng. Vui lòng nhập lại !")
      }
      else if(validatePass(passValue) === false){
        alert("Password phải từ 6 ký tự trở lên. Vui lòng nhập lại !")
      }
      else{
        if(passValue === rePassValue){
          let icheckEmail = checkRegister.find((a) => a.email === emailValue)
          let icheckPass = checkRegister.find((a) => a.username === userNameValue)
          console.log(icheckEmail)
          console.log(icheckPass)
          if(icheckEmail){
              alert('Email hoặc UserName đã tồn tại')
              
          }
          else if(icheckPass){
              alert('Email hoặc UserName đã tồn tại')
              
          }
          else{
              checkRegister.push(addUser)
              localStorage.setItem('userInfo', JSON.stringify(checkRegister))
              alert('Đăng ký thành công')
              //Clear input
              document.getElementById('rgtEmail').value = ''
              document.getElementById('rgtUserName').value = ''
              document.getElementById('rgtPass').value = ''
              document.getElementById('rgtRePass').value = ''
              //Đăng ký thành công thì quay về trang login
              setTimeout(function () {
                  window.location.href = '/login.html';
              }, 0)
          }
      }
      else{
          alert('Mật khẩu nhập lại không khớp')
      }
      }
    
}

//icon hiển thị pass
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
