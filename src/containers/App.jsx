import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Bus from '../pages/Bus';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Bus" element={<Bus/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;