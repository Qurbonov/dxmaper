import "./App.css";
import NavMenu from "./components/NavMenu";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ContractsInfo from "./components/ContractsInfo";
import Trades from "./components/TradesTK";
import About from "./components/About";
import DetailsPage from "./components/details/DetailsPage";
import DetailsPage_trades from "./components/details/DetailsPage_trades";
import DetailsPage_TK from "./components/details/DetailsPage_TK";
import Trades_tender from "./components/Trades_tender";
import Trades_ED from "./components/Trades_ED";
import Trades_auction from "./components/Trades_auction";
import Trades_konkurs from "./components/Trades_konkurs";
import logo from "./logo-bottom.png";
import ContractsCoorpInfo from "./components/ContractsCoorpInfo";
import Details_Coorp from "./components/details/Details_Coorp";

function App() {
    return (
        <>
            <NavMenu/>
            <main>
                <div
                    style={{
                        background: "linear-gradient(#F8FBFE, #fff)",
                    }}
                >
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='home' element={<Home/>}/>
                        <Route path='contracts' element={<ContractsInfo/>}/>
                        <Route path='contractsCoorp' element={<ContractsCoorpInfo/>}/>
                        <Route path='trades' element={<Trades/>}>
                            <Route index element={<Trades_tender/>}/>
                            <Route path='tender' element={<Trades_tender/>}/>
                            <Route path='ed' element={<Trades_ED/>}/>
                            <Route path='auction' element={<Trades_auction/>}/>
                            <Route path='konkurs' element={<Trades_konkurs/>}/>
                        </Route>
                        <Route path='about' element={<About/>}/>
                        <Route path='/details/:lot_id' element={<DetailsPage/>}/>
                        <Route path='/details/coorp/:id' element={<Details_Coorp/>}/>
                        <Route
                            path='/details_trade/:lot_id'
                            // eslint-disable-next-line react/jsx-pascal-case
                            element={<DetailsPage_trades/>}
                        />
                        <Route path='/details_tk/:lot_id' element={<DetailsPage_TK/>}/>
                    </Routes>
                </div>
            </main>
        </>
    );
}

export default App;
