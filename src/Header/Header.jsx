import React from 'react'
import './Header.css'
// imager
import header_logo from '../imager/Logo_orange 2.png'
import header_nootebook from '../imager/notebook.png'
import header_vocabulary from '../imager/vocabulary.png'
import header_community from '../imager/community.png'
import header_vector from '../imager/Vector.png'
import userLogined from '../imager/userLogined.png'
import down from '../imager/Down.png'
import { useNavigate, useParams } from 'react-router-dom'


function Header() {
      const navigate = useNavigate()
      function review(){
            navigate('/Page/Review/Review')
      }
      function vocabulary(){
            navigate('/Page/Vocabulary/Vocabulary')            
      }
      function notebook(){
            navigate('/Page/Notebook/Notebook')
      }
      function comunity(){
            navigate('/Page/Community/Community')
      }
  return (
    <div className='Header_'>     
      <div className="header_logo_">
            <img src={header_logo} alt="img" className='header_logo' />
      </div>
      <div className="header_conter">
            <div className="header_review" onClick={review}>
                  <div className="bieudo">
                        <div className="bieudo_vector">
                              <img src={header_vector} alt='img' className='bieudo_vector_' />
                        </div>
                        <div className="bieudo_cot">
                              <div className="bieudo_cot1">
                                    <div className="bieudo_cot1_left"></div>
                                    <div className="bieudo_cot1_right"></div>
                              </div>
                              <div className="bieudo_cot2">
                                    <div className="bieudo_cot2_left"></div>
                                    <div className="biedo_cot2_right"></div>
                              </div>
                              <div className="bieudo_cot3">
                                     <div className="bieudo_cot3_left"></div>
                                    <div className="bieudo_cot3_right"></div>
                              </div>
                              <div className="bieudo_cot4">
                                    <div className="bieudo_cot4_left"></div>
                                    <div className="bieudo_cot4_right"></div>
                              </div>
                        </div>
                  </div>
                  <span className='bieudo_cot_text'>Ôn tập</span>
            </div>
            <div className="header_vocabulary_" onClick={vocabulary}>
                  <img src={header_vocabulary} alt="img" className='header_vocabulary'/>
                  <span className='vocabulary_text'>Học từ mới</span>
            </div>
           
            <div className="header_notebook_" onClick={notebook}>
                 <img src={header_nootebook} alt="img" className='header_notebook'/>
                 <span className='notebook_text'>Sổ tay</span>
            </div>
            <div className="header_community_" onClick={comunity}>
                  <img src={header_community} alt="img" className='header_community'/>
                  <span className='community_text'>Cộng đồng</span>
           </div>
           
      </div>     
         <div className="header_user_page">
            <span className='user_page_username'>Trịnh Quỳnh...</span>
            <img src={userLogined} alt='img' className='user_page_imager_user' />
            <img src={down} alt='img' className='user_page_imager_down' />
           </div> 
      </div>
  )
}

export default Header