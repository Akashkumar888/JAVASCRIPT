

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
};

let object=new Human();

console.log(object.age);
console.log(object.ht);
console.log(object.wt);

object.walking();
object.running();

console.log(object.#salary);


