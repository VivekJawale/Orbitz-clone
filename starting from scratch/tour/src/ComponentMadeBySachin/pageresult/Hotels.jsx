import Hotel from './Hotel';


const Hotels = ({data}) => {
  
  return (
    
    
    <div>

    {data?.map((hotel)=>(
      
      <Hotel  key={hotel.id} hotel={hotel} />
    ))}
    

    </div>

  )
}

export default Hotels