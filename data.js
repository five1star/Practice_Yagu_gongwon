var DATA = [
  { team: 'SK', user: '문승원', title: '오늘도 빠따들이 일을 안하네요', message:'1', created_at: '2019-01-03 12:30:20' },
  { team: 'LG', user: '박용택', title: '은퇴투어 안하겠습니다', message:'1', created_at: '2019-01-04 18:30:20' },
  { team: '삼성', user: '김동엽', title: '사과 팝니다', message:'1', created_at: '2019-01-05 07:30:20' },
  { team: '두산', user: '허경민', title: 'FA로이드가 좋긴 하네요',  message:'1', created_at: '2015-01-03 12:30:20' },
  { team: 'KIA', user: '선동렬', title: '팔각도 좁혀야...',message:'1', created_at: '2019-01-04 18:30:20' }
];

var randomUser = ['빵', '팔각좁', '야구몰라요', '투머치토커', '나믿가믿', '감자','광고택','콱정권','진해수도방위사령관'];
var randomTitle = [
  '적시타ㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅ',
  '갓살ㅅㅅㅅㅅㅅㅅㅅㅅ',
  '(속보) 양준혁 현역 복귀 선언 ㄷㄷㄷㄷ',
  '오늘 이기면 치킨 10마리 쏩니다.',
  '트레이드 밸런스 어떤가요?',
  '오늘자 등말소',
  '최정 40호 홈런.gif',
  '오늘 존 너무하지 않나요?',
  '허경민 FA 얼마부터 시작할까요'
]

var randomTeam = ['SK','두산','한화','LG','롯데','키움','삼성','KT','KIA','NC']

var randomMessage = [
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1',
  '랜덤 내용1'
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//랜덤 숫자

function generateNewTweet() {
  var yagu = {};
  yagu.team = randomTeam[getRandomInt(0, randomTeam.length)]; 
  yagu.user = randomUser[getRandomInt(0, randomUser.length)];
  yagu.title = randomTitle[getRandomInt(0, randomTitle.length)];
  yagu.message = randomMessage[getRandomInt(0, randomMessage.length)];
  yagu.created_at = new Date().format() // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return yagu;
}
//랜덤 트윗 ->  tweet이라는 빈객체에 새로운 트윗이 만들어진다. 

Number.prototype.padLeft = function() {
  if(this < 10) {
    return '0' + String(this);
  }
  else {
    return String(this);
  }
}
//예를들어 숫자 표현할때. 12:1 => 12:01 로 바꿔주는.

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join('-') + ' ' + [HH, mm, ss].join(':');
  return format;
}
//시간을 알아내는것 자바스립트got month... 이렇게. 데이트에 대한 모양을 만들어준다.