var DATA = [
  { team: 'SK', user: '문승원', title: '오늘도 빠따들이 일을 안하네요', message:'솔직히 빠따들 한대씩 때려도 무죄 아닌가요?', created_at: '2019-01-03 12:30:20' },
  { team: 'LG', user: '박용택', title: '은퇴투어 안하겠습니다', message:'응원가 다시 만들어주세요', created_at: '2019-01-04 18:30:20' },
  { team: '삼성', user: '김동엽', title: '사과 팝니다', message:'킹동엽이라 불러주세요', created_at: '2019-01-05 07:30:20' },
  { team: '두산', user: '허경민', title: 'FA로이드가 좋긴 하네요',  message:'얼마에 팔릴까요?', created_at: '2015-01-03 12:30:20' },
  { team: 'KIA', user: '선동렬', title: '팔각도 좁혀야...',message:'이승엽 와도 자리 없어', created_at: '2019-01-04 18:30:20' }
];

var randomUser = ['빵', '구창모','양현종','팔각좁', '야구몰라요', '투머치토커', '나믿가믿', '감자','광고택','콱정권','진해수도방위사령관'];
var randomTitle = [
  '적시타ㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅ',
  '갓살ㅅㅅㅅㅅㅅㅅㅅㅅ',
  '당신은 살라살라빔에 맞았습니다ㅅㄹㅅㄹ',
  '대니얼킴 유튜브에 켈리 인터뷰 동영상 떴네요',
  '비더레 퇴근',
  '김창평 WRC 140 돌파ㄷㄷㄷ',
  '양준혁 현역 복귀 선언 ㄷㄷㄷㄷ',
  '오늘 이기면 치킨 10마리 쏩니다.',
  '트레이드 밸런스 어떤가요?',
  '오늘자 등말소',
  '최정 40호 홈런.gif',
  '오늘 존 너무하지 않나요?',
  '허경민 FA 얼마부터 시작할까요'
]

var randomTeam = ['SK','두산','한화','LG','롯데','키움','삼성','KT','KIA','NC']

var randomMessage = [
  '야구장까지 얼마나 걸리나요?',
  '양현종 7이닝 8k',
  '이형종 복귀했네요',
  '당신은 살라살라 빔에 맞았습니다.',
  '69억 꺼억',
  '정우람 트레이드 가능한가요?',
  '요즘 선수들 싸인 잘 해주네요',
  '치킨 시켰습니다',
  '심판 레전드네요'
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