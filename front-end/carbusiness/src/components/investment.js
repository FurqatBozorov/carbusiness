import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {makeInvetment} from '../redux/actions/carAction'
import {connect} from "react-redux"

class Investment extends Component {
    render() {
        const handleSubmit =(e,v)=>{ 
            this.props.makeInvetment(v)
            this.props.history.push('/')
        }
        return (
            <div className='container'>
            <AvForm autocomplete="off" id="car-form" onValidSubmit={handleSubmit} className='w-25 mx-auto mt-4' rel={(e)=>this.form=e}>
            <AvField
                className='my-2' 
                type='Number'
                name='summa'
                label="Sum of Investment"
                required="true"
            />
            <AvField
                className='my-2' 
                type='date'
                name='investmentDate'
                label="The day make an Investment"
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
        )}} 
export default connect(null,{makeInvetment})(Investment);
