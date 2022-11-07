function valid(){
    let fn=document.getElementById("fname").value;
    let ln=document.getElementById("lname").value;
    let number=document.getElementById("phno").value;
    let mail=document.getElementById("email").value;
    let a=document.getElementById("pass").value;
    let b=document.getElementById("cpass").value;
    let spl=['!','@','#','$','%','^','&','*','(',')','<','>',',','.',':',';','[',']','{','}','`','~','-','=','_','+','?','/'];
    var l=0,h=0;
    l=Number(l);h=Number(h);
    for(let i=0;i<fn.length;i++){
        for(let j=0;j<spl.length;j++){
            if(fn.charAt(i)==spl[j]){
                l++;
            }
        }
    }for(let i=0;i<ln.length;i++){
        for(let j=0;j<spl.length;j++){
            if(ln.charAt(i)==spl[j]){
                h++;
            }
        }
    }if(l==0&&h==0){
        if(number.length==10){
            if(a!=b){
                alert("Enter correct password");
                return false;
            }else{
                alert("Welcome "+fn);
                return true;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}