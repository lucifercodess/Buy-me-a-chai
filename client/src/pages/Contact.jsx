import React, { useState } from 'react'

const Contact = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <section className='contact' >
        <div className="container">
          <div className="banner" >
            <form onSubmit={handleSubmit}>
              <h2>Contact Me</h2>
              <div  style={{display: "flex", flexDirection: "column"}}>
                <label for="name">Name:</label>
                <input type="text" id="fname" name="fname" required onChange={(e)=>setform({...form,name:e.target.value})}/>
                <label for="email">Email: </label>
                <input type="text" id="fname" name="fname" required onChange={(e)=>setform({...form,email:e.target.value})}/>
                <label for="phone">Phone:</label>
                <input type="text" id="fname" name="fname" required onChange={(e)=>setform({...form,phone:e.target.value})}/>
                <label for="message">Message:</label>
                <textarea type="text" id="fname" name="fname" required onChange={(e)=>setform({...form,message:e.target.value})}/>
                <div>
                  <button className='btn' style={{cursor:'pointer'}}>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact