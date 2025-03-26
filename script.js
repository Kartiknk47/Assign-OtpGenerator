function getOtp(){
    otp =Math.floor(1000+Math.random()*9999);
    document.getElementById("displayOtp").innerHTML=otp
}

function submitOtp(){
let inputs = document.getElementById("input1").value+
document.getElementById("input2").value+
document.getElementById("input3").value+
document.getElementById("input4").value

console.log(inputs)



let userOtp = document.getElementById("displayOtp").innerHTML;
console.log(userOtp)




if( userOtp === inputs){
    
    alert("You have successfully verified your OTP.")
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    
    document.getElementById("input1").focus()
    
}else{
    alert("Invalid OTP, please try again")
}
}


