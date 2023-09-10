import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";

export const App = () => {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/todo" element={<TodoPage/>} />
                </Routes>
            </Layout>
        </Router>
    );
}