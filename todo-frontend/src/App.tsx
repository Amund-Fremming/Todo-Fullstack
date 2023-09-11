import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import CreateUser from "./components/CreateUser";

export const App = () => {

    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(true);

    return(
        <Router>
            <Layout userLoggedIn={userLoggedIn}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} />
                    <Route path="/todo" element={<TodoPage/>} />
                    <Route path="/create-user" element={<CreateUser/>} />
                </Routes>
            </Layout>
        </Router>
    );
}