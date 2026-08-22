// alert("linked")
let qrcode = new QRCode(document.querySelector(".qrcodespace"))

qrcode.makeCode("hello how are you")

function generatecode(){
    // alert("button activated code")
    if(document.querySelector("#inputfields").value === ""){
        alert("please enter a text or a URL to generate QR code >_<")
    }
    else{
        qrcode.makeCode(document.querySelector("#inputfields").value)
    }
}