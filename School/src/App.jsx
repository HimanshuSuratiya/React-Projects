import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Component/Menu";
import ClassPage from "./Component/Classpage";
import HomePage from "./Component/Homepage";
import SearchPage from "./Component/Searchpage";
import StudentPage from "./Component/Studentpage";

const App = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/class" element={<ClassPage />} />
                <Route path="/search-student" element={<SearchPage />} />
                <Route path="/all-students" element={<StudentPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
};

export default App;