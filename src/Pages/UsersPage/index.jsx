import React from 'react'
import { Button } from '@material-ui/core'
import '../../assets/styles/UsersPage.less'
import image from '../../assets/images/usericon.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function UsersPage() {

	const state = useSelector((state) => state.localUsers)
	
	return (
		<div style={{minHeight: '567px'}}>
			<div className='container'>
				<div className='font'>List of users</div>
				<div className='userP'>
					{state.map((el, id) => {
						return (
							<div key={id} className='as'>
								<img src={image} alt='' />
								<div className='span'>
									{el.firstName + ' ' + el.lastName}
								</div>
								<Link style={{ textDecoration: 'none' }} key={id} to={`/profile/${el.id}`}>
									<Button className='btn' variant="contained" color="primary">
										Open
									</Button>
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default UsersPage;

