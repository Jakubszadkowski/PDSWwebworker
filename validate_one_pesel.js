function validate(num){

if (num.length!=11)
    return false;
else{
    var sum=0;
    var wage=[1,3,7,9,1,3,7,9,1,3];
    for (var i=0; i<10;i++)
    {
        sum+=wage[i]*num[i];
    }
    sum=sum%10;
    if(sum==10) {
        sum=0;
    }
    else{
        sum=10-sum;
    }
    if(sum==num[10]){
        return true;
    }
    else{
        return false;
    }
}

}
this.addEventListener('message',function(e){
    switch(e.data){
        case'stop':
            //this.postMessage('watek zatrzymany');
            this.close();
            break;
        default:
            if (validate(e.data)) {
                this.postMessage("true");
            }
            else{
                this.postMessage("false"); 
            }

    }
},false);

// this.addEventListener('error', function(e) {
//     alert('wystapil blad w linii: ' + e.lineno +
//           ' w pliku: ' + e.filename + '.' +
//           'Tresc bledu: ' + e.message);
// }, false);