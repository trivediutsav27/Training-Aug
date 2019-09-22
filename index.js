class Org {
    constructor(students){
        this.students = students;
    }
    
    displayStudents(){
        for(let i=0;i<this.students.length;i++){
            console.log(this.students[i].name);
        }
    }
}

class Dept{

    constructor(students){
        this.students = students;
    }
    
    putTheStudentInDept(){
        var itdept = [];
        var csdept = [];
        var students = [itdept,csdept];

        for(let i=0;i<this.students.length;i++){
            if(this.students[i].dept === 'IT'){
                itdept.push(this.students[i]);
            }else {
                csdept.push(this.students[i]);            }
        }

        return students;
    }

}


class Student {
    constructor(id,name,dept,org){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.org = org;
    }

    name(){
        console.log(`${this.name}`);
    }

    id(){
        console.log(`${this.name}`);
    }

    dept(){
        console.log(`${this.name}`);
    }

    org(){
        console.log(`${this.name}`);
    }
}

var s1 = new Student(1,'Jaye','CS','GS');
var s2 = new Student(2,'Utsav','IT','GS');
var s3 = new Student(3,'Sam','CS','GS');

var students = [s1,s2,s3];

var tempDept = new Dept(students);

var returnedStudents = tempDept.putTheStudentInDept();

console.log(returnedStudents);

var tempOrg = new Org(students);

console.log('===================================================');


tempOrg.displayStudents();