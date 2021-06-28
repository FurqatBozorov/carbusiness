const mongoose = require('mongoose'); 

const carSchema = new mongoose.Schema ({
    carModel: String, 
    regNum: String,
    color: String,
    boughtPrice: Number,
    owner: String,
    boughtDate: Date,
    comment: String,
    sold: Boolean,
    deleted: Boolean
});

const soldCarSchema = new mongoose.Schema ({
    carModel: String, 
    regNum: String,
    color: String,
    boughtPrice: Number,
    owner: String,
    boughtDate: Date,
    comment: String,
    soldcar:String,
    newOwner: String,
    soldPrice: Number,
    soldDate: String,
    paymentDate: String,
    futurePaymentDate: String  
});

const investmentSchema = new mongoose.Schema({
    summa: Number,
    investmentDate: Date,
    comment: String
})

const cashSchema = new mongoose.Schema({
    summa: Number,
    type: String,
    reason: String,
    date: Date,
    detail: String
})

const recievableSchema = new mongoose.Schema({
    car: String,
    payer: String,
    soldPrice: Number,
    paidAmount: Number,
    remainedAmount: Number,
    soldDate: Date,
    deadline: Date,
    isRecievablePaidAll: Boolean,
    paymentHistory: Array
})
const Recievable = mongoose.model('Recievable', recievableSchema)
const Cash = mongoose.model('Cash', cashSchema )
const Investment = mongoose.model('Investment', investmentSchema);
const SoldCar = mongoose.model('SoldCar', soldCarSchema);
const Car = mongoose.model("Car", carSchema);

module.exports ={
    Recievable,
    Cash,
    Investment,
    SoldCar,
    Car
    }