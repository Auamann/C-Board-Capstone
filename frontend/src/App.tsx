import React from "react";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import CoinBoard from "./pages/CoinBoard";


function App() {


    return (
        <div>

            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/board" element={<CoinBoard/>}/>
            </Routes>

        </div>
    )
}

export default App;
