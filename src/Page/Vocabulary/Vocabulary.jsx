import React from 'react'
import './Vocabulary.css'
// imager
import mochiver3 from '../../imager/MochiMochi ver3.png'
import mochiNotebook from '../../imager/Mochi notebook.png'
import alarm from '../../imager/alarm 1.png'
import vector1 from '../../imager/Vector 9.1.png'
import vector3 from '../../imager/Vector 9.3.png'
import axios from 'axios'

function Vocabulary() {
// const token = ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0'
// const PrivateKey = "M0ch1M0ch1_En_$ecret_k3y"
// const DeviceType = "web"
// const AppVersion = '1.0'
// const offset =20
// async function tesr(){
//   //  await axios.get(`https://mochien-test.akira.edu.vn/v3.0/words/page?PrivateKey=${PrivateKey}&DeviceType=${DeviceType}&AppVersion=${AppVersion}&user_token=${token}&offset=${offset}`)
//    await axios.get(`https://mochien-test.akira.edu.vn/v3.0/words/page?
//     PrivateKey:M0ch1M0ch1_En_$ecret_k3y
//     &DeviceType:'V3.0'
//     &AppVersion:'1.0'
//    &
//    {
//       "user_token": " eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0",
//       "offset": 20,
//       "page_level_1": 1,
//       "page_level_2": 1,
//       "page_level_3": 1,
//       "page_level_4": 1,
//       "page_level_5": 1,
//    }`)
//   .then(data => {
//     console.log(17,data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }
//  tesr()
// var axios = require('axios');
// var data = JSON.stringify({
//   "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0",
//   "offset": 20,
//   "page_level_1": 1,
//   "page_level_2": 1,
//   "page_level_3": 1,
//   "page_level_4": 1,
//   "page_level_5": 1
// });

// var config = {
//   method: 'get',
//   url: 'https://mochien-test.akira.edu.vn/v3.0/words/page/',
//   headers: { 
//     'privateKey': 'M0ch1M0ch1_En_$ecret_k3y', 
//     'Content-Type': 'application/json', 
//     // 'Cookie': 'laravel_session=eyJpdiI6Ik10QUlCNHIzTUtVUFNaZFN6Snc2dmc9PSIsInZhbHVlIjoiQk1BTVM5UnpJTmt1T0lWU0dcL2hjUEhhcmdDaVlaNnVDb0lXQ2x4NGlBcDNteUFoSTF5a0dxUXZEVENyVjJ2XC9lU0E0N0FvcFh2SldZSE5ubzVWMUU1QT09IiwibWFjIjoiNWQxZTQxODhjNGRhNWNmMTRkMmUwMjM1YmM5ZGE1NGIyZDcxZWUwYzZhNWQ1NGI2MTMxYjY1NzZkMTNhZmJlMSJ9'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(65,JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



// axios.get(`https://mochien-test.akira.edu.vn/v3.1/words/dictionary-english?key={M0ch1M0ch1_En_$ecret_k3y}&user_token=${token}`)
// .then(data1 =>{
//   console.log(30,data1)
// })
// .catch(err =>{
//   console.log(err)
// })
  // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0'
  // axios.get(`/v3.1/words/dictionary-english?key=${key}&user_token=${user_token}`,{
  //   headers: {
  //     PrivateKey: '',
  //     DeviceType: '',
  //     AppVersion: ''
  //   }
  // })

//   axios.post('/v3.0/words/update-learn-status',
//   {
//     "user_token": "xxxxx",
//     "words": {"words":[{"word_id":77,"review_status":1},{"word_id":88,"review_status":0}]}
// } ,{
//     headers: {
//       PrivateKey: '',
//       DeviceType: '',
//       AppVersion: ''
//     }
//   })


// var myHeaders = new Headers();
// myHeaders.append("privateKey", "M0ch1M0ch1_En_$ecret_k3y");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Cookie", "laravel_session=eyJpdiI6Ikdha1wvTDFRd1Z5OWpPd1BPZTl3bXpnPT0iLCJ2YWx1ZSI6ImVRWTF1K1h3K203MXRRb1wvclVaekp0YTduT25TcHREUWJXQ2tudDRwXC9iRzZDZGhXUG9WQ213M01lWUpLTkVvWTZXRDEycGhcL2NnNVwvazByMVRQemcydz09IiwibWFjIjoiZmMwM2UwOGU5N2I4OTY0ZTNmMTQxMmZhMTVlNjIzMzEyMDVhYTk1ZDU0ODE5NDFlZjJmMWM2YTBhMjNiNGQwZSJ9");

// var raw = JSON.stringify({
//   "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0",
//   "offset": 20,
//   "page_level_1": 1,
//   "page_level_2": 1,
//   "page_level_3": 1,
//   "page_level_4": 1,
//   "page_level_5": 1
// });

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://mochien-test.akira.edu.vn/v3.0/words/page/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


  var header = {
    privateKey :'M0ch1M0ch1_En_$ecret_k3y',
    DeviceType :'web',
    AppVersion :'1.0'
  }
  var user_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0"
  // var body = JSON.stringify({
  //   "user_token": ,
  //   "offset": 20,
  //   "page_level_1": 1,
  //   "page_level_2": 1,
  //   "page_level_3": 1,
  //   "page_level_4": 1,
  //   "page_level_5": 1
  // });
  //  async function test(){
  //   try {
  //   let test1 = await axios.get(`https://mochien-test.akira.edu.vn/v3.0/words/page?header=${header}&user_token=${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0"}&offset=${20}`)
  //   console.log(test1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //  }
  // var  headers = {
  //   privateKey: 'M0ch1M0ch1_En_$ecret_k3y',
  //   DeviceType: 'wed', 
  //   AppVersion: 1.0,
  // }
  //  async function test(){
  //   try {
  //   let test1 = await axios.get(`https://mochien-test.akira.edu.vn/v3.0/words/page?user_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0&offset=20`, {
  //     headers
  // })
  //   console.log(test1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //  }
  //  test()


  //  &page_level_1=${1}&page_level_2=${1}&page_level_3=${1}&page_level_4=${1}&page_level_5=${1}

//  var cookieParser = require('cookie-parser');
// var get_cookies = function(request) {
//   var cookies = {};
//   request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
//     var parts = cookie.match(/(.*?)=(.*)$/)
//     cookies[ parts[1].trim() ] = (parts[2] || '').trim();
//   });
//   return cookies;
// };
// var axios = require('axios');
// var data = JSON.stringify({
// "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0",
// "offset": 20,
// "page_level_1": 1,
// "page_level_2": 1,
// "page_level_3": 1,
// "page_level_4": 1,
// "page_level_5": 1
// });

// var config = {
// method: 'get',
// url: 'https://mochien-test.akira.edu.vn/v3.0/words/page/',
// headers: { 
//   'privateKey': 'M0ch1M0ch1_En_$ecret_k3y', 
//   'Content-Type': 'application/json', 
//   'Cookie':get_cookies()
// },
// data : data
// };

// axios(config)
// .then(function (response) {
// console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
// console.log(error);
// });


  return (
    <div>

      Vocabulary
      
      </div>
  )
}

export default Vocabulary