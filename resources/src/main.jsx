import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/userForm/signIn/SignIn.jsx";
import LogIn from "./components/userForm/logIn/LogIn.jsx";
import CreatePost from "./components/createPost/CreatePost.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
