import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import ListUser from "./components/ListUser";
import Footer from "./components/Footer";
import UpsertUser from "./components/UpsertUser";

function App() {
    return (
        <div className={"dark-mode"}>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path={"/"} exact element={<ListUser/>}/>
                        <Route path={"/users"} element={<ListUser/>}/>
                        <Route path={"/upsert-user"} element={<UpsertUser/>}/>
                        <Route path={"/upsert-user/:id"} element={<UpsertUser/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
