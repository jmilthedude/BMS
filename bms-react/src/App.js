import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/ListUserComponent";
import FooterComponent from "./components/FooterComponent";

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
