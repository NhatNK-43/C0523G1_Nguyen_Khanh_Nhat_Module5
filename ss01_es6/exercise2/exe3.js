const  sv1 = {
    // firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}



let getInfo = ({firstName = 'Quân', degree = 'NA'})=>{

    console.log('FirstName: '+firstName+', Degree: '+degree);
}

getInfo(sv1);