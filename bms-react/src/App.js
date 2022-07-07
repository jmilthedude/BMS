import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/app/Header";
import ListUser from "./components/user/ListUser";
import Footer from "./components/app/Footer";
import UpsertUser from "./components/user/UpsertUser";
import UserCard from "./components/user/UserCard";

function App() {
    return (
        <>
            <Router>
                <div className="container">
                <Header/>
                    <Routes>
                        <Route path={"/"} exact element={<ListUser/>}/>
                        <Route path={"/users"} element={<ListUser/>}/>
                        <Route path={"/upsert-user"} element={<UpsertUser/>}/>
                        <Route path={"/upsert-user/:id"} element={<UpsertUser/>}/>
                    </Routes>
                </div>
            </Router>
        </>

    );
}

export default App;
