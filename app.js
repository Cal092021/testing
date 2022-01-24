const add = (num1, num2) => {
    return num1 + num2
  }

  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  //create a function that creates an object with 2 properties, test to make sure
  // that the objects' properties are equal to your test function

  const person = {
    name: "Ann",
    age: 50,
  }

  
  //A function that will return items in an array with 6 or more characters

  function favFood(type) {
        [
          'pizza',
          'noodles',
          'curry',
          'tortillas',
          'cake',
        ];
         
        for (i = 0; i >=6; i++) {
          console.log(favFood[i]);
        };
  
            
         

        //converting a number to a string

        const a = 10;
        console.log(a.toString());

        


        //display the correct planet with the number order away from the sun
        //(planet(3))will return earth

        const planets = [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
        ];

        







        //count the amount of students present in the class
       
        module.exports=add
        module.exports=person
        module.exports=planets
        module.exports=a
        module.exports=favFood