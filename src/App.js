import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './components/signIn/signInComponent';

function App() {
    return (
      <Routes>
        <Route path='/' element={<Navigation/>} >
            <Route index element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
        </Route>
      </Routes>
    )
}

export default App;
