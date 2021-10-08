import React from 'react'
import { useSelector } from 'react-redux'
import '../../assets/styles/Home.less'
import Post from '../../components/Post/index.jsx'

const Home = () => {
	const state = useSelector((state) => state)
	return (
		<>
			<div className='title'>
				<div className='container'>
					<div className='main'>Welcome to the World of bloggers</div>
					<div className='posts'>
						{state.localUsers.map((el) => {
							return el.posts.map((post, postId) => {
								return (
									<Post
										el={post}
										full_name={el.firstName}
										last_name={el.lastName}
										key={postId}
									/>
								)
							})
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home









// import React from 'react'
// import { useSelector } from 'react-redux'
// import '../../assets/styles/Home.less'
// import Post from '../../components/Post/index.jsx'
// 
// const Home = () => {
	// const state = useSelector((state) => state)
	// return (
		// <>
			{/* <div className='title'> */}
				{/* <div className='container'> */}
					{/* <div className='main'>Welcome to the World of bloggers {' '} {state.currentUser.firstName + ' ' + state.currentUser.lastName}</div> */}
					{/* <div className='posts'> */}
						{/* {state.localUsers.map((el) => { */}
							// return el.posts.map((post, postId) => {
								// return (
										{/* <Post */}
											// el={post}
											// full_name={el.firstName}
											// last_name={el.lastName}
											// key={postId}
										// />
								// )
							// })
						// })}
					{/* </div> */}
				{/* </div> */}
			{/* </div> */}
		{/* </> */}
	// )
// }
// 
// export default Home
// 