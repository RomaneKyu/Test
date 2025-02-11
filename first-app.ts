let userName: string | number = "Max";
console.log({ userName })

let user: { name: string; age: number; isAdmin: boolean; };

user = {
    name: "Max",
    age: 34,
    isAdmin: true
}

let hobbies: string[]; //or Array<string>
hobbies = ["sports", "cooking"];

function add(a: number, b: number): number{
    return a + b;
}

type AddFn = (a: number, b: number) => number

function calculate(a:number, b:number, addFn: AddFn){
    addFn(a, b);
}

calculate(2, 3, add);

interface Credentials {
    password: string;
    email: string;
}

class AuthCreds implements Credentials {
    email:string;
    password: string;
    username: string;
}