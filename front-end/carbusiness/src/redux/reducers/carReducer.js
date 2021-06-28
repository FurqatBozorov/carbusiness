import {GET_CARS, SOLD_CARS, CARS_FOR_SALE, GET_RECIEVABLES, GET_CASHFLOW} from '../actions/actionTypes'

const initialstate={
    cars:[],
    soldCars: [],
    carsForSale: [],
    recievables: [],
    cashflow:[],
    cashIncomes: [],
    cashExpenses: []
}

export const carReducer = (state=initialstate, action)=>{
    switch(action.type){
        case  GET_CARS  :
        return{
            ...state, cars: action.payload
        };
        case SOLD_CARS:
            return{
                ...state, soldCars: action.payload
            };
        case CARS_FOR_SALE:
            return{
                ...state, carsForSale: action.payload
            };
        case GET_RECIEVABLES:
            return{
                ...state, recievables: action.payload
            };
        case GET_CASHFLOW:
            return{
                ...state, cashflow: action.payload, cashIncomes:action.payload.filter(data=>(data.type === 'income')), cashExpenses:action.payload.filter(data=>(data.type === 'expense')) 
            }
        default: return state
    };
   
}