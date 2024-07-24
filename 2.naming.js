/**
 *
 */

/** 변수규칙!
 * 라틴문자(0-9, a-z, A-Z), $, _ 만 사용가능
 * 대소문자를 구분함
 * 추천: camelCase (likeThis)
 * 한국어 X
 * 예약어 X
 * 숫자로 시작 X
 * 특수문자 X (예외: $, _)
 * 이모지 X
 * 여러개의 변수를 1,2,3 숫자로 구분 X -> 최대한 의미있게, 구체적인 이름으로 작성
 */

//나쁜예제
let num = 20;

//좋은예제
let myAge = 20;

//나쁜예제
let audio1;
let audio2;

//좋은예제
let backgroundAudio;
let WindAudio;

//꿀팁
let audioBackground;
let audioWind;
