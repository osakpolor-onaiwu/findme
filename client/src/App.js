import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';
import { connect } from 'react-redux';
import Profile from './components/auth/profile';
import loadUser from './redux/actions/userAction';
import NewsAction from './redux/actions/loadNews';
import CategoryAction from './redux/actions/CategoryAction';
import GetSample from './redux/actions/getSample';
import ManufacturersAction from './redux/actions/manufacturerAction';
import LoginAction from './redux/actions/loginAction';
import Manufacturers from './components/pages/manufacturer';
import ManufacturerContact from './components/pages/manufacturerContact';
import About from './components/pages/about';
import Seller from './components/pages/seller';

class App extends React.Component {
  componentDidMount() {
    this.props.CategoryAction();
    this.props.loadUser();
    const userDetails = JSON.parse(localStorage.getItem('user details'));
    this.props.LoginAction(userDetails);
    this.props.ManufacturersAction();
    // this.props.NewsAction();

    // this.props.GetSample();
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/seller' component={Seller} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/profile' component={Profile} />
          <Route
            exact
            path='/category/:manufacturer'
            component={Manufacturers}
          />
          <Route
            exact
            path='/manufacturer/:manufacturerContact'
            component={ManufacturerContact}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CategoryAction: () => {
      dispatch(CategoryAction());
    },
    loadUser: () => {
      dispatch(loadUser());
    },
    NewsAction: () => {
      dispatch(NewsAction());
    },
    LoginAction: (userDetails) => {
      dispatch(LoginAction(userDetails));
    },
    ManufacturersAction: () => {
      dispatch(ManufacturersAction());
    },
    GetSample: () => {
      dispatch(GetSample());
    },
  };
};
export default connect(null, mapDispatchToProps)(App);
