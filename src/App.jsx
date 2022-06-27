import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Page/views/Header/Header';
import Login from './Page/views/SignIn/Login'
import Singin from './Page/views/SignIn/Singin'
import Community from './Page/views/Version/version'
import Notebook from './Page/views/Notebook/Notebook'
import Review from './Page/views/Review/Review'
import Vocabulary from './Page/views/Vocabulary/Vocabulary'
import NoteCapdo1 from './Page/views/Notebook/Level1Page'
import NoteCapdo2 from './Page/views/Notebook/Level2Page'
import NoteCapdo3 from './Page/views/Notebook/Level3Page'
import NoteCapdo4 from './Page/views/Notebook/Level4Page'
import NoteCapdo5 from './Page/views/Notebook/Level5Page'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          {/* SIGN-IN */}
          <Route path='/User/Login' element={<Login></Login>} />
          <Route path='/User/Singin' element={<Singin></Singin>} />
          {/* PAGES */}
          <Route path='/Page/Community/Community' element={<Community></Community>} />
          <Route path='/Page/Review/Review' element={<Review></Review>} />
          <Route path='/Page/Vocabulary/Vocabulary' element={<Vocabulary></Vocabulary>} />
          {/* LEVEL-PAGES */}
          <Route>
            <Route path='/Page/Notebook/NoteCapdo1' element={<NoteCapdo1></NoteCapdo1>} />
            <Route path='/Page/Notebook/NoteCapdo2' element={<NoteCapdo2></NoteCapdo2>} />
            <Route path='/Page/Notebook/NoteCapdo3' element={<NoteCapdo3></NoteCapdo3>} />
            <Route path='/Page/Notebook/NoteCapdo4' element={<NoteCapdo4></NoteCapdo4>} />
            <Route path='/Page/Notebook/NoteCapdo5' element={<NoteCapdo5></NoteCapdo5>} />
            <Route path='/Page/Notebook/Notebook' element={<Notebook></Notebook>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;