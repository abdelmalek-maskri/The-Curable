import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useDoctorsContext} from '../hooks/useDoctorsContext'
function Doctors() {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const {doctors} = useDoctorsContext()
  const navigate = useNavigate()
  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((doctor, index) => (
              <div onClick={() => navigate(`/appointmet/${doctor._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img src={doctor.image} alt={doctor.name} className='bg-blue-50'/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
                      <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
