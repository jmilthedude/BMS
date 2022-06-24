import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/ListUserComponent";
import FooterComponent from "./components/FooterComponent";
import CreateUserComponent from "./components/CreateUserComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path={"/"} exact element={<ListUserComponent/>}/>
                        <Route path={"/users"} element={<ListUserComponent/>}/>
                        <Route path={"/create-user"} element={<CreateUserComponent/>}/>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>

    );
}

export default App;
