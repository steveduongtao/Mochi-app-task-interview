import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// header
import Header from './Header/Header';
// user
import Login from './User/Login'
import Singin from './User/Singin'
// page
import Community from './Page/Community/Community'
import Notebook from './Page/Notebook/Notebook'
import Review from './Page/Review/Review'
import Vocabulary from './Page/Vocabulary/Vocabulary'
// note theo cấp độ
import NoteCapdo1 from './Page/Notebook/NoteCapdo1'
import NoteCapdo2 from './Page/Notebook/NoteCapdo2'
import NoteCapdo3 from './Page/Notebook/NoteCapdo3'
import NoteCapdo4 from './Page/Notebook/NoteCapdo4'
import NoteCapdo5 from './Page/Notebook/NoteCapdo5'
import { useState } from 'react';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        
        {/* user */}
       <Route path='/User/Login' element={<Login></Login>}/>
       <Route path='/User/Singin' element={<Singin></Singin>}/>

       {/* page */}
       <Route path='/Page/Community/Community' element={<Community></Community>}/>
       <Route path='/Page/Review/Review' element={<Review></Review>}/>
       <Route path='/Page/Vocabulary/Vocabulary' element={<Vocabulary></Vocabulary>}/>

       {/* notebook theo các cấp độ */}
       <Route>
          <Route path='/Page/Notebook/NoteCapdo1' element={<NoteCapdo1></NoteCapdo1>}/>
          <Route path='/Page/Notebook/NoteCapdo2' element={<NoteCapdo2></NoteCapdo2>}/>
          <Route path='/Page/Notebook/NoteCapdo3' element={<NoteCapdo3></NoteCapdo3>}/>
          <Route path='/Page/Notebook/NoteCapdo4' element={<NoteCapdo4></NoteCapdo4>}/>
          <Route path='/Page/Notebook/NoteCapdo5' element={<NoteCapdo5></NoteCapdo5>}/>
          <Route path='/Page/Notebook/Notebook' element={<Notebook></Notebook>}/>
       </Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
