import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Header, Slider } from './components';
import './App.css';

const Dynamic = lazy(() => import('./components/Dynamic'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index={true} element={<Header />} />
          </Route>
          <Route path="/slider" element={<Slider />} />
          <Route
            path="dynamic"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dynamic />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
