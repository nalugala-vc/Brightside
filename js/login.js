var btn = document.getElementById('login-btn')
btn.addEventListener('click',()=>{
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    console.log(password)
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
  
    console.log(formdata.values())
    
    var requestOptions = {
      method: 'POST',
      body: {
        username: username,
        password:pa
      },
    };
    
    fetch("http://18.182.31.147/api/auth/login/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
})

  