



function multiThree(){
    var arr = [];
    var blank = [];
    
    
    for(var i = -300; i < 0; i++){
        if(i % 3 === 0){

            if(i == -6){
                blank.push(i);
            }else if(i == -3){
               blank.push(i);
            }else
            arr.push(i);                 
        }  
    
    }

    return arr;    
   

}

multiThree(); 