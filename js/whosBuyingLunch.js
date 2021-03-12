
const whosBuyingLunch = (names) =>{
    names = ['Angela','Ben','Jenny','Michael','Chloe'];
    let randomName = Math.random();
    randomName *= names.length;
    randomName = Math.floor(randomName);
    // for (i = 0; i< names.length; i++){
    //     console.log(names[i]);
    //     if(randomName == names.[])
    // }
    // if(randomName == names.length){
    //     return `${names[0]} is going to buy lunch today!`;
    // }
    return `${names[randomName]} is going to buy lunch today!`;
}