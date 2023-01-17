import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SuspenseFallback from './components/suspenseFallback';
import AdminLayout from './components/layouts/AdminLayout';
import AppLayout from './components/layouts/AppLayout';
import NotFound from './pages/notFound';

const App = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/*" element={<AppLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
