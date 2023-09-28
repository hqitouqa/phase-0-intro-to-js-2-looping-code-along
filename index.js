// Code your solutions in this file
names=["Guadalupe", "Ollie", "Aki"]
message='surprise'
function writeCards(names,message){
    let messages=[];
    for(let i=0; i<3; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
    }
    return messages;
}

function  countDown(x){
    
    while(x>=0){
        console.log(x);
        x--;
    }
}
