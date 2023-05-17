// App.tsx
import React from 'react';
import { Button, message } from 'antd';
import {
  HashRouter, Routes, Route, Link,
} from 'react-router-dom';

import Header from './components/header';
import { register } from './api/user';
import 'antd/dist/reset.css';
import Foo from './Pages/Foo';
import Bar from './Pages/Bar';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/foo" element={<Foo />} />
        <Route path="/bar" element={<Bar />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
