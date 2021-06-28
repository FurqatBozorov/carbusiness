import { Component } from "react"
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {connect} from "react-redux"
import {addCar, getCars} from '../redux/actions/carAction'

class Purchase extends Component{
    render(){ 
 
        const handleSubmit=(e, v)=>{
            
            // console.log(this.props);
            this.props.addCar(v);
            // this.props.getCar();
            //this.form.reset();
               
            this.props.history.push('/')
            this.props.history.push('/')
        }

    return(
        <div className="container">
        <AvForm autocomplete="off" id="car-form" onValidSubmit={handleSubmit} className='w-25 mx-auto mt-4' rel={(e)=>this.form=e}>
            <AvField
                className='my-2' 
                type='text'
                name='carModel'
                label="Car Model"
                required="true"
            />
            <AvField
                className='my-2' 
                type='text'
                name='regNum'
                label="Registration Number"
                required="true"
            />
            <AvField
                className='my-2' 
                type='text'
                name='color'
                label="Car Color"
                required="true"
            />
            <AvField
                className='my-2' 
                type='number'
                name='boughtPrice'
                label="Price You buy the Car "
                required="true"
            />
            <AvField
                className='my-2' 
                type='text'
                name='owner'
                label="Owner Of the car"
                required="true"
            />
            <AvField
                className='my-2' 
                type='date'
                name='boughtDate'
                label="The day you buy the Car"
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
    )
    }    
}

export default connect(null, {addCar, getCars})(Purchase);

