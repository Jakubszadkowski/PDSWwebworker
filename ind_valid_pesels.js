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
            var arra=[];
            var count=0;
            for(var year=1930;year<=2050;year++)
            {
                for(var month = 1; ii<13;ii++)
                {
                    for(var day = 1; day<32;day++)
                    {
                        if(day>=31&&(month==4 || month==6 || month==9 || month==11))
                        {   day=32;
                            continue;
                        }
                        if(day=>29&&month==2&&year%4!=0)
                            continue;
                        if(day=>30&&month==2&&year%4==0)
                            continue;                
                                       
                        if(validate(e.data+""+i+ii+iii+iv+v))
                        {

                        }
                            
                        
                    }
                }
            }
            this.postMessage(arra);

    }
},false);


// this.addEventListener('error', function(e) {
//     alert('wystapil blad w linii: ' + e.lineno +
//           ' w pliku: ' + e.filename + '.' +
//           'Tresc bledu: ' + e.message);
// }, false);