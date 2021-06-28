
 const models = require('../model/schema')

const get_all_cars =(req,res)=>{
        models.Car.find((err, allCars)=>{
            if (err){
                console.log(err);
            } else{
             res.send(allCars);
            }
        });     
    }

const get_sold_cars = (req,res) =>{
    models.SoldCar.find((err, soldCars)=>{
        if (err){
            console.log(err);
        } else{
           res.send(soldCars);
        
        }
    });

}

const buy_a_car = (req,res)=>{
 

    const car = new models.Car ({
        carModel: req.body.carModel,
        regNum: req.body.regNum,
        color: req.body.color,
        boughtPrice: req.body.boughtPrice,
        owner: req.body.owner,
        boughtDate: req.body.boughtDate,
        comment:req.body.comment,
        sold: false,
        deleted: false 
    });
    
    car.save();
   
    const cash = new models.Cash({
        summa: req.body.boughtPrice,
        type: "expense",
        reason: 'BoughtCar',
        date: req.body.boughtDate,
        detail: req.body.regNum
         });    
   
         cash.save();
    }

const sell_a_car = (req,res)=>{
    //console.log(req.body);
    
    const soldCar = new models.SoldCar({
        carModel: req.body.carModel,
        regNum: req.body.regNum,
        color: req.body.color,
        boughtPrice: req.body.boughtPrice,
        owner: req.body.owner,
        boughtDate: req.body.boughtDate,
        comment:req.body.comment,    
        newOwner: req.body.newOwner,
        soldPrice: req.body.soldPrice,
        soldDate: req.body.soldDate,
        paymentDate: req.body.paymentDate,
        futurePaymentDate: req.body.futurePaymentDate
        });
    
    soldCar.save();
     
     if(req.body.futurePaymentDate){
         const recievable = new models.Recievable({
            car: req.body.regNum,
            payer: req.body.newOwner,
            soldPrice: req.body.soldPrice,
            paidAmount: 0,
            remainedAmount: req.body.soldPrice,            
            soldDate: req.body.soldDate,
            deadline: req.body.futurePaymentDate,
            isRecievablePaidAll: false,
            paymentHistory: []
         })
   
         recievable.save();
         console.log('car sold');
     } 
   
   
   
    Car.updateOne({regNum: req.body.regNum}, {sold : true}, function (err) {
        console.log(err);        
    });
   
    const cash = new models.Cash({
        summa: req.body.soldPrice,
        type: "income",
        reason: 'carSold',
        date: req.body.soldDate,
        detail: req.body.regNum
         });    
   
         cash.save();    
   }    

const make_an_investment = (req, res)=>{
    const investment = new models.Investment({
       summa: req.body.summa,
       investmentDate: req.body.investmentDate,
       comment: req.body.comment
        });
  
        investment.save();
   
        const cash = new models.Cash({
       summa: req.body.summa,
       type: "income",
       reason: 'InvestmentByInvestor',
       date: req.body.investmentDate,
       comment: req.body.comment
        });    
  
        cash.save();
  
  }

  const get_all_recievables =  (req,res)=>{

    models.Recievable.find((err, allRecievables)=>{
        if(err){
            console.log(err);
        } else{
            res.send(allRecievables)
        }
    })
   
   }

const pay_for_recievables = (req, res)=>{
    // console.log(req.body.soldCar);
    models.Recievable.update({car: req.body.soldCar},{$push: {paymentHistory: {car: req.body.soldCar, summa: req.body.summa, date: req.body.paymentDate}}})  
}

const get_cashflow = (req,res)=>{
    models.Cash.find((err,cashflow)=>{
        if(err){
            throw(err)
        }else{
            res.send(cashflow)
        }
    });    
}

 

module.exports={
    get_all_cars,
    get_sold_cars,
    get_cashflow,
    buy_a_car,
    sell_a_car,
    make_an_investment,
    get_all_recievables,
    pay_for_recievables
}