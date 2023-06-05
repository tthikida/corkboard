import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/App";
// import App2 from "./components/App2";
// import Login from "./components/Login";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
// root.render(<Login />);
// root.render(<App2/>); 