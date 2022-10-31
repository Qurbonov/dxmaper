import "./App.css";
import React, {useState} from 'react';
import NavMenu from "./components/NavMenu";
import {Router, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import ContractsInfo from "./components/pages/ContractsInfo";
import Trades from "./components/pages/TradesTK";
import About from "./components/pages/About";
import DetailsPage from "./components/pages/details/DetailsPage";
import DetailsPage_trades from "./components/pages/details/DetailsPage_trades";
import DetailsPage_TK from "./components/pages/details/DetailsPage_TK";
import Trades_tender from "./components/pages/Trades_tender";
import Trades_ED from "./components/pages/Trades_ED";
import Trades_auction from "./components/pages/Trades_auction";
import Trades_konkurs from "./components/pages/Trades_konkurs";
import logo from "./logo-bottom.png";
import ContractsCoorpInfo from "./components/pages/ContractsCoorpInfo";
import Details_Coorp from "./components/pages/details/Details_Coorp";
import FailedContractsInfo from "./components/pages/FailedContractsInfo";

import Cabinet from "./components/cabinet/Cabinet";

import PageRoutes from './pageRoutes'

import {setAuthToken} from './components/helpers/setAuthToken'

function App() {

    //check jwt token
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }

    return (
        <div className="pp">
            <PageRoutes/>
        </div>
    );
}

// return (
//     <>
//         {/*<NavMenu/>*/}
{/*<main>*/
}
{/*    <div*/
}
{/*        style={{*/
}
{/*            background: "linear-gradient(#F8FBFE, #fff)"*/
}
{/*        }}*/
}
{/*    >*/
}
{/*        <Router>*/
}
{/*            <Route path='/' element={<Home/>}/>*/
}
{/*            <Route path='contractsSuccess' element={<ContractsInfo/>}/>*/
}

{/*            <Route path='contractsFailed' element={<FailedContractsInfo/>}/>*/
}
{/*            <Route path='contractsCoorp' element={<ContractsCoorpInfo/>}/>*/
}
{/*            <Route path='trades' element={<Trades/>}>*/
}
{/*                <Route index element={<Trades_tender/>}/>*/
}
{/*                <Route path='tender' element={<Trades_tender/>}/>*/
}
{/*                <Route path='ed' element={<Trades_ED/>}/>*/
}
{/*                <Route path='auction' element={<Trades_auction/>}/>*/
}
{/*                <Route path='konkurs' element={<Trades_konkurs/>}/>*/
}
{/*            </Route>*/
}
{/*            <Route path='about' element={<About/>}/>*/
}
{/*            <Route path='/details/:lot_id' element={<DetailsPage/>}/>*/
}
{/*            <Route path='/details/coorp/:id' element={<Details_Coorp/>}/>*/
}
{/*            <Route*/
}
{/*                path='/details_trade/:lot_id'*/
}
{/*                // eslint-disable-next-line react/jsx-pascal-case*/
}
{/*                element={<DetailsPage_trades/>}*/
}
{/*            />*/
}
{/*            <Route path='/details_tk/:lot_id' element={<DetailsPage_TK/>}/>*/
}
{/*            <Route path='/cabinet' element={<Cabinet/>}/>*/
}
{/*        </Router>*/
}
{/*    </div>*/
}
{/*</main>*/
}
//     </>
// );
// }

export default App;
