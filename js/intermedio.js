// function randomMatch(){
//     let n = Math.random();
//     n *= 100;
//     n = Math.floor(n);
//     return n;   
// }
// function matchLove(
//     you,her
// ){
//     you = prompt("Escribe tu nombre");
//     her = prompt("Escribe el nombre de ella");
//     document.write(`<h1>${you} y ${her} tienen ${randomMatch()}% de estar juntos </h1>`);
    

// }
// matchLove();

function bmiCalculator (weight, height) {
    let bmi = weight/Math.pow(height,2);
    if(bmi < 18.5){
        return `Your BMI is ${bmi}, so you are underweight.`;
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    }else{
        return `Your BMI is ${bmi}, so you are overweight.`;    
    }
}

bmiCalculator(80,1.56);

