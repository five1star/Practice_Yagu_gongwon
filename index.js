// console.log(DATA);
// console.log(generateNewTweet());

const ulList = document.querySelector('.message_list');
const beforeButton = document.querySelector('.before');
const refreshButton = document.querySelector('.refresh');
const teamButtonBox = document.querySelector('.teamButton_box')
const teamButton = teamButtonBox.querySelectorAll('.teamButton');

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
            removeAll();//리스트를 모두 지운다.
console.log(DATA);
            let filterdDATA = DATA.filter(function(el){
            if ( DATA[el].team === eachButton.id ){
              return true;
              }
            });
        })
    })
}

        // // const renderFilteredDATA = function (targetName) {
        // //     const ul = document.createElement('ul');
        // //     ul.id = 'tweetWrapper';
          
        // //     const tweets = DATA.filter(function (tweet) {
        // //       return tweet.user === targetName;
        // //     }).reduce(tweetListReducer, ul);
          
        // //     state.isFilteredPage = true;
        // //     mainTweetList.append(tweets);
        // //   };

        // for(i=TEAM_DATA.length-1; i>=0 ;i--){
        //     let userNameI = TEAM_DATA[i].user;
        //     let userTitleI = TEAM_DATA[i].title;
        //     let userTimeI = TEAM_DATA[i].created_at;
            
        //     template();

        //     let userName = ulList.querySelector('.userName');
        //     let userTitle = ulList.querySelector('.userTitle');
        //     let userTime = ulList.querySelector('.userTime');
        
        //   userName.textContent = userNameI;
        //   userTitle.textContent = userTitleI;
        //   userTime.textContent = userTimeI;
        // }
        // return el;
        // }) 
   




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