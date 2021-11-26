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
                
                for(var month = 1; month<13;month++)
                {
                    
                    for(var day = 1; day<32;day++)
                    {
                       
                        if(day==31&&(month==4 || month==6 || month==9 || month==11))
                        {   day=99;
                            continue;
                        }
                        if(day>=29&&month==2&&year%4!=0)
                            {                       
                                day=99;   
                                continue;

                            }
                        if(day>=30&&month==2&&year%4==0){
                            continue;                
                        }
                        var year2 = "";
                        var month2 = "";
                        var day2 = "";
                        if(year>=2000&&year<=2099)
                        {
                            month2=20+month;
                            console.log("Month2 = "+month2);
                        }
                        else{
                            if(String(month).length==1)
                                month2="0"+String(month);
                            else {
                                month2=String(month);
                        }
                        }
                        
                        year2=String(year).substring(2,4);

                        


                        
                        if(String(day).length==1)
                            day2="0"+String(day);

                        else {
                            day2=String(day);
                        }

                        if(validate(year2+""+month2+day2+e.data))
                        {
                                arra[count]=year2+""+month2+day2+e.data+"<BR/>";
                                count++;
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