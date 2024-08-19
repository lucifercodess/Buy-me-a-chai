import React, { useState } from 'react'

const Donate = () => {
  const [form, setform] = useState({
    amount: "",
    name: "",
    email: "",
   message: ""
  })
  const [disableBtn, setDiableBtn] = useState(false)
  return (
    <section>
        <div className="donate">
          <form>
            <div>
              <img src="/logo-black.png" alt="" />
            </div>
            <div>
              <label>Shower me with your Love</label>
              <input type="number" placeholder='amount' value={form.amount} onChange={(e)=>setform({...form,amount: e.target.value})}/>

              
              <input type="text" placeholder='name' value={form.name} onChange={(e)=>setform({...form,name: e.target.value})}/>

              
              <input type="email" placeholder='email' value={form.email} onChange={(e)=>setform({...form,email: e.target.value})}/>

             
              <input type="text" placeholder='message' value={form.message} onChange={(e)=>setform({...form,message: e.target.value})}/>
            </div>
            <div>
              <button type='submit' className='btn' disabled = {setDiableBtn}>
                Contribute {form.amount ? `$${form.amount}` : "$0"}
                </button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Donate