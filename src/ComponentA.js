import React from 'react'
import { useContext } from 'react'
import { store } from './App'
const ComponentA = () => {
	const[data, setData] = useContext(store)
  return (
	<div className='card text-center'>
		<div className='card-body shadow m-5 '>
			ComponentA {data}
		</div>
	</div>
  )
}

export default ComponentA