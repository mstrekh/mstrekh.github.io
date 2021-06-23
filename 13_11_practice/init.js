
document.getElementById('btnGenerate').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    
    document.getElementById('genderOutput').innerText = initPerson.gender;

    document.getElementById('birthDayOutput').innerText = initPerson.dayOfBirth;
    document.getElementById('birthMonthOutput').innerText = initPerson.monthOfBirth;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirth;
    
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
})

document.getElementById('btnClear').addEventListener('click', () => {
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('secondNameOutput').innerText = 'Отчество';
    
    document.getElementById('genderOutput').innerText = 'Пол';

    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = 'Дата рождения';
    
    document.getElementById('occupationOutput').innerText = 'Профессия';  
})