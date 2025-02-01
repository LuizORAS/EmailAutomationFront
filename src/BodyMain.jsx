import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import AllEmail from './AllEmail';
import ImproductiveEmail from './ImproductiveEmail';
import ProductiveEmail from './ProductiveEmail';
import Home from './Home';
import Guide from './Guide';
import UploadEmail from './UploadEmail';
import ServiceEmail from './ServiceEmail';
import NotFound from "./NotFound";

function Main() {
    const [refreshEmailCount, setRefreshEmailCount] = useState(false);

    const handleRefreshEmailCount = () => {
        setRefreshEmailCount(prev => !prev);
    };

    return (
        <main id="main">
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/allEmail" element={<AllEmail />} />
                <Route path="/productiveEmail" element={<ProductiveEmail />} />
                <Route path="/improductiveEmail" element={<ImproductiveEmail />} />
                <Route path="/Guide" element={<Guide />} />
                <Route path="/UploadEmail" element={<UploadEmail refreshEmailCount={handleRefreshEmailCount} />} />
                <Route path="/ServiceEmail" element={<ServiceEmail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Main;