import React ,{useState}from 'react'

function Login() {

  const[state,setState]=useState('sign up')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const onSubmit=async(event)=>{
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col  gap-3 m-auto items-start p-8 min-w-[440px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state==='sign up'?'Create Account':"Login"}</p>
        <p>please {state==='sign up'?'Create Account':"Login"} to book appointment</p>
        {
          state === 'sign up' &&  <div className='w-full'>
          <p>FULL NAME</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' value={name} onChange={(e)=>setName(e.target.name)} required/>
        </div>
        }
       
        <div className='w-full '>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' value={name} onChange={(e)=>setEmail(e.target.name)} required/>
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' value={name} onChange={(e)=>setPassword(e.target.name)} required/>
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==='sign up'?'Create Account':"Login"}</button>
      {
        state ==='sign up'?
        <p>Already have an account ? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span> </p>
        :<p>Create account ? <span onClick={()=>setState('sign up')} className='text-primary underline cursor-pointer'>click here</span></p>
      }
      </div>

    </form>
  )
}

export default Login
