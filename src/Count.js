import React from 'react'
import { useContext } from 'react'
import { store } from './App'
const Count = () => {
	const [data, setData] = useContext(store);  // eslint-disable-next-line
	console.log(data)
  return (
	<div className='card'>
		<div className='card-body p-5'>
			<h3 className='"card-title'>{data.length}</h3>
		</div>
	</div>
  )
}

export default Count