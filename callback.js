// function sayHello(){
//     console.log('hello');
// }


function executeCallback( callback ){
    callback();
};

// Instead of having the function listed above,
// You can pass in the function as an anonymous function, like this:
executeCallback( function () {
    console.log('Hello');
});

executeCallback( function () {
    console.log('GoodBye');
});