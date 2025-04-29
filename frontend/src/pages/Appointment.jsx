import {useContext,useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import verified_icon from '../assets/verified_icon.svg'
import info_icon from '../assets/info_icon.svg'
import RelatedDoctors from '../components/RelatedDoctors'


function Appointment() {

  const {docId}=useParams()
  const[docInfo,setDocInfo]=useState(null)
  const[slot,setSlot]=useState([])
  const[slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')
  const {doctors ,currencySymbol}=useContext(AppContext)

  const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']

  const fetchDocInfo= async()=>{
    const docInformation=doctors.find((doc)=>doc._id === docId)
    setDocInfo(docInformation)
    console.log(docInfo)
  }

  useEffect(()=>{
  fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailbleSlot()

  },[docInfo])
  useEffect(()=>{
    console.log(slot)

  },[slot])

const getAvailbleSlot=async()=>{
  // remove prev slot by empty array
  setSlot([])
  // getting current date

  let today=new Date()
   for (let i = 0;i < 7;i++){
    let curDate=new Date(today)
    curDate.setDate(today.getDate()+i)

    // getting time
    let endTime=new Date();
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)

    if(today.getDate()=== curDate.getDate()){
      curDate.setHours(curDate.getHours() > 10? curDate.getHours()+1:10)
      curDate.setMinutes(curDate.getMinutes()>30?30:0)

    }
    else{
      curDate.setHours(10)
      curDate.setMinutes(0)
    }
    let timeSlots=[]
    while(curDate<endTime){
      let formatedTime=curDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

    timeSlots.push({
      dateTime:new Date(curDate),
      time:formatedTime
    })
    curDate.setMinutes(curDate.getMinutes()+30)
    
    }
    setSlot(prev=>([...prev,timeSlots]))
    
    }

}

  // if docinfo is availble then ponly this div can see
  return docInfo && (
    <div>
      {/* doc details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg'  src={docInfo.image}/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* doc=info like name, */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5' src={verified_icon}/>
            </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.degree}- {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
            </div>
            {/* doctor about */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900mt-3 '>About <img src={info_icon}/></p>
              <p className='tetx-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>

            </div>
            <p className='text-gray-500 font-medium mt-4'> Appointment Fee : <span className='text-gary-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
      {/* --BOOKING SLOTS */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            slot.length && slot.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ?'bg-primary text-white ' : 'border border-gray-200' }`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>

                </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {slot.length && slot[slotIndex].map ((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time=== slotTime ?'bg-primary text-white':'text-gray-400 border border-gray-300'}`} key={index}> {item.time.toLowerCase()}</p>

          ))}

        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appintment</button>

      </div>

      {/* listing related doctors */}
      <RelatedDoctors  docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment
