import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import Blog from "./Pages/NewsPage/Blog";
import SinglePost from "./Pages/NewsPage/SinglePost";
import ErrorPage from "./Pages/Error";


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
                    path="/blog"
                    element={
                        <Layout>
                            <Blog />
                        </Layout>
                    }
                />
            <Route
                    path="/blog/:slug"
                    element={
                        <Layout>
                            <SinglePost />
                        </Layout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <ErrorPage/>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;