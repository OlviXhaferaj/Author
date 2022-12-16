import './App.css';
import {BrowserRouter, NavLink, Routes,Route} from 'react-router-dom';
import AuthorForm from './Components/AuthorForm';
import AuthorList from './Components/AuthorList';
import AuthorUpdate from './Components/AuthorUpdate';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/new' element={<AuthorForm/>}/>
          <Route path={'/home'} element={<AuthorList />}/>
          <Route path='/author/edit/:id' element={<AuthorUpdate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
