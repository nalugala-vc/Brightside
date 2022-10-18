const form=document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const register=new FormData(form);

    console.log([...register])

    fetch('http://18.182.31.147/api/auth/register/',{
        method:'POST',
        body:register
    }).then(res=>res.json()).then(data =>console.log(data)).catch(err=>console.log(err))
})