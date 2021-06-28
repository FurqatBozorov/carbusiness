import { Component } from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import cashIncome from "./cashIncome"
import cashExpense from "./cashExpense"

class Balance extends Component{

    render(){

        return(
            <BrowserRouter>
            <div className='container'>
            <nav className="navbar  navbar-expand-sm  navbar-primary justify-content-center">
            <ul className="navbar-nav mx-4">
                <li className="nav-item">
                <a class="nav-link" href="#">TotalBalance </a>
                </li>               
                <li className="nav-item">
                <a class="nav-link" href="/balance/cashincome">CashIncomes</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/balance/cashexpense">CashExpenses</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="#"> Profit</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="#"> AllRecievables</a>
                </li>
            </ul>

        </nav>
        {/* <Route path='/cashflow/purchase' exact component={Purchase} />
        <Route path='/cashflow/sellcar' exact component={SellCar} />
        <Route path='/cashflow/investment' exact component={Investment} />
        <Route path='/cashflow/paidrecievable' exact component={PaidRecievable} /> */}

        <Route path='/balance/cashincome' exact component={cashIncome} />
        <Route path='/balance/cashexpense' exact component={cashExpense} />


            </div>

            </BrowserRouter>
            
        )
    }

}

export default Balance