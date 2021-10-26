import './App.css';
import Sidebar from './sidebar.js';
import Createuser from './createuser'
import Topbar from './topbar.js';
import Dashboard from './dashboard.js';
import Users from './users.js'
import Edituser from './edituser.js'
import Product from './product.js'
import Productcreate from './productcreate.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserProvider } from './usercontext';
import ProductEdit from './productedit';


function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/product" component={Product} exact={true} />
                <Route path="/productcreate" component={Productcreate} exact={true} />
                <Route path="/product/edit/:id" component={ProductEdit} exact={true} />

                <UserProvider>
                  <Route path="/users" component={Users} exact={true} />
                  <Route path="/product" component={Product} exact={true} />
                  <Route path="/createuser" component={Createuser} exact={true} />
                  <Route path="/users/edituser/:id" component={Edituser} exact={true} />
                </UserProvider>

              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
