import { Component } from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import Investment from "./investment"
import PaidRecievable from "./paidRecievable"
import Purchase from './purchase'
import SellCar from './sellCar'

class CashFlow extends Component{

   


    render(){

        return(
            <BrowserRouter>
            <div className='container'>
            <nav className="navbar  navbar-expand-sm  navbar-primary justify-content-center">
            <ul className="navbar-nav mx-4">
                <li className="nav-item">
                <a class="nav-link" href="/cashflow/purchase">Buy Car </a>
                </li>               
                <li className="nav-item">
                <a class="nav-link" href="/cashflow/sellcar">Sell Car</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/cashflow/investment"> Make An Investment</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/cashflow/paidrecievable"> Paid Recievable</a>
                </li>                
            </ul>

        </nav>
        <Route path='/cashflow/purchase' exact component={Purchase} />
        <Route path='/cashflow/sellcar' exact component={SellCar} />
        <Route path='/cashflow/investment' exact component={Investment} />
        <Route path='/cashflow/paidrecievable' exact component={PaidRecievable} />



            </div>

            </BrowserRouter>
            
        )
    }

}

export default CashFlow