import React from 'react'
import useServices from '../../Hooks/useServices'
import './ManageServices.css'
const ManageServices = () => {
    const [services, setServices] = useServices()
    const deleteService = (id)=>{
        const proceed = window.confirm("are you sure want to delete?")
      if(proceed){
        const url = `http://localhost:5000/service/${id}`
        fetch(url,{
         method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = services.filter(s=> s._id !== id)
        setServices(remaining)
         console.log("deleted", data)
        })
      }
    }
  return (
    <section>
        <h2>manage service</h2>
   <div className='manage_service'>
    {
                services.map(service=> <ul key={service._id}>
                    {service.name}
                    &nbsp;
                    <button onClick={()=>deleteService(service._id)}>Delete</button>
                </ul>)
            }
   </div>
    </section>
  )
}

export default ManageServices