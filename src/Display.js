import React, { useState } from 'react'
import { useContext } from 'react'
import { store } from './App'
const Display = () => {
	const [data, setData] =useContext(store)
	const [name,setName] = useState('');
	const submitHandler=(e)=>{
		e.preventDefault();
		setData([...data, {brandname:name}]) //Array of Objects, so we used []
	}

  return (
	<div className='card'>
		<div className='card-body'>
			{data.map(item=>
				<h3 className='card-title'>{item.brandname}</h3>
			)}
			<form className='form' onSubmit={submitHandler}>
				<input type='text' placeholder='Enter your brand' className='m-1' onChange={(e)=>setName(e.target.value)}/>
				<input type='submit' value='Add'/>
			</form>
		</div>
	</div>
  )
}

export default Display