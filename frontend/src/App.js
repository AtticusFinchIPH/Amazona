import React, { useEffect } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import SigninScreen from './screen/SiginScreen';
import { useSelector, useDispatch } from 'react-redux';
import RegisterScreen from './screen/RegisterScreen';
import ProductsScreen from './screen/ProductsScreen';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error} = userSignin;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <button className="brand-button" onClick={openMenu}>
                      &#9776;
                  </button>
                  <Link to="/">amazona</Link>
              </div>
              <div className="header-links">
                  <a href="cart.html">Cart</a>
                  {
                    userInfo ? <Link to="/profile">{userInfo.name}</Link> : <Link to="/signin" >Sign In</Link>
                  }
              </div>
          </header>
          <aside className="sidebar">
              <h3>Shopping categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                  <li>
                      <a href="index.html">Pants</a>
                  </li>
                  <li>
                      <a href="index.html">Shirts</a>
                  </li>
              </ul>
          </aside>
          <main className="main">
              <div className="content">
                <Route path="/products" component={ProductsScreen} />
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/product/:id" component={ProductScreen} />   
                <Route path="/cart/:id?" component={CartScreen} /> 
                <Route path="/" component={HomeScreen} exact={true}/>            
              </div>           
          </main>
          <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
