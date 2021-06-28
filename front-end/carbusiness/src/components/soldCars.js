import { Component } from "react";
import Car from './car'
import {connect} from 'react-redux'
import {getSoldCars} from '../redux/actions/carAction'

 class SoldCars extends Component{

    componentDidMount() {
        this.props.getSoldCars();
    }
    render(){
        console.log(this.props.soldcars);
        return(
            <div className='container'>
            <div className='row my-3'>

            { this.props.soldcars.map((item)=>(
            <div className='col col-md-4 my-3'>
              <Car
                    carModel={item.carModel}
                    regNum= {item.regNum}
                    color = {item.color}
                    boughtPrice = {item.boughtPrice}
                    owner = {item.owner}
                    boughtDate= {item.boughtDate}
                    comment={item.comment}
                    soldPrice={item.soldPrice}
                /> 
                

             </div>                            
            )

            )}
            </div>
            </div>

        )
    }
}
const mapStateToProps=(state)=>{
   return{
        soldcars: state.Cars.soldCars
    }
}

export default connect(mapStateToProps,{getSoldCars})(SoldCars);