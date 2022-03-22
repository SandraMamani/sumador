import sumar from "./fizzbuzz.js"

describe("FizzBuzz", () => {
    it ("Deberia generar la cadena '1' para el numero '1' ", ()=>
    {
        const result =generar(1);
        expect (result).toEqual("1");
    });
});

describe("FizzBuzz", () => {
    it ("Deberia generar la cadena '2' para el numero '2' ", ()=>
    {
        const result =generar(2);
        expect (result).toEqual("2");
    });
});

describe("FizzBuzz", () => {
    it ("Deberia generar la cadena 'Fizz' para el numero '3' ", ()=>
    {
        const result =generar(3);
        expect (result).toEqual("2");
    });
});



