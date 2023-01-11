import React from 'react'
import { store } from './App'
import { useContext } from 'react'
const ComponentB = () => {
	const[data, setData] = useContext(store)
  return (
	<div className="card">
		<div className="card-body shadow">
			ComponentB {data}
		</div>
	</div>
  )
}

export default ComponentB