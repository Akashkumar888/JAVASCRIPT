


class Human{
    // properties
    age; // public
    wt=52;
    ht=12;
    #salary=80000; //private
    // behavior

    constructor(newht,newwt){
        this.ht=newht;
        this.wt=newwt;
    }

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
    
    let object=new Human(34,58);
    
console.log(object.ht);
console.log(object.wt);    

    
    