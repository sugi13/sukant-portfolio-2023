import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile';
import Contact from './pages/contact';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='profile' element = {<Profile/>}/>
                <Route path='contact' element = {<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;