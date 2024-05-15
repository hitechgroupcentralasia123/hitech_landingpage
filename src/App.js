import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage/index";
import NewsPage from "./Pages/NewsPage/index";


function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <MainPage />
                        </Layout>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <Layout>
                            <NewsPage />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;