class org {
    constructor(name){
        this.name = name;
    }
    student(){
        console.log(`${this.name}`);
    }

    dept(){
        console.log(`${this.name}`);
    }
}
class dept extends org{
    constructor(name){
        this.name = name;
    }
    maths(){
        console.log(`${this.name}`);
    }

    bio(){
        console.log(`${this.name}`);
    }
}


class student extends dept {
    constructor(name){
        this.name = name;
    }

    name(){
        console.log(`${this.name}`);
    }

    rollno(){
        console.log(`${this.name}`);
    }

    dept(){
        console.log(`${this.name}`);
    }

    org(){
        console.log(`${this.name}`);
    }
}


