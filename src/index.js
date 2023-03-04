import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.js";

const rootDom = document.getElementById('root');
const container = createRoot(rootDom);
container.render(<App  />);

