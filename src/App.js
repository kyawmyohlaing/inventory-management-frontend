// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Purchases from './components/purchases/Purchases';
import Sales from './components/sales/Sales';
import Suppliers from './components/suppliers/Suppliers';
import Reports from './components/reports/Reports';
import Settings from './components/settings/Settings';
import Backup from './components/backup/Backup';
import Notifications from './components/notifications/Notifications';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={Products} />
         <Route path="/categories" component={Categories} /> 
          <Route path="/purchases" component={Purchases} />
          <Route path="/sales" component={Sales} />
          <Route path="/suppliers" component={Suppliers} />
          <Route path="/reports" component={Reports} />
          <Route path="/settings" component={Settings} />
          <Route path="/backup" component={Backup} />
          <Route path="/notifications" component={Notifications} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
