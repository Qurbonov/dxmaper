import React from "react";
import {Navigate, Routes, Route, Router} from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//history
import {history} from './components/helpers/history';

//pages
// import HomePage from "./components/pages/HomePage"
// import LoginPage from "./components/pages/Login"
// import MainPage from "./components/pages/MainPage";
import NavMenu from "./components/NavMenu";
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
import PersonalC from "./components/cabinet/PersonalC"

function PageRoutes() {
    function hasJWT() {
        let flag = false;
        //check user has JWT token
        localStorage.getItem("token") ? flag = true : flag = false
        return flag
    }

    if (hasJWT()) {
        return (<>
            <NavMenu/>

            <Routes>
                <Route path='/personalCabinet' element={<PersonalC/>}/>
                <Route path='contractsSuccess' element={<ContractsInfo/>}/>

                <Route path='contractsFailed' element={<FailedContractsInfo/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='contractsFailed' element={<FailedContractsInfo/>}/>
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
                <Route path='/details_trade/:lot_id' element={<DetailsPage_trades/>}/>
                <Route path='/details_tk/:lot_id' element={<DetailsPage_TK/>}/>
            </Routes>

        </>)
    } else {
        return (
            <>
                <NavMenu/>

                <Routes>
                    <Route path='/cabinet' element={<Cabinet/>}/>
                    <Route path='contractsSuccess' element={<ContractsInfo/>}/>
                    <Route path='contractsFailed' element={<FailedContractsInfo/>}/>
                    <Route path='/' element={<Home/>}/>

                    <Route path='contractsFailed' element={<FailedContractsInfo/>}/>
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
                    <Route path='/details_trade/:lot_id'

                        // eslint-disable-next-line react/jsx-pascal-case

                           element={<DetailsPage_trades/>}

                    />

                    <Route path='/details_tk/:lot_id' element={<DetailsPage_TK/>}/>
                </Routes>

            </>
        )
    }

    // return (
    //     <>
    //         {/*<Router history={history}>*/}
    //         <NavMenu/>
    //         <Routes>
    //             {console.log(hasJWT())}
    //             {/*hasJWT() ?*/}
    //             <Route path='/' element={Home}/>
    //             {/*{:}*/}
    //             <Route
    //                 path="/cabinet"
    //                 element={Cabinet}
    //             />
    //             <Route
    //                 exact
    //                 path="/"
    //                 element={Home}
    //             />
    //             {/*<RouteGuard*/}
    //             {/*    exact*/}
    //             {/*    path="/about"*/}
    //             {/*    element={About}*/}
    //             />
    //
    //             <Route path='/' element={<Home/>}/>
    //
    //             {/*        <Route path='contractsFailed' element={<FailedContractsInfo/>}/>*/}
    //             {/*        <Route path='contractsCoorp' element={<ContractsCoorpInfo/>}/>*/}
    //             {/*        <Route path='trades' element={<Trades/>}>*/}
    //             {/*            <Route index element={<Trades_tender/>}/>*/}
    //             {/*            <Route path='tender' element={<Trades_tender/>}/>*/}
    //
    //             {/*            <Route path='ed' element={<Trades_ED/>}/>*/}
    //
    //             {/*            <Route path='auction' element={<Trades_auction/>}/>*/}
    //
    //             {/*            <Route path='konkurs' element={<Trades_konkurs/>}/>*/}
    //
    //             {/*        </Route>*/}
    //
    //             {/*        <Route path='about' element={<About/>}/>*/}
    //
    //             {/*        <Route path='/details/:lot_id' element={<DetailsPage/>}/>*/}
    //
    //             {/*        <Route path='/details/coorp/:id' element={<Details_Coorp/>}/>*/}
    //             {/*        <Route path='/details_trade/:lot_id'*/}
    //
    //             {/*            // eslint-disable-next-line react/jsx-pascal-case*/}
    //
    //             {/*               element={<DetailsPage_trades/>}*/}
    //
    //             {/*        />*/}
    //
    //             {/*        <Route path='/details_tk/:lot_id' element={<DetailsPage_TK/>}/>*/}
    //
    //             {/*        <Route path='/cabinet' element={<Cabinet/>}/>*/}
    //
    //
    //             {/*<Navigate to="/"/>*/}
    //         </Routes>
    //         {/*</Router>*/}
    //     </>
    // );
}

export default PageRoutes
