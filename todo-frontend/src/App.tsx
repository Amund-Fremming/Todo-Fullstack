import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import SignupPage from "./pages/SignupPage/SignupPage";

export const App = () => {

    // Needs to check session for user, not just this
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

    return(
        <Router>
            <Layout userLoggedIn={userLoggedIn}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/todo" element={<TodoPage/>} />
                    <Route path="/signup" element={<SignupPage userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} />
                    <Route path="/login" element={<LoginPage userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} />
                </Routes>
            </Layout>
        </Router>
    );
}