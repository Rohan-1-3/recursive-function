const finalResult = [];
function fibs(n){
    let a=0;
    let b=1;
    let c=a+b;
    finalResult.push(a);
    finalResult.push(b);
    for(let i=3;i<=n;i+=1){
        finalResult.push(c)
        a=b;
        b=c;
        c=a+b;;
    }
    return finalResult
}

function fibsRec(n){
    if(n<=1) return n;
    console.log(n)
    return fibsRec(n-1)+ fibsRec(n-2);
    }
    
function fibsRecPrint(n){
    for(let i=0;i<n;i+=1){
        finalResult.push(fibsRec(i));
    }
    return finalResult;
}