// if a type annotation becomes to complex
// you can create an interface to represent
// the type to simplify annotations
// also is reusable
// are not limite to objets
// they can describe any structure

interface IPerson {
  name: string;
  heighInCentimeters: number;
}
var myperson: IPerson = {
  name: "Mark",
  heighInCentimeters: 171,
};

interface IPoint {
  x: number;
  y: number;
}

interface ICompare {
  compare(p2: IPoint): number;
}

interface ISum {
  add(arg1: number, ...args: number[]): number;
}

interface ISubstrator {
  subtract(arg1: number, ...args: number[]): number;
}

/*
interface ICalculador extends ISum, ISubstrator{
    multiply(arg1:number, ...args:number[]):number;
    dividir(arg1:number, arg2:number):number;
}
*/
// then we can use it in a function
function Calculator(calculadora: ICalculador, num1, num2) {
  calculadora.add(num1, num2);
  calculadora.subtract(num1, num2);
  calculadora.multiply(num1, num2);
  calculadora.divide(num1, num2);
  return true;
}

// In addition to the above code, these can be separated

interface ICalculador extends ISum {
  multiply(arg1: number, ...args: number[]): number;
}

interface ICalculador extends ISubstrator {
  divide(arg1: number, ...args: number[]): number;
}

// you can also create an interface in the process of
// declaration itself

function addPoints(p1: IPoint, p2: IPoint): IPoint {
  var x = p1.x + p2.x;
  var y = p1.y + p2.y;
  return { x: x, y: y };
}

//Validate
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
// Error
//var newPoint = addPoints({x:1},{x:5,y:1});

interface ITodo {
  title: string;
  text: string;
}

function todo(todo: ITodo) {
  console.log(todo.title + " " + todo.text);
}
