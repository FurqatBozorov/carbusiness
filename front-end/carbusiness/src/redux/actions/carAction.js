import {CARS_FOR_SALE, GET_CARS, SOLD_CARS, GET_RECIEVABLES, GET_CASHFLOW} from './actionTypes'
import axios from 'axios'

export const getCars=()=>dispatch=>{
    axios.get('http://localhost:3000/')
        .then(res=>{
            dispatch({
                type: GET_CARS,
                payload: res.data
            })
        
        })
}

export const getSoldCars=()=>dispatch=>{
    axios.get('http://localhost:3000/soldcars')
        .then(res=>{
            dispatch({
                type: SOLD_CARS,
                payload: res.data
            })
        
        })
}


export const addCar=(data)=>dispatch=>{
    axios.post('http://localhost:3000/purchase', data)
        .then(
           res=>{
            if(res.status === 200){
                 dispatch(getCars())
                
            }else{
                console.log("you have an error");
            }})}

export const sellCar=(data)=>dispatch=>{
    axios.post('http://localhost:3000/sellcar', data)
        .then( res=>{
            if(res.status === 200){
                dispatch(getSoldCars());
            }else{
               console.log("you have an error");
           }
        }
        )
}

export const makeInvetment=(data)=>dispatch=>{
    axios.post('http://localhost:3000/investment', data)
        .then( res=>{
            if(res.status === 200){
                dispatch(getSoldCars());
            }
        })
}

export const getCarsForSale = () => dispatch =>{
    axios.get('http://localhost:3000/')
        .then(res=>{
            if(res.status === 200){
                let result = res.data.filter(car=>car.sold !== true);
                dispatch({
                    type: CARS_FOR_SALE,
                    payload: result
                })

            }
            
        
        })
    
}

export const makePaymentForRecievable =(data)=>dispatch=>{
    axios.post('http://localhost:3000/paidrecievable', data)
        .then(res=>{
            if(res.status === 200){
                dispatch(getRecievables())
            }
        })
}

export const getRecievables = ()=>dispatch=>{
    axios.get('http://localhost:3000/getrecievables')
        .then(res=>{
            if(res.status === 200){
                dispatch({
                    type: GET_RECIEVABLES,
                    payload: res.data
                })
            }
        })
}

export const getCashFlow = ()=> dispatch =>{
    axios.get('http://localhost:3000/getcashflow')
        .then(res=>{
            if(res.status === 200){                               
                dispatch({
                    type: GET_CASHFLOW,
                    payload: res.data
                })
            }

        })
}