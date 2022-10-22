const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;

    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
  

    var requestOptions = {
        method: 'POST',
        body: formdata
      };
      
      fetch("http://18.182.31.147/api/auth/login/", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('Token',`Token ${result['key']}`);
            window.location.href = 'index.html'
        })
      //   .catch(error => console.log('error', error));
})