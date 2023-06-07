import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Users from './Users';
import './styles.css';
import Products from './Products';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
           <Products />
          </PrivateRoute>
          <Route path="/admin/categories">
            <h1>Category CRUD</h1>
          </Route>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
           <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;