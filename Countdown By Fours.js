

function countDown(x){
    var count = [];
    var four = x ;
    
    while(four > 0){
       
        if( four !== 0){
        count.push(four);
        }

        four = four - 4;
    }

    return count;

}

countDown(2016);
