const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дарья",
            "id_2": "Инна",
            "id_3": "Валентина",
            "id_4": "Анна",
            "id_5": "Влада",
            "id_6": "Аглая",
            "id_7": "Светлана",
            "id_8": "Ирина",
            "id_9": "Карина",
            "id_10": "Марина"
        }
    }`,
    
    secondNameJson: `{
        "count": 4,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    OccupationMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Слесарь",
            "id_3": "Электрик",
            "id_4": "Столяр",
            "id_5": "Крановщик"
        }
    }`,

    OccupationFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Визажист",
            "id_3": "Няня",
            "id_4": "Дизайнер",
            "id_5": "Кассир"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
    randomGender: function() {
        const gender = this.randomIntNumber();
            return gender ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function(gender) {
        return gender==='Мужчина' ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },
    
    randomSecondName: function(gender) {
        return gender==='Мужчина' ? `${this.randomValue(this.secondNameJson)}ович` : `${this.randomValue(this.secondNameJson)}овна`;
    },
    
    randomSurname: function(gender) {
        return gender==='Мужчина' ? this.randomValue(this.surnameJson) : `${this.randomValue(this.surnameJson)}а`;
    },

    randomDayOfBirth: function(monthOfBirth) {
        let dayOfBirth = this.randomIntNumber(1, 31); 
        if (monthOfBirth =='Апреля' 
        || monthOfBirth =='Июня' 
        || monthOfBirth =='Сентября' 
        || monthOfBirth =='Ноября'  
        && dayOfBirth === 31 ) {
            dayOfBirth = 30;
        }
        else {
            if(monthOfBirth === 'Февраля' && dayOfBirth > 28) {
                dayOfBirth = 28;
            }
        }

        return dayOfBirth;
    },

    randomMonthOfBirth: function() {
        return this.randomValue(this.birthMonthJson);
    },

    randomOccupation: function (gender) {
        return gender==='Мужчина' ? this.randomValue(this.OccupationMaleJson) : this.randomValue(this.OccupationFemaleJson);
    },

    getPerson: function () {
        this.person = {};
        
        this.person.gender = this.randomGender();
        
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.secondName = this.randomSecondName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);

        this.person.monthOfBirth = this.randomMonthOfBirth();
        this.person.dayOfBirth = this.randomDayOfBirth(this.person.monthOfBirth);
        this.person.yearOfBirth = `${this.randomIntNumber(1950, 2000)}`;
        
        this.person.occupation = this.randomOccupation(this.person.gender);
        return this.person;
    }
};
