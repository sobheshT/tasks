class Parent{
    message(){
        console.log("Parent message");
    }
    static getMessage(){
        console.log('Static Get Message');
    }
}
class child extends Parent{
    message(){
        console.log('Child Message');
    }

}
const obj= new child();
//instance method
obj.message();
//static method
child.getMessage();