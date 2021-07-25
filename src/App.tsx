import './App.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NewProduct from './pages/NewProduct/NewProduct';

function App() {
    return (
        <Router>
            <TopBar />
            <div className="container">
                <SideBar />
                <main className="main">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="/user/:userId">
                            <User />
                        </Route>
                        <Route path="/newUser">
                            <NewUser />
                        </Route>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                        <Route path="/product/:productId">
                            <Product />
                        </Route>
                        <Route path="/newproduct">
                            <NewProduct />
                        </Route>
                        <Route path="*">
                            <h3 className="coming">Coming Soon!</h3>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
