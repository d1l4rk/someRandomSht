function isLeap(year){
    const a = 4, b = 100,c = 400;
    if ( (year % a === 0 && year%b !== 0 && year%c === 0) ||  (year %a === 0 && year%b === 0 && year%c === 0) || (year %a === 0 && year%b !== 0 && year%c !== 0)){
        return `Leap year.`;
    }
    else if ( (year%a !== 0)  ||  (year % b === 0 && year % c !== 0)){
        return `Not leap year.`;
    }
}