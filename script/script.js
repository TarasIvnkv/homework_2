userName = prompt(`Enter your name`);
userSurname = prompt(`Enter your surname`);

if (userName === null || userName === ``){
    userName = `Your name😌`;
}else{
    userName = userName.trim();
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
}

if (userSurname === null || userSurname === ``){
    userSurname = `Your name😌`;
}else{
    userSurname = userSurname.trim();
    userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
}

fullName = `${userName} ${userSurname}`;


userEmail = prompt(`Enter your email`);

if (userEmail !== null || userEmail !== ``){
    userEmail = `Email not defined`;

} else{
    userEmail = userEmail.replaceAll(` `, ``).toLowerCase();

    if (!userEmail.includes(`@`)){
        userEmail = `not valid email ${userEmail} (symbol @ not exist)`;
    }

    if(userEmail.startsWith(`@`) && userEmail.endsWith(`@`)){
        userEmail = ` not valid email ${userEmail} (symbol @ find in first place, symbol @ find in last place)`;
    }

    if (userEmail.startsWith(`@`)){
        userEmail = `not valid email ${userEmail} (symbol @ find in first place)`;
    }

    if (userEmail.endsWith(`@`)) {
        userEmail = `not valid email ${userEmail} (symbol @ find in last place)`;
    }
}


userAge = prompt(`Enter year of your birth`);

if(userAge === null || userAge === ``){
    userAge = `Your age😌`;
}else{
    userAge = userAge.replaceAll(` `, ``);
    today = new Date();
    year = today.getFullYear();
    userAge = year - userAge;
}


document.write(`
    <h1>Form</h1>
    <ul>
        <li>Full name: ${fullName}</li>
        <li>Email: ${userEmail}</li>
        <li>Age: ${userAge}</li>
    </ul>
`);
