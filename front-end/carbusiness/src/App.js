import Header from './components/header'
//import Purchase from './components/purchase'
import {BrowserRouter, Route} from "react-router-dom"
import AllCars from './components/allCars';
import CashFlow from './components/cashflow';
import soldCars from './components/soldCars';
import Balance from './components/balance';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Route path='/' exact component={AllCars} />
      <Route path='/cashflow' component={CashFlow} />
      <Route path='/soldcars' component={soldCars} />
      <Route path='/balance' component={Balance} />
    </div>

    </BrowserRouter>
    
  );
}

export default App;
