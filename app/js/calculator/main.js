$( function(){

    class Animal {
        constructor(name) {
            this.name = name;
        }
        run() {
            console.log( 'I`m runing' );
        }
        speak() {
            console.log(this.name + ' makes a noise.');
        }
    }

    class Dog extends Animal {

        speak() {
            console.log(this.name + ' barks.');
        }
    }

    let dog = new Dog( 'Ralph' );
    let animal = new Animal( 'Some' );

    animal.speak();
    dog.speak();
    dog.run();
    console.log( dog instanceof Animal);
    console.log( animal );
    console.log( dog );

} );
