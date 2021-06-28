
const Car = (props) =>{
    return(        
        <div className='card bg-secondary text-white '>
        <img className='card-img-top w-75 m-4 ' src="data:image/jpeg;base64,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" alt="auto rasm" />
        <h2 className='card-title m-4 '>{props.carModel} 
                </h2>
        <div className='d-flex justify-content-between mx-4'>
        <span class="badge alert-light ">
        {props.regNum}</span>
        
        <span class="badge alert-light ">
         {props.soldPrice ? 'Sold' : '' } 
         {props.isSold ? 'sold':''}        
        </span>
        
        </div>
            

        <p className='card-body'> {props.comment} </p>
        <div className='card-footer d-flex justify-content-end'>
        <button className='btn btn-dark text-white'> More Details </button>
        </div>
        </div>       
    )
}

export default Car