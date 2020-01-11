import React, { lazy, Suspense } from 'react';
import './App.css';
// import Main from './Main.js';
const Main = lazy(() => import('./Main'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main/>
    </Suspense>
  );
}

export default App;
