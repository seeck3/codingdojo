

function printCount(){
    var arr = []
    for(var i = 512; i < 4097; i++){

        if(i % 5 === 0){
            arr.push(i);
        }
    }

    console.log(arr.length);
    return arr;

}

printCount();