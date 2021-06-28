import React, { Component } from 'react';
import {connect} from "react-redux"
import {getCashFlow} from '../redux/actions/carAction' 


class cashIncome extends Component {

    // state = {
    //     cashIncome : []
    //    }

    componentDidMount() {
        this.props.getCashFlow();
        
        // this.setState({
        //     cashIncome: this.props.cashflow.filter(data=>(data.type === 'income'))
        // })        
            }

    render() {
        return (
            <div className='container'>
            <h2 className='text-center'>Cash Income </h2>
                          
  <table class="table table-striped ">
    <thead>
      <tr>
        <th>Date</th>
        <th>Commentary</th>
        <th>Summa</th>
      </tr>
    </thead>
    <tbody>
    {this.props.cashIncomes.map(cash=>(
        <tr>
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
   //console.log(state.Cars.chasIncomes);
    return{
        cashIncomes: state.Cars.cashIncomes
    }
};

export default connect(mapStateToProps,{getCashFlow})(cashIncome);
