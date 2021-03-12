let output = [];
let i = 0;
function fizzBuzz(){
    i++;

    if ((i % 3 == 0) && (i%5 == 0)){
        output.push('Fizz Buzz');
    } else if(i % 3 == 0){
        output.push('Fizz');
    }else if( i % 5 ==0){
        output.push('Buzz');
    }else{
        output.push(i);
    }
    
    return output;
    
}
const fizzBuzzDelete = () =>{
    output.pop();
    return output;
}