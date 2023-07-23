userName = prompt(`Enter your name`);
userSurname = prompt(`Enter your surname`);

if (userName === null && userSurname === null){
    userName = `Your name)`;
    userSurname = `Your surname)`;
    console.log(`Name : ${userName}, Surname : ${userSurname}`);
}else{
    userName = userName.trim();
    userSurname = userSurname.trim();
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
    fullName = `Name : ${userName}, Surname : ${userSurname}`;
    console.log(fullName);
}


userEmail = prompt(`Enter your email`);

if (userEmail !== null){
    userEmail = userEmail.replaceAll(` `, ``).toLowerCase();

    if (!userEmail.includes(`@`)){
        userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
        console.log(userEmail);
    }

    if(userEmail.startsWith(`@`) && userEmail.endsWith(`@`)){
        userEmail = ` not valid email ${userEmail} (symbol @ find in first place, symbol @ find in last place)`;
        console.log(userEmail);
    }

    if (userEmail.startsWith(`@`)){
        userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
        console.log(userEmail);
    }

    if (userEmail.endsWith(`@`)) {
        userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place`;
        console.log(userEmail);
    }

} else{
    userEmail = `Email : Your Email)`;
    console.log(userEmail);
}


userAge = prompt(`Enter year of your birth`);

if(userAge !== null){
    userAge = userAge.replaceAll(` `, ``);
    today = new Date();
    year = today.getFullYear();
    userAge = year - userAge;
}else{
    userAge = `Date  : Your date)`;
}

