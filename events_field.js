function makeFieldYellow(){
    onFocus="this.style.backgroundColor='grey'"
}
function makeFieldWhite(){
    onBlur="this.style.backgroundColor='white'"
}



/*function checkAddress(email){
    let useremail = document.getElementById(email).value

    if ( useremail ===""){
        alert("Email address is required")
    }
}*/

let emails =['mukhtiar@gmail.com', 'ali@gmail.com','kmc@gmail.com','hubaib@yahoo.com']
let passess=['03459170059', 'castname', 'institute', 'son']



function checkAddress(email,pwd){
    let useremail = document.getElementById(email).value
    let userpass = document.getElementById(pwd).value

    if ( useremail !=="" && userpass !==""){
     if (emails.includes(useremail) && passess.includes(userpass)){

        document.write(`Welcom: ${useremail}`)
     }
     else{
        alert("invalid Email address or passward")
     }
     
    }
    else{
        alert("Please enter an email address or passward ")
    }
}





function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;

    switch (zipEntered) {
        case "60608" :
            cityName = "Chicago";
            break;
        case "05444" :
            cityName = "Karachi";
            break;
        case "44000" :    
            cityName = "Punjab";
            break;
        case "87300" :
            cityName = "Quetta"; 
            break;
        default:
            cityName = 'Lahore';   
    }  

    document.getElementById("city").value = cityName;
            


   
}