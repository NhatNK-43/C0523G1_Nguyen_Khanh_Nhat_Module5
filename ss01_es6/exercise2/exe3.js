const  sv1 = {
    // firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}



let getInfo = sv=>{
    let {firstName,degree} = sv;
    if(firstName===undefined){
        firstName =  'Quân';
    }
    if(degree===undefined){
        degree = 'NA';
    }
    let sv2 = {
        firstName,
        degree
    }
    console.log(sv2);
}

getInfo(sv1);