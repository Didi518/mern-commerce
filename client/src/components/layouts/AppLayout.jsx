import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../../pages/cart';
import Header from '../common/Header';
import Home from '../../pages/home';
import Products from '../../pages/products';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import NotFound from '../../pages/notFound';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles">
          <Route index element={<Products />} />
        </Route>
        <Route path="/panier">
          <Route index element={<Cart />} />
        </Route>
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppLayout;
