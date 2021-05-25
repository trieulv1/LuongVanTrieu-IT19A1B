window.onload = () => {
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    let height = parseInt(document
            .querySelector("#height").value);
  
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
   
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    else {
  
       
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}window.onload = () => {
    let button = document.querySelector("#btn");
  
  
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  

    let height = parseInt(document
            .querySelector("#height").value);
  
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    
   
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    
    else {
  
     
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
    
        if (bmi < 18.6) result.innerHTML =
            `Gay : <span>${bmi}</span>. Nguy co phat benh : Thap`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Binh Thuong : <span>${bmi}</span>. Nguy co phat benh : Trung Binh`;
        else if (bmi >= 25 && bmi  <29)
            result.innerHTML=
            `Hoi Beo : <span>${bmi}</span>. Nguy co phat benh : Cao`;
        else if (bmi >= 30 && bmi < 34) 
            result.innerHTML = 
                `Beo phi cap do 1 : <span>${bmi}</span>. Nguy co phat benh : Cao`;
         else if (bmi >= 35 && bmi < 39) 
                result.innerHTML = 
                `Beo phi cap do 2 : <span>${bmi}</span>. Nguy co phat benh : Rat Cao`;
        else
        result.innerHTML = 
                `Beo phi cap do 3: <span>${bmi}</span>. Nguy co phat benh : Nguy Hiem`;
    }
}