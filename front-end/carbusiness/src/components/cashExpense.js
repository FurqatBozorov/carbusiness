import React, { Component } from 'react';
import {connect} from "react-redux"
import {getCashFlow} from '../redux/actions/carAction' 


class cashExpense extends Component {

    
    componentDidMount() {
        this.props.getCashFlow();
         }

        

    render() {
        return (
            <div className='container'>
            <h2 className='text-center'>Cash Expense </h2>
                          
  <table class="table table-striped ">
    <thead >
      <tr>
        <th>Date</th>
        <th>Commentary</th>
        <th>Summa</th>
      </tr>
    </thead>
    <tbody>
    {this.props.cashExpenses.map(cash=>(
        <tr key = {cash.id}>
        <td>{cash.date}</td>
        <td>{cash.reason}</td>
        <td>{cash.summa}</td>
      </tr>
      
    ))

    }
      
    </tbody>
  </table>
              
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
//  console.log(state.Cars.cashflow);
  return{
        cashExpenses: state.Cars.cashExpenses
    }
};

export default connect(mapStateToProps,{getCashFlow})(cashExpense);
