import "./Payment.css"

const Payment = () => {
    
    return (
        <div className="paymentcontainer">
            <h1>
                Secure booking -- only takes 2 minutes
            </h1>
            <div className="paymentdiv">
                <div>
                    <h2>Enter your payment details</h2>
                    <div>
                        <p> Card number</p>
                       <input type="number" name="" id="" placeholder="Card Number" /></div>
                    <div>
                        <p> Card holder name</p>
                        <input type="text" name="" id="" placeholder="card holder name" />
                    </div>
                    <div className="inn">
  
                        <div>
                            Month
                            <select name="" id="">
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                                <option value="">04</option>
                                <option value="">05</option>
                                <option value="">06</option>
                                <option value="">07</option>
                                <option value="">08</option>
                                <option value="">09</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                            </select>
                            Year
                            <select name="" id="">
                                <option value="">2023</option>
                                <option value="">2024  </option>
                                <option value="">2025</option>
                                <option value="">2026</option>
                                <option value="">2027</option>
                                <option value="">2028</option>
                            </select>
                        </div>
                        <input type="text" name="" id="" placeholder="cvv" />
                    </div>

                    <div className="submit">
                        <button>Submit</button>
                    </div>
                </div>
                <div>
                    <h2>Payment deatail</h2>
                    <p>Amount to be paid : $110</p>
                    <p>Discount : $0</p>

                </div>
               
            </div>
            

        </div>
    )
}

export default Payment