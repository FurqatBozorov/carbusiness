import {AvField, AvForm, AvRadioGroup, AvRadio} from 'availity-reactstrap-validation'
import {Component} from 'react'
import { connect } from 'react-redux'
import {getCars, sellCar , getCarsForSale} from '../redux/actions/carAction'





class SellCar extends Component{
    // constructor(props) {
    //     super(props);

    //     let state = {
    //         thepaymentday: 'todey'
    //     }
        
    // }
    state = {
        thepaymentday: 'today',
        detailedSoldCar: {}       
    }

    componentDidMount() {
        this.props.getCars();
        this.props.getCarsForSale();
                  }

    futureHandle=()=>{
        this.setState({
            thepaymentday: 'future'
        })
    }
    todayHandle=()=>{
        this.setState({
            thepaymentday: 'today'
        })
    }

    
    

    render(){
        const formSubmit=(e, v)=>{
           // console.log(v);
            this.props.allcars.map(car=>{
                if(car.regNum === v.soldCar){
                    console.log(car);
                 this.detailedSoldCar ={
                    carModel: car.carModel,
                    regNum: car.regNum,
                    color: car.color,
                    boughtPrice: car.boughtPrice,
                    owner: car.owner,
                    boughtDate: car.boughtDate,
                    comment:car.comment,
                    newOwner: v.newOwner,
                    soldPrice: v.soldPrice,
                    soldDate: v.soldDate,
                    paymentDate: v.paymentDate,
                    futurePaymentDate: v.futurePaymentDate
                                

                 }   
                }else{
                    console.log('no such car');
                }
            })
            this.props.sellCar(this.detailedSoldCar);
            this.props.history.push('/soldcars')
        }

        return(
            <div className='container'>
            <AvForm onValidSubmit={formSubmit} autocomplete='off' className='w-25 mx-auto'  >
            <AvField type='select' className='my-2' name='soldCar'  label='Select the Car you want to sell'>
                <option>Select the car </option>            
            {   this.props.carsForSale.map(car=>(
                <option>{car.regNum} </option>
            ))}
            </AvField>
            <AvField
                type='input'
                name='newOwner'
                label='New Owner'
                required='false'
                className='my-2'        
            />
            <AvField
                type='number'
                name='soldPrice'
                label='Sold Price'
                required='false'
                className='my-2'
            />
            <AvField
                type='date'
                name='soldDate'
                label='The date you sell the car'
                required='false'
                className='my-2'
            />
            <AvRadioGroup className='my-2' name="paymentDate" label="Date of Payment"  errorMessage="Pick one!">
              <AvRadio label="Today" value="todey" onChange={this.todayHandle}/>
              <AvRadio label="Future" value="future" onChange={this.futureHandle}/>
            </AvRadioGroup>
                                
            <AvField
                type='date'
                name='futurePaymentDate'
                label= "Future Payment Day"
                disabled={ this.state.thepaymentday !== 'future' ? true: false}
            /> 

            
<button type='submit' className='btn btn-success btn-block mt-4 ml-auto'>Submit</button>

            </AvForm> 

            
            </div>
        )
    }

} 

const mapStateToProps=(state)=>{
    console.log(state.Cars.carsForSale);
    return{
        allcars: state.Cars.cars,
        carsForSale: state.Cars.carsForSale
    }
}

export default connect(mapStateToProps, {getCars, sellCar, getCarsForSale})(SellCar)