import { Component } from "react";
import Car from './car'
import {connect} from 'react-redux'
import {getCars} from '../redux/actions/carAction'

 class AllCars extends Component{

    componentDidMount() {
        this.props.getCars();
    }
    render(){
        // console.log(this.props.allcars);
        return(
            <div className='container'>
            <div className='row my-3'>
            { this.props.allcars.map((item)=>(
             <div className='col col-md-4 my-3'>
             <Car
                    carModel={item.carModel}
                    regNum= {item.regNum}
                    color = {item.color}
                    boughtPrice = {item.boughtPrice}
                    owner = {item.owner}
                    boughtDate= {item.boughtDate}
                    comment={item.comment}
                    isSold ={item.sold}
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
    console.log(state);
    return{
        allcars: state.Cars.cars
    }
}

export default connect(mapStateToProps,{getCars})(AllCars);