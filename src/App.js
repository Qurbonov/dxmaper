import "./App.css";
import NavMenu from "./components/NavMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContractsInfo from "./components/ContractsInfo";
import Trades from "./components/Trades";
import About from "./components/About";
import DetailsPage from "./components/details/DetailsPage";

function App() {
  return (
    <>
      <NavMenu />
      <div
        style={{
          // backgroundImage: `url("https://loveshayariimages.in/wp-content/uploads/2022/05/Beautiful-White-Background-Images-pics-for-download-4.jpg")`,
          // background: `url('https://source.unsplash.com/twukN12EN7c/1920x1080') no-repeat center center fixed`,  backgroundSize: "cover"
          // background: `url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?w=2000') no-repeat center center fixed`,
          // backgroundSize: "cover",
          // backgroundRepeat: "repeat-x",
          background: "linear-gradient(#F8FBFE, #fff)",
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contracts' element={<ContractsInfo />} />
          <Route path='trades' element={<Trades />} />
          <Route path='about' element={<About />} />
          <Route path='/details/:lot_id' element={<DetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
