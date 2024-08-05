let btn=document.querySelector(".btn");
let qrImage=document.querySelector("#qr-image");
let qrName=document.querySelector("#qr-name");
btn.onclick=()=>{
    if(qrName.value != ""){
        qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrImage.value}`;
    }
    else{
        alert("Enter Text/URL")
    }
}