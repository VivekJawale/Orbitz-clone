import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { BsFillCalendarEventFill } from 'react-icons/bs'

const Packages = () => {
  const [lorem, setLorem] = useState(true)
  const [search ,setSearch] = useState("")
  const [filt, setFilt] = useState([])
  const [data,setData] = useState([])

  const getData=async()=>{
    const data = await fetch(`https://mock-sever-app.onrender.com/countries`)
    const d =await data.json()
    return d
  }

  const handleChange =(e) =>{
    const val=e.target.value
    console.log(val)

    getData().then((d)=>setData(d))
    
    const x=data.filter((d)=>console.log(d.name==val))
    console.log(x)
    
  }
  return (
    <div className="p-10 bg-white border-2 border-gray-800">
      <p>Choose two or more items and save on your trip:</p>

      <div className="flex justify-between h-full px-5 py-2 text-xs bg-slate-100">
        <div className="flex gap-x-5">
          <div className="px-2 py-1 duration-1000 border-2 border-gray-800 cursor-pointer bg-slate-100 rounded-2xl hover:rotate-360 hover:scale-150">
            Stay added
          </div>
          <div className="px-2 py-1 duration-1000 border-2 border-gray-800 cursor-pointer bg-slate-100 rounded-2xl hover:rotate-360 hover:scale-150">
            Flight added
          </div>
          <div className="px-2 py-1 duration-1000 border-2 border-gray-800 cursor-pointer bg-slate-100 rounded-2xl hover:rotate-360 hover:scale-150">
            Add a car
          </div>
        </div>
        <div className="text-base text-sky-400">
          <p className="flex flex-row items-center">
            1 room, 2 travele &ensp;{' '}
            <BsChevronDown className="duration-300 hover:rotate-180" /> &ensp;
            &ensp;
            <span className="flex flex-row items-center">
              Economy &ensp; <BsChevronDown />{' '}
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-5 px-5 my-10 text-gray-400 ">
        <div className="flex items-center justify-around w-3/12 text-lg border">
          <ImLocation />
          <input
          onChange={handleChange}
            className="px-5 py-2 outline-none"
            type="search"
            placeholder="Leaving from"
          />
        </div>

        <div className="flex items-center justify-around w-3/12 text-lg border">
          <ImLocation />
          <input
            className="px-5 py-2 outline-none"
            type="search"
            placeholder="Going To"
          />
        </div>

        <div className="flex items-center justify-around w-3/12 text-lg border">
          <BsFillCalendarEventFill />
          <input
            className="px-5 py-2 outline-none"
            type="date"
            placeholder=""
          />
        </div>

        <div className="flex items-center justify-around w-3/12 text-lg border">
          <BsFillCalendarEventFill />
          <input
            className="px-5 py-2 outline-none"
            type="date"
            placeholder=""
          />
        </div>
      </div>

      <div className="w-1/12 m-auto">
        <button
          onClick={() => setLorem(!lorem)}
          className="py-2 text-lg font-bold duration-1000 bg-red-500 rounded-md px-14 text-slate-50 hover:scale-150 "
        >
          Search
        </button>
      </div>
      <div className="my-20">
        <p
          className={`${
            lorem
              ? 'invisible rotate-360 duration-1000'
              : 'visible duration-1000'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          quae delectus cupiditate dolore quasi quibusdam natus obcaecati, a ad
          minus et voluptatem excepturi, beatae assumenda? Iusto numquam tempore
          cumque facere! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iure rem at ipsam! Dolores repellat quaerat expedita maxime
          totam sequi asperiores dignissimos ad, nobis dolore sapiente rerum
          corrupti quod? Nobis, temporibus voluptatibus voluptas, ipsa itaque
          eligendi nemo optio, earum a minima ut numquam. Temporibus consequatur
          illo culpa ut maiores quo, ea a cumque deleniti et praesentium
          provident doloribus, assumenda cum aperiam non eos eligendi atque ex
          sapiente dicta. Officia molestias maiores excepturi eaque ut porro vel
          ipsam autem sed nostrum, error consequatur fugiat obcaecati sint cum
          maxime in, minima eius! Recusandae blanditiis voluptatibus quas
          dolores natus. Aliquid animi deserunt optio deleniti?
        </p>
      </div>
    </div>
  )
}

export default Packages
