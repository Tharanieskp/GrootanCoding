
import React from 'react'
import Form from '../components/Form'
function Login () {
	const [option, setOption] = React.useState(1)
	
	return (
		
		
		  <div className='container'>
			<header>
				<div className='color'>
                    {option===1 && 
					<span>Login to Coding Task</span>}
					{option===2 && <span>Create an account</span>}
					
				</div>
			</header>
			<ul className='options'>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Login</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
			</ul>
			<Form option={option} />
			
		   </div>
		
	)
}
export default Login
