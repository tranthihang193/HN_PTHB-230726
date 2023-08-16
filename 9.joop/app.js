let year=parseInt(prompt("nhap nam"));

if(year%4==0){
    if(year%100==0){
        if(year%400){
            console.log(year,'la nam nhuan');
        }else{
        console.log(year,'khong phai la nam nhuan');
    }
    }else{
        console.log(year,'la nam nhuan');
    }
    console.log(year,'khong phai la nam nhuan');
}