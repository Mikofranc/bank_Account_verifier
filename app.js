let accountNUmber = "0691166359";
let bank = "044";

const xhr = new XMLHttpRequest();
// xhr.open("Get", `https://api.paystack.co/bank/resolve?account_number=${accountNUmber}&bank_code=${bank}`)
xhr.open("Get", "https://api.paystack.co/bank")
xhr.setRequestHeader("Authorization", "Bearer sk_test_7fd5fa77347a73991a46c196973aa05eb04aeb25");
xhr.send()
xhr.onload = function(){
    if(xhr.status === 200){
        // const data = JSON.parse(xhr.responseText).data
        // const {email, first_name, last_name } = data
        // console.log("email",email);
        // console.log("first Name",first_name);
        // console.log("last name",last_name);

         let result=JSON.parse(xhr.response).data;
         console.log(result)
    }else{
        console.log(xhr.responseText);
     }
    // try{
    //     let {account_name} =JSON.parse(xhr.responseText).data
    //     console.log("Account name:  ", account_name)
    // }catch(error){
    //     console.log(error)
    // }
    
}

// const xhr = new XMLHttpRequest();
// xhr.open("Post","https://reqres.in/api/users")
// xhr.send()
// xhr.onload = function (){
//     if(xhr.status ===200){
//      const data = JSON.parse(xhr.responseText);
//      console.log(data)   
//     }else{
//         console.log(xhr.status)
//     }
// }
// import axios from "axios";
// const response = axios.get("https://reqres.in/api/users/2");