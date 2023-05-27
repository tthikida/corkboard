import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/App";
import Login from "./components/Login";
import Doorman from "./components/Doorman";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

// root.render(<App />);
root.render(<Doorman />);