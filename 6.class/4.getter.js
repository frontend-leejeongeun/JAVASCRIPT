// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName(){
    return `${this.lastName} ${this.firstName}`
  }

  set fullName(value){
    console.log('set',value);
  }
}

const student = new Student('수지','김');
console.log(student); // Student { firstName: '수지', lastName: '김' }
student.firstName = '안나';

console.log(student); // Student { firstName: '안나', lastName: '김' }
console.log(student.firstName); // 안나
console.log(student.fullName); // 김 안나
student.fullName = '김맴뚱' // set 김맴뚱
console.log(student.fullName); // 김 안나