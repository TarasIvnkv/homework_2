// userName = prompt(`Enter your name`);
// userSurname = prompt(`Enter your surname`);
// userName = userName.trim();
// userSurname = userSurname.trim();
// userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
// userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
// fullName = `${userName} ${userSurname}`;
// console.log(fullName);





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


