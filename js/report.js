const submitReport=document.getElementById('submitReport')
submitReport.addEventListener('click',report)
function get_token() {
    var token = localStorage.getItem("Token");
    if(token ==null){
      window.location.href='auth.html'
    }
    else{
      return token
    }
  } 
function report(){
    var text = document.getElementById('plate_number')
    var complaint = document.getElementById('complaint')

    const report= {
        text: `${text} - ${complaint}`
    }
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append('text',`${text} - ${complaint}`)
    myHeaders.append(
        "Authorization",
        get_token()
      );

    fetch('http://18.182.31.147/api/report/',{
        method:'POST',
        body:formdata,
        headers:myHeaders}
          
    ).then(res=>{
        alert("Thank you for reporting")
    }).catch(e=>console.log(e))
}