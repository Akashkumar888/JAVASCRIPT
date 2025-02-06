


class Human{
    // properties
    age=21; // public
    wt=52;
    ht=12;
    #salary=80000; //private
    // behavior
    walking(){
        console.log("I am walking");
    }
    running(){
        console.log("I am running");
    }

    get salaryapna(){
    return this.#salary;
    }
    set salarytumhara(val){
    this.#salary=val;
    }

    };
    
    let object=new Human();
    
    console.log(object.age);
    console.log(object.ht);
    console.log(object.wt);
    // Access private salary using getter
console.log(object.salaryapna); // Accessing private salary via getter

// Modify private salary using setter
object.salarytumhara = 90000;
console.log(object.salaryapna); // New salary after using setter


    object.walking();
    object.running();
    

    
    