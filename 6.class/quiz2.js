// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자.
// 직원들의 정보 : 이름, 부서이름, 한달근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

//공통지정요소 : 이름,부서이름,
//다른점은 한달근무시간,한달월급

class Staff {
  constructor(name, team, time, pay){
    this.name = name;
    this.team = team;
    this.time = time;
    this.pay = pay;
  }
  calculatePay = () => {
    return this.time * this.pay;
  }
}

class FullTimeStaff extends Staff{
  static #PAY = 10000; //이 값은 클래스 내부에서만 사용하므로 외부에서 참조할 필요도 다른값으로 변경되어도 안되니 static private로 설정해서 외부에서 값을보지도, 수정하지도 못하게 캡슐화 해주는 게 좋다.
  constructor(name, team, time){
    super(name, team, time, FullTimeStaff.#PAY);
  }
}
class PartTimeStaff extends Staff{
  static #PAY = 8000;
  constructor(name, team, time){
    super(name, team, time, PartTimeStaff.#PAY);
  }
}


const fullTimeStaff = new FullTimeStaff('이정은', 'A', 10);
const partTimeStaff = new PartTimeStaff('윤정규', 'B', 5);

const staff = new Staff('이정은', '프웹팀', 10);
console.log(staff) // Staff { pay: [Function: pay], name: '이정은', team: '프웹팀', time: '10시간' }

const jeongeun = new FullTimeStaff('이정은', 'A', 10);
const jeongyu = new PartTimeStaff('윤정규', 'B', 5);

console.log(jeongeun.calculatePay()); // 100000
console.log(jeongyu.calculatePay()) // 40000