import React from 'react';
import { useForm } from "react-hook-form";
import "./AddUser.css";
const AddUser = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {
    event.target.reset();
    console.log(data)
    //const put data
    const url = "http://localhost:5000/service"
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body : JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=> {
      console.log(result)
    })
  };
  return (
    <div>
         <h2 style={{
          textAlign: "center",
          margin: "15px 0px"
         }}>add user here</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='input_form'>
        <label>Img Url</label>
        <input type='text' {...register("img", { required: true})} placeholder='img'/>
        <label>Service Name</label>
        <input type='text' {...register("name", { required: true})} placeholder='Service Name'/>
        <label>Price</label>
        <input type='number' {...register("price")}  placeholder='price'/>
        <label>Price</label>
        <textarea type="text" {...register("description")}  placeholder='Description'/>
        <input type="submit" value='Add'/>
    </form>
    </div>
  )
}

export default AddUser