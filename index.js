// console.log(DATA);
// console.log(generateNewTweet());

const ulList = document.querySelector('.message_list');
const beforeButton = document.querySelector('.before');
const refreshButton = document.querySelector('.refresh');
const teamButtonBox = document.querySelector('.teamButton_box');
const teamButton = teamButtonBox.querySelectorAll('.teamButton');

const loginButton = document.querySelector('.login_button');
const userID = document.querySelector('.idBox');
const userPassword = document.querySelector('.password');
const loginBox = document.querySelector('.login_box');
const loginChild = loginBox.querySelectorAll('.loginChild');
const upLoadButton = document.querySelector('.upLoad');
const newTitle = document.querySelector('.witeTitle');
const newMessage = document.querySelector('.writemessage');
const selectTeam = document.querySelector('.teamSelect');



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
  

  




}

function template(){
    console.log('template() Start');
    
    let li = document.createElement('li');
    li.className="message_item";
    let userName = document.createElement('div');
    userName.className="userName";
    let userTitle = document.createElement('div');
    userTitle.className="userTitle";
    let userTime = document.createElement('div');
    userTime.className="userTime";

    li.append(userName,userTitle,userTime);
    ulList.prepend(li);
  
  } //template 생성하는 func

function removeAll(){
    let allLi = ulList.querySelectorAll('.message_item');
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

      template();
      let userName = ulList.querySelector('.userName');
      let userTitle = ulList.querySelector('.userTitle');
      let userTime = ulList.querySelector('.userTime');
  
    userName.textContent = userNameI;
    userTitle.textContent = userTitleI;
    userTime.textContent = userTimeI;
}
console.log('모든 정보를 불러왔습니다.');
} //DATA의 모든 property에 대해서 list를 만든다.

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
      
            template();

            let userName = ulList.querySelector('.userName');
            let userTitle = ulList.querySelector('.userTitle');
            let userTime = ulList.querySelector('.userTime');
        
          userName.textContent = userNameI;
          userTitle.textContent = userTitleI;
          userTime.textContent = userTimeI;
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

  };



upLoadButton.addEventListener('click',function(){
  if(userID.value === ''){
    alert('로그인을 완료해주세요');

  } else if (newTitle.value ==='' || newMessage.value ==='' ){
    alert('내용을 입력해주세요');
   
  } else newUpLoad();
});




loginButton.addEventListener('click',function(){
  if(userID.value === '' || userPassword.value ===''){
    alert('내용을 입력해주세요!');
  } else Login()


})

  refreshButton.addEventListener('click',function(){
    const ramdomMessage = generateNewTweet()
  DATA.unshift(ramdomMessage);
  removeAll();
  reLoad();

   })

  beforeButton.addEventListener('click',function(){
      removeAll();
      reLoad();
  })

  document.addEventListener('DOMContentLoaded', function(){
    
    console.log('화면창이 열렸습니다. 기초 데이터를 불러옵니다.');
    reLoad();
    teamSearch();
  
  }); // 페이지가 실행되면, DATA 초기값을 각자 tweetUPload 시킨다.