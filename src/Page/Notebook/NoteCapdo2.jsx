import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './NoteCapdo.css'
import Notebook from './Notebook'
// imager
import Seach from '../../imager/search--v2 2.png'
import Ellipse from '../../imager/Ellipse 9.png'
import vector42 from '../../imager/Vector 4.2.png'
import mochiNotebook from '../../imager/Mochi notebook.png'
import mochihuongdan from '../../imager/mochihuongdan.png'


let arrayRememberStatus = []
let arrayDataAllLevel = []
let arrayDataLevelCurrent = []
let valueInput = ''
let id=1;
function NoteCapdo2() {
  const navigate = useNavigate();
  const [active, setActive] = useState()

  const { capdo } = useParams()
  // useEffect(function () {
  //   let index = capdo.split('NoteCapdo')[1]
  //   setActive(index)
  // }, [capdo])

  // lấy data
  const [NoteData1, setNoteData1] = useState([])
  const [serchData, setSearchData] = useState([])
  useEffect(function () {
    async function test() {
      try {
        let test1 = await axios.get(`https://mochien-test.akira.edu.vn/v3.0/words/page?user_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0&offset=20`, {
          headers: {
            privateKey: 'M0ch1M0ch1_En_$ecret_k3y',
            DeviceType: 'wed',
            AppVersion: 1.0,
          }
        })
        arrayDataAllLevel = [...Object.values(test1.data.data)[0], ...Object.values(test1.data.data)[1], ...Object.values(test1.data.data)[2], ...Object.values(test1.data.data)[3], ...Object.values(test1.data.data)[4]]
        console.log(35, arrayDataAllLevel)

        if (test1.data.code === 1) {
          test1.data.data[2] = test1.data.data[2].filter((val) => {
            return val.review_status == 1;
          })
          arrayDataLevelCurrent = test1.data.data[2]
          setNoteData1(test1.data.data[2])
        } else {
          setNoteData1([])
        }
      } catch (error) {
        console.log(error);
      }
    }
    test()
  }, [])
  //function post trạng thái của từ để hiện thị
  function postStatusWord(id, numbstate) {
    axios.post('https://mochien-test.akira.edu.vn/v3.0/words/update-learn-status',
      {
        user_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0",
        words: { words: [{ word_id: id, review_status: numbstate }] }
      }, {
      headers: {
        privateKey: 'M0ch1M0ch1_En_$ecret_k3y',
        DeviceType: 'wed',
        AppVersion: 1.0
      }
    })
  }
  // console.log(44,NoteData1)
  // const [count,setCount]=useState(0)
  function onof_check(e, value) {
    console.log(52, value.id)
    // postStatusWord (value.id)
    e.target.classList.toggle("activeCheck");

    if (e.target.classList.contains("activeCheck")) {
      arrayRememberStatus.push(value.id)
      console.log(66, arrayRememberStatus)

      console.log('haylaem')
      // postStatusWord (value.id,0)
    } else {
      // console.log(75,arrayRememberStatus.findIndex((val)=>{return val==value.id}))
      arrayRememberStatus.splice(arrayRememberStatus.findIndex((val) => { return val == value.id }), 1)
      // postStatusWord (value.id,1)
      console.log(66, arrayRememberStatus)
    }
  }
  // useEffect(()=>{
  //   let valueInput = document.querySelector('.NoteCapdo1_input').value
  //   console.log(84,valueInput)
  // })
  function handleValueInput(e) {
    
    valueInput = e.target.value
    if (valueInput == '') {
      setNoteData1(arrayDataLevelCurrent)
      document.querySelector('.search-block').classList.remove('active-block')
      document.querySelector('.main-block').classList.remove('hide-block')
    }
    console.log(valueInput)
  }
  function searchWord() {

    // v3.1/words/dictionary-english?key={key}
    async function search() {
      document.querySelector('.search-block').classList.add('active-block')
      document.querySelector('.main-block').classList.add('hide-block')
      try {
        let test1 = await axios.get(`https://mochien-test.akira.edu.vn/v3.1/words/dictionary-english?key=${valueInput}?user_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0&offset=20`, {
          headers: {
            privateKey: 'M0ch1M0ch1_En_$ecret_k3y',
            DeviceType: 'wed',
            AppVersion: 1.0,
          }
        })
        let suggest = test1.data.data.suggests
        console.log(102, test1.data.data.suggests)
        // let dataVisualSearch
        var tessst = []
        for (let i = 0; i < suggest.length; i++) {
          tessst[i] = arrayDataAllLevel.filter((val) => { return val.content.toLowerCase().includes(suggest[i].toLowerCase()) })
          // dataVisualSearch=dataVisualSearch.concat(arrayDataAllLevel.filter((val)=>{return val.content == suggest[i]}))
        }
        tessst = [...tessst.flat(Infinity)]
        // tessst = tessst.map((val)=>{return val})
        console.log(112, tessst)
        setSearchData(tessst)
        // if (test1.data.code === 1) {
        //   test1.data.data[1] = test1.data.data[1].filter((val) => {
        //     return val.review_status == 1;
        //   })
        // setNoteData1(test1.data.data.suggests)
        // } else {
        //   setNoteData1([])
        // }
      } catch (error) {
        console.log(error);
      }
    }
    search()
  }
  useEffect(() => {
    var input = document.getElementById("myInput");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    })

  }, [])

  // function onof_check2(e,value){

  //   arrayRememberStatus.push(value.id)
  //   e.target.classList.toggle("activeCheck");
  //   if(e.target.classList.contains("activeCheck")){
  //     arrayRememberStatus.push(value.id)
  //     console.log('haylaem')
  //     console.log(66,arrayRememberStatus)
  //     // postStatusWord (value.id,0)
  //   }else{
  //     // postStatusWord (value.id,1)
  //     arrayRememberStatus.splice(arrayRememberStatus.findIndex((val)=>{return val==value.id}),1)
  //     console.log(66,arrayRememberStatus)

  //   }

  // }
  // console.log(count)
  function popUpConfirmChangeWordList (i){
    // document.querySelector('.searchNoInfo').classList.add('hide-block')
    document.querySelector('.NoteCapdo1_conter_alert').classList.remove('hide-block')
    document.querySelector('.NoteCapdo1_conter_alert').classList.add('active-block')
    document.querySelector('.main-block').classList.add('hide-block')
    id =i;
    console.log(id)
  }
  function cancelClick(){
    // document.querySelector('.NoteCapdo1_conter_alert').classList.remove('active-block')
    // document.querySelector('.NoteCapdo1_conter_alert').classList.add('hide-block')
    // document.querySelector('.main-block').classList.remove('hide-block')
    navigate(`/Page/Notebook/NoteCapdo${id}`)
  }
  function acceptChange(){
    console.log(189,id)
    for(let i =0 ; i<arrayRememberStatus.length;i++){
      postStatusWord(arrayRememberStatus[i],0)
    }
    if (id == 2) {
      window.location.reload()
    } else {
      navigate(`/Page/Notebook/NoteCapdo${id}`)
    }

  }
  return (
    <div className='container-app'>
      <Notebook arrayRememberStatus={arrayRememberStatus} popUpConfirmChangeWordList={popUpConfirmChangeWordList} active={active}></Notebook>
      <div className="NoteCapdo1_seach">
        <input id='myInput' type="text" className='NoteCapdo1_input' placeholder='Gõ vào đây từ bạn muốn tìm' onChange={(e) => { handleValueInput(e) }} />
        <img id='myBtn' onClick={() => { searchWord() }} src={Seach} alt="img" className='NoteCapdo1_seach_imager' />
     </div>
     <div className='backgound-shadow'>
        <div className='NoteCapdo1_conter_alert hide-block'>
        <img src={mochiNotebook} alt="img" className='NoteCapdo1_nodata_imager' />
        <div className='NoteCapdo1_text'>
          <p>bạn có muốn lưu lại list từ vựng đã thay đổi không ?</p>
          <button className='notebook_modal_button1' onClick={() => { cancelClick() }} >Cancel</button>
          <button className='notebook_modal_button2' onClick={() => { acceptChange() }}>OK</button>
        </div>
      </div>
            </div>
      <div className='main-block'>
        {NoteData1.length > 0 ?
          (
            <div className='NoteCapdo1_conter_data'>
              <table className='NoteCapdo1_table'>
                <thead></thead>
                <tbody>
                  {NoteData1.map((value, index) => {
                    // console.log('value',value)
                    return (
                      <tr key={index} style={{ height: "36px" }} >
                        <td>
                          <div className='Notebook_imgager_wrap' onClick={(e) => { onof_check(e, value, index) }}>
                            {/* <img src={Ellipse} alt='img' className='NoteBook_1_imgager1' onClick={onof_check} /> */}
                            {/* <img onClick={(e)=>{onof_check2(e,value,index)}} src={vector42} alt='img' className='NoteBook_1_imgager2 ' /> */}
                          </div>
                        </td>
                        <td style={{ textAlign: "left", fontWeight: "bold", paddingLeft: "8px" }}>{value.content}</td>
                        <td style={{ textAlign: "left", fontSize: "12px" }}>{value.ja_trans}</td>
                        <td style={{ textAlign: "left" }}>{value.trans}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='NoteCapdo1_conter_nodata'>
              <img src={mochihuongdan} alt="img" className='NoteCapdo1_nodata_imager' />
              <div className='NoteCapdo1_nodata_text'>
                <span>Loading...........</span>
                <div class="loader"></div>
              </div>
            </div>
          )}
      </div>



      <div className='search-block'>
        {serchData.length > 0 ?
          (
            <div className='NoteCapdo1_conter_data'>
              <table className='NoteCapdo1_table'>
                <thead></thead>
                <tbody>
                  {serchData.map((value, index) => {
                    // console.log('value',value)
                    return (
                      <tr key={index} style={{ height: "36px" }} >
                        <td>
                          <div className='Notebook_imgager_wrap' onClick={(e) => { onof_check(e, value, index) }}>
                            {/* <img src={Ellipse} alt='img' className='NoteBook_1_imgager1' onClick={onof_check} /> */}
                            {/* <img onClick={(e)=>{onof_check2(e,value,index)}} src={vector42} alt='img' className='NoteBook_1_imgager2 ' /> */}
                          </div>
                        </td>
                        <td style={{ textAlign: "left", fontWeight: "bold", paddingLeft: "8px" }}>{value.content}</td>
                        <td style={{ textAlign: "left", fontSize: "12px" }}>{value.ja_trans}</td>
                        <td style={{ textAlign: "left" }}>{value.trans}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='NoteCapdo1_conter_nodata'>
              <img src={mochiNotebook} alt="img" className='NoteCapdo1_nodata_imager' />
              <div className='NoteCapdo1_nodata_text'>
                <span>Ú, Không tìm thấy từ <span style={{fontSize: "24px"}}>{valueInput}</span> nào cả ! hu hu !!! </span>
                <p>Bạn search lại nhé !@@</p>
              </div>
            </div>
          )}
          
      </div>


    </div>
  )
}

export default NoteCapdo2