/*
QUESTION #1

Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  

let student1 = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}
*/

//type for CTStudent instances
type CTStudent = {
    id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[], //array containing strings
    pet?: string //optional because not with every student
}

//declare the 3 students as CTStudent and declare values
let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted: ["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}
let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}
let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

console.log(student1)
console.log(student2)
console.log(student3)


/* 
QUESTION #2

Write a function that will accept an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function  */

type Fruit={
    color:string,
    shape:string
}
  
let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null

//this doesn't accept type Fruit/parameter
// function isTherefruit() {
//     if (apple !== null) {
//         console.log(`The fruit is ${apple.color}`)
//     } else {
//         console.log('You ate my fruit already.')
//     }
// }

function isTherefruit(fruit: Fruit | null) {
    if (fruit !== null) {
        console.log(`The fruit is ${apple.color}`)
    } else {
        console.log('You ate my fruit already.')
    }
}

isTherefruit(eaten) //can't use console.log to call a function, only values and instance
isTherefruit(apple)


/* 
QUESTION #3

Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */

type Book={
    isbn:string,
    title:string,
    author:string
}
  
  type DigitalBook={
    fileType:string,
}

//use & for 'and' and | for 'or' (value of type1 or type2)
type Ebook = Book & DigitalBook
//create one stance of the union type
let oneEbook: Ebook = {
    isbn: '749708',
    title: 'Harlem Renaissance',
    author: 'Huggins',
    fileType: 'pdf'
}

console.log(oneEbook)


/*
QUESTION #4

Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type 
*/

//type ShopItem
type ShopItem = {
    readonly id: number, //readonly cannot be modified
    price: number,
    description: string,
    color?: string,
    keywords: string[],
    category: Category
}

enum Category {
    Shirts, Shoes, Pants, Hats //shows up as indices
}

let item1: ShopItem = {
    id:1,
    price: 8.99,
    description: 'hat',
    color: 'black',
    keywords: ['warm', 'black', 'winter', 'hat'],
    category: Category.Hats
}

let item2: ShopItem = {
    id:2,
    price: 25.00,
    description: 'nike pants',
    color: 'gray',
    keywords: ['warm', 'gray', 'nike', 'insulated'],
    category: Category.Pants
}

let item3: ShopItem = {
    id:3,
    price: 15.00,
    description: 'rainbow t-shirt',
    color: 'multi-color',
    keywords: ['cotton', 'comfy', 'colorful'],
    category: Category.Shirts
}

console.log(item1)
console.log(item2)
console.log(item3)

  