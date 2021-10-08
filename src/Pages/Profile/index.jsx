
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { Input } from '@material-ui/core'
import '../../assets/styles/profile.less'
import { useDispatch, useSelector } from 'react-redux'
import { add_post } from '../../store/actions'
import { Link } from 'react-router-dom'
import blog from '../../assets/images/pro1.png'


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},

	large: {
		marginLeft: 10,
		width: theme.spacing(12),
		height: theme.spacing(12),
	},
}))

function Modal(props) {
	const [open, setOpen] = useState(false)
	const [scroll, setScroll] = useState('paper')

	const handleClickOpen = (scrollType) => () => {
		setOpen(true)
		setScroll(scrollType)
	}


	
	const handleClose = () => {
		setOpen(false)
	}

	const descriptionElementRef = React.useRef(null)
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [open])

	return (
		<div>
			<Button onClick={handleClickOpen('paper')} style={{ color: 'white' }}>
				Add Post
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'
			>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText
						id='scroll-dialog-description'
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						<div
							style={{
								display: 'flex',
								flexFlow: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Input
								placeholder={props.placeholder1}
								value={props.value1}
								onChange={props.onChange1}
							/>

							<Input
								placeholder={props.placeholder2}
								value={props.value2}
								onChange={props.onChange2}
							/>

							<Input
								placeholder={props.placeholder3}
								value={props.value3}
								onChange={props.onChange3}
								style={{ height: '200px', display: 'flex', textAlign: 'start' }}
							/>
						</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleClose} color='primary' onClick={props.ok}>
						<Link to='/'>OK</Link>
					</Button>
				</DialogActions>
			</Dialog>
		</div >
	)
}
export default function Profile() {
	const state = useSelector(state => state.currentUser)

	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [img, setImg] = useState('')
	const [content, setContent] = useState('')

	const classes = useStyles();

	const addPost = () => {
		dispatch(
			add_post({
				title,
				img,
				content,
				id: state.id,
			})
		)
	}
	return (
		<div className="container">
			<div className='profile'>
				<div className='navbar'>
					<div className='user'>
						<img
							style={{ width: '100px', height: '100px', borderRadius: '50px' }}
							src={blog}
							alt=''
						/>
						<p>
							{state.firstName + ' ' + state.lastName}
						</p>
					</div>
					<div className='side-bar'>
						<div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
							<Modal
								style={{ marginLeft: 'auto', marginRight: 'auto' }}
								placeholder1='title'
								placeholder2='img'
								placeholder3='post content'
								value1={title}
								value2={img}
								value3={content}
								onChange1={(e) => setTitle(e.target.value)}
								onChange2={(e) => setImg(e.target.value)}
								onChange3={(e) => setContent(e.target.value)}
								ok={addPost}
							/>
						</div>
					</div>

					<div className='shadow'>
						<h3>{state.firstName + ' ' + state.lastName}</h3>
						<h4>{state.userEmail}</h4>
					</div>
				</div>
			</div>
			{/* <h5>
				Posts
			</h5> */}
		</div>
	)
}
