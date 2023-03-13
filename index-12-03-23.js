//6. Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b
//   },
// };
// calculator.read(7, 5);
// console.log(calculator.sum());
// console.log(calculator.mult());

///////////////////////////////////////////


// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.


// const obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }

// console.log(add.call(obj, 3, 5));

// console.log(add.apply(obj, [3, 5]));

// const someVar = add.bind(obj, 3, 5);
// console.log(someVar());

////////////////////////////////


// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" -  "South Korea".

// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI", 
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }

// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG", 

// }

// tel.showInfo('China');
// tel.showInfo.call(tel_2, "South Korea");
// tel.showInfo.apply(tel_2, ["South Korea"]);
// const newTel = tel.showInfo.bind(tel_2, "South Korea");
// newTel();

/////////////////////////


// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

// const car = {
//     carBrand: "Audi Q3",
//     price: 23000,
//     getData() {
//       return `${this.carBrand} за ${this.price} $`;
//     },
//   };
  
//   function makeMessage(callback) {
  
//     console.log(`Ви замовили ${callback()}.`);
//   }
  
//   makeMessage(car.getData.bind(car));


///////////////////////

// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//     type: 'fruit',
//     cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
//     vitamins: ['A', 'B1', 'B2', 'E'],
// }

// const fuji = Object.create(apples);
// console.log(apples.isPrototypeOf(fuji));
// fuji.color = 'pink';
// console.log(fuji);
// console.log(fuji.type);
// console.log(apples.hasOwnProperty('vitamins'));
// console.log(fuji.hasOwnProperty('cookingMethod'))


/////////////////////////////////


//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//     constructor({height, width}){
//         this.height = height;
//         this.width = width;
//     }

//     calculateArea() {
//         return this.height + this.width;
//     }

// }

// const squary = new Rectangle({height: 20, width: 30});
// console.log(squary);

// console.log(squary.calculateArea());


///////////////////////////////////

//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Clsent {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     get email() {
//         return this.#email;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const ivan = new Client('ivan', 'ivan@mail.com');
// console.log(ivan.login);
// console.log(ivan.email);

// ivan.login = 'newIvan';
// console.log(ivan.login)

// ivan.email = 'newEmail';
// console.log(ivan.email);

// 

////////////////////////////


//Напиши клас Notes який управляє колекцією нотаток у властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами:
// {
//   HIGHT: "hight",
//   LOW: "low",
// }.
//Додай методи addNote(note), removeNote(noteText), updatePriority(noteText, newPriority)

// class Notes {
//     static Priopity() {
//         return {
//         HIGHT: "hight",
//         LOW: "low",
//         }
//     }

//     constructor() {
//         this.items = []
//     }

//     addNote(note) {
//         return this.items.push(note);
//     }

//     getItems() {
//         return this.items;
//     }

//     removeNote(noteText) {
//         const index = this.items.findIndex(note => note.text === noteText);
//         if(indItem !== 1) {
//             return this.items.splice(indItem, 1);
//         }
//     }



// }

// const note1 = new Notes;
// note1.addNote({text: 'note1', priority: Notes.Priopity()HIGHT});
// console.log(note1(getItems))
// note1.addNote({text: 'note2', priority: Notes.Priopity()LOW});

class Notes {
    static Priopity () {
        return {
        HIGHT: "hight",
        LOW: "low",
    };

    };

    constructor () {
        this.items = [];
    };

    addNote(note) {
        return this.items.push(note);
    };

    getItems () {
        return this.items;
    }

    removeNote(noteText) {
        const indItem = this.items.findIndex(note => note.text === noteText);
        if (indItem !== -1) {
            return this.items.splice(indItem, 1);
        };
    };

    updatePriority(noteText, newPriority) {
        const indItem = this.items.findIndex(note => note.text === noteText);
        if (indItem !== -1) {
            this.items[indItem].priority = newPriority;
        }
    };
};

const note1 = new Notes ()
note1.addNote({text: "note1", priority: Notes.Priopity().HIGHT})
console.log(note1.getItems());

note1.addNote({text: "note2", priority: Notes.Priopity().LOW})
console.log(note1.getItems());

note1.removeNote("note2");
console.log(note1.getItems());

note1.updatePriority("note1", Notes.Priopity().LOW);
console.log(note1.getItems());