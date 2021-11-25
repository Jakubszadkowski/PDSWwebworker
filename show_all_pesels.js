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
            for(var i=0;i<10;i++)
            {
                for(var ii = 0; ii<10;ii++)
                {
                    for(var iii = 0; iii<10;iii++)
                    {
                        for(var iv = 0 ; iv<10;iv++)
                        {
                            for(var v = 0; v<10;v++)
                            {
                                if(validate(e.data+""+i+ii+iii+iv+v))
                                {
                                    arra[count]=e.data+""+i+ii+iii+iv+v+"<BR/>";
                                    count++;

                                }
                            }
                        }
                    }
                }
            }
            //this.postMessage([count,arra]);
            this.postMessage(arra);

    }
},false);


// this.addEventListener('error', function(e) {
//     alert('wystapil blad w linii: ' + e.lineno +
//           ' w pliku: ' + e.filename + '.' +
//           'Tresc bledu: ' + e.message);
// }, false);