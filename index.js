/* const's */
const ulList = document.querySelector('.message_list');
const beforeButton = document.querySelector('.before');
const refreshButton = document.querySelector('.refresh');
const teamButtonBox = document.querySelector('.teamButton_box');
const teamButton = teamButtonBox.querySelectorAll('.teamButton');
const teamIcon = document.querySelector('.teamIcon');
const loginButton = document.querySelector('.login_button');
const userID = document.querySelector('.idBox');
const userPassword = document.querySelector('.password');
const loginBox = document.querySelector('.login_box');
const loginChild = loginBox.querySelectorAll('.loginChild');
const upLoadButton = document.querySelector('.upLoad');
const newTitle = document.querySelector('.witeTitle');
const newMessage = document.querySelector('.writemessage');
const selectTeam = document.querySelector('.teamSelect');
const searchButton = document.querySelector('.searchButton');
const searchText = document.querySelector('.search_text');
const searchOption = document.querySelector('.selectOption');


function newUpLoad(){
    DATA.unshift({
      user: userID.value,
      title: newTitle.value,
      message: newMessage.value,
      created_at: new Date().format(),
      team: selectTeam.value,
    });
    newTitle.value = '';
    newMessage.value = ''; 
    removeAll();
    reLoad(); 
} //데이터를 DATA에 unshift 후 remove와 reLoad 작동
function template(){
    console.log('template() Start');
    
    let li = document.createElement('li');
    li.className="message_item";
    let userName = document.createElement('div');
    userName.className="userName";
    let userTitle = document.createElement('div');
    userTitle.className="userTitle";
    userTitle.addEventListener('click',function(){
      viewMessage();
    });
    let userTime = document.createElement('div');
    userTime.className="userTime";
    let userMessage = document.createElement('div');
    userMessage.className="userMessage";

    li.append(userName,userTitle,userTime,userMessage);
    ulList.prepend(li);

  
  } //template 생성하는 func
function removeAll(){
    let allLi = ulList.querySelectorAll('li');
    allLi.forEach(function(el){
        el.remove();
    console.log('모두 지웠습니다.')
    })
} //리스트를 모두 지우는 func
function reLoad(){
    for(i=DATA.length-1; i>=0 ;i--){
        let userNameI = DATA[i].user;
        let userTitleI = DATA[i].title;
        let userTimeI = DATA[i].created_at;
        let userMessageI = DATA[i].message;

      template();
      let userName = ulList.querySelector('.userName');
      let userTitle = ulList.querySelector('.userTitle');
      let userTime = ulList.querySelector('.userTime');
      let userMessage = ulList.querySelector('.userMessage');
  
    userName.textContent = userNameI;
    userTitle.textContent = userTitleI;
    userTime.textContent = userTimeI;
    userMessage.textContent = userMessageI;

}
console.log('모든 정보를 불러왔습니다.');
} //DATA의 모든 property에 대해서 li를 만든다.
function teamSearch(){
    teamButton.forEach(function(eachButton){
        eachButton.addEventListener('click',function(){

          let FILTERED = DATA.filter(function(el){
            
            if (el.team === eachButton.id){
              return true;
            } 
            });

            removeAll();

            for(i=FILTERED.length-1; i>=0 ;i--){
              let userNameI = FILTERED[i].user;
              let userTitleI = FILTERED[i].title;
              let userTimeI = FILTERED[i].created_at;
              let userMessageI = DATA[i].message;

      
            template();

            let userName = ulList.querySelector('.userName');
            let userTitle = ulList.querySelector('.userTitle');
            let userTime = ulList.querySelector('.userTime');
            let userMessage = ulList.querySelector('.userMessage');
        
          userName.textContent = userNameI;
          userTitle.textContent = userTitleI;
          userTime.textContent = userTimeI;
          userMessage.textContent = userMessageI;
      }
      console.log(`모든 ${eachButton.id}팀의 글을 불러왔습니다.`);
       //DATA의 모든 property에 대해서 list를 만든다.            
    });
  });
}; //버튼마다 해당 팀의 글만 불러온다.      
function Login(){
  loginChild.forEach(function(el){
    el.remove();
  })

  let welcomeYou = document.createElement('div');
    welcomeYou.className="welcomeYou";
    welcomeYou.textContent =`안녕하세요 ${userID.value}님!`

    loginBox.append(welcomeYou);

};//아이디와 패스워드를 입력하면 로그인 실행
function viewMessage(){
      const thatInfo = event.path[1];
      const thatUser = thatInfo.querySelector('.userName').textContent;
      const thatTitle = thatInfo.querySelector('.userTitle').textContent;
      const thatTime = thatInfo.querySelector('.userTime').textContent;
      const thatMessage = thatInfo.querySelector('.userMessage').textContent;
      removeAll();
      console.log('모두 지웠음');
      console.log(thatUser,thatTitle,thatTime,thatMessage);
    
  let li = document.createElement('li');
  li.className="eachMessage_box";
  let eachInfo = document.createElement('div');
  eachInfo.className="eachInfo";
  let eachMessage = document.createElement('div');
  eachMessage.className="eachMessage";
  let eachName = document.createElement('div');
  eachName.className="eachName";
  let eachTitle = document.createElement('div');
  eachTitle.className="eachTitle";
  let eachTime = document.createElement('div');
  eachTime.className="eachTime";

  li.append(eachInfo,eachMessage)
  eachInfo.append(eachName,eachTitle,eachTime);
  ulList.prepend(li);
  eachName.textContent = thatUser;
  eachTitle.textContent = thatTitle;
  eachTime.textContent = thatTime;
  eachMessage.textContent = thatMessage;

}// 제목을 클릭하면 내용이 출력


/* EventListner's */
selectTeam.addEventListener('mouseleave',function(){
  let TeamValue = selectTeam.value;
  let iconTeam = document.querySelector('.teamIcon');
  iconTeam.classList.remove(iconTeam.classList[1]);
  iconTeam.classList.add(TeamValue);
  console.log(iconTeam.classList);
})//팀마다 글을 필터링 
upLoadButton.addEventListener('click',function(){
  if(userID.value === ''){
    alert('로그인을 완료해주세요');

  } else if (newTitle.value ==='' || newMessage.value ==='' ){
    alert('내용을 입력해주세요');
   
  } else newUpLoad();
});// 로그인 정보를 만족한 후, 글을 입력하면 newUpLoad()실행
searchButton.addEventListener('click',function(){
  
  let seachValue = searchText.value;
  let optionValue = searchOption.value; 

  removeAll();


  let FILTERED = DATA.filter(function(el){

    if (el[optionValue].includes(seachValue)){
      console.log(el[optionValue],seachValue);
      return true;
      
    } 
    });

    for(i=FILTERED.length-1; i>=0 ;i--){
      let userNameI = FILTERED[i].user;
      let userTitleI = FILTERED[i].title;
      let userTimeI = FILTERED[i].created_at;
      let userMessageI = FILTERED[i].message;

    template();

    let userName = ulList.querySelector('.userName');
            let userTitle = ulList.querySelector('.userTitle');
            let userTime = ulList.querySelector('.userTime');
            let userMessage = ulList.querySelector('.userMessage');
        
          userName.textContent = userNameI;
          userTitle.textContent = userTitleI;
          userTime.textContent = userTimeI;
          userMessage.textContent = userMessageI;
      
}


  
  
  


});// 검색 기능
loginButton.addEventListener('click',function(){
  if(userID.value === '' || userPassword.value ===''){
    alert('내용을 입력해주세요!');
  } else Login()
});
refreshButton.addEventListener('click',function(){
    const ramdomMessage = generateNewTweet()
  DATA.unshift(ramdomMessage);
  removeAll();
  reLoad();

}); //리프레시 기능(랜덤트윗)
beforeButton.addEventListener('click',function(){
      removeAll();
      reLoad();
}); //remove와 reLoad 실행
document.addEventListener('DOMContentLoaded', function(){
  console.log('화면창이 열렸습니다. 기초 데이터를 불러옵니다.');
  reLoad();
  teamSearch();
}); // 페이지가 실행되면, DATA 초기값을 각자 tweetUPload 시킨다.


