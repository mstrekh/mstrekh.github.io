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
            "id_1": "Дарья ",
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
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if(gender==='Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


     randomSurname: function(gender) {
        if(gender==='Мужчина') {
            return this.randomValue(this.surnameJson);
        }
        else {
            return `${this.randomValue(this.surnameJson)}а`;
        }

    },
    randomGender: function() {
        const gender = this.randomIntNumber();
        if (gender) {
            return this.GENDER_MALE
         }
         else {
             return this.GENDER_FEMALE;
        } 
             
    },

    getPerson: function () {
        this.person = {};
        
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.dateOfBirth = `${this.randomIntNumber(1950, 2000)} года рождения`;

        return this.person;
    }
};
