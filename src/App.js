import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Offer from './components/Offer';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/restaurant-details/:name/:id"
          element={<RestaurantDetails />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
