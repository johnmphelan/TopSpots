import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leixlip from "./Pages/Leixlip";
import Killiney from "./Pages/Killiney";
import Dublin from "./Pages/Dublin";
import Home from "./Pages/Home";
import AboutPage from "./Components/AboutPage";
import { Layout } from "antd";
import "antd/dist/antd.css";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <div className="ant-layout">
        <Nav>Nav 2 baby Another baby bayb baby</Nav>
        <Content style={{ padding: "0 50px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/leixlip" exact element={<Leixlip />} />
            <Route path="/killiney" exact element={<Killiney />} />
            <Route path="/dublin" exact element={<Dublin />} /> 
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Content>
      </div>
    </Router>
  );
}

export default App;