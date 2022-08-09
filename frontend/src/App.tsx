import React from "react";
import {Route, Routes} from 'react-router-dom'
import CoinBoard from "./pages/CoinBoard";
import LoginPage from "./security/LoginPage";
import RegisterPage from "./security/RegisterPage";


function App() {


    return (
        <div>

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/board" element={<CoinBoard/>}/>
                <Route path="/register" element={<RegisterPage />} />
            </Routes>

        </div>
    )
}

export default App;
