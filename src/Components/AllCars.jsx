import React from 'react'
import SingleCar from './SingleCar'


const AllCars = ({data}) => {
    return (
        <div>
            <div>
                <div>
                    <p>count of hotel</p>
                    <b>See how we pick our recommended properties</b>

                </div>
                <div>
                    <select name="" id="">
                        <option value="">Recommended</option>
                        <option value="">Price</option>
                        <option value="">total price</option>
                    </select>
                </div>

            </div>
            <div>
                {data?.map(el => {
                    return <SingleCar key={el.id }{...el} />
                })}
            </div>
        </div>
    )
}

export default AllCars