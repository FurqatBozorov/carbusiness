import React, { Component } from 'react';
import {makePaymentForRecievable, getRecievables} from '../redux/actions/carAction'
import {connect} from 'react-redux'
import { AvForm, AvField } from 'availity-reactstrap-validation'; 



class paidRecievable extends Component {    
    componentDidMount() {
        this.props.getRecievables();
              }




    render() {
        const handleSubmit =(e,v)=>{ 
            this.props.makePaymentForRecievable(v)
        }
        return (
            <div className='container'>
            <AvForm autocomplete="off" id="car-form" onValidSubmit={handleSubmit} className='w-25 mx-auto mt-4' rel={(e)=>this.form=e}>
            <AvField type='select' className='my-2' name='soldCar'  label='Select the Car you want to sell'>
                <option>Select the car </option>            
            {   this.props.recievables.map(item=>(
                <option>{item.car} </option>
            ))}
            </AvField>
            <AvField
                className='my-2' 
                type='Number'
                name='summa'
                label="Sum of payment"
                required="true"
            />
            <AvField
                className='my-2' 
                type='date'
                name='paymentDate'
                label="The day make a payment"
                required="true"
            />
            <AvField
                className='my-2' 
                type='textarea'
                name='comment'
                label="Additional Details"
                required="true"
                />
            <button className='btn btn-success btn-block'>Submit</button>

        </AvForm>     

            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        recievables: state.Cars.recievables
    }
} 

export default connect(mapStateToProps, {makePaymentForRecievable, getRecievables})(paidRecievable);
