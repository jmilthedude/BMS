import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListUserComponent from "./components/ListUserComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path={"/"} element={<ListUserComponent/>}/>
                        <Route path={"/users"} element={<ListUserComponent/>}/>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>

    );
}

export default App;
