// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
 let div = document.getElementById("answer");
 let btn = document.getElementById("button");
 
 
 
 btn.addEventListener("click", function (e) {
 
     e.preventDefault();
     if (validation()) {
         getData();
     }
 
 });
 
 const getData = () => {
     let promesa = fetch("https://yesno.wtf/api", {
         method: "GET"
     });
     promesa.then((response) => {
         response.json().then((data) => {
             console.log(data.answer);
             div.innerText = data.answer;
             console.log(typeof (data));
             const myTimeout = setTimeout(clear, 5000);
         }).catch((error) => {
             console.error(error);
         });
     }).catch((error) => {
         console.log("Error de la solicitud " + error);
     })
 }
 
 
 
 function clear() {
     answer.innerText = "";
     document.getElementById("input").value = '';
 }
 
 function validation() {
     if (document.getElementById("input").value) {
         return true;
     } else {
         console.log("ingresar datos validos");
         return false;
     }
 
 }