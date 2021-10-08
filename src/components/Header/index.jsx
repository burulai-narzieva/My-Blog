import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import '../../assets/styles/Header.less'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../../routes'
import { useSelector, useDispatch } from 'react-redux'
import { log_out } from '../../store/actions'
import { MenuItem } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		color: 'white',
	},
	title1: {
		marginLeft: '50px',
	},
	regs: {
		fontSize: '1.25rem',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		fontWeight: '500',
		lineHeight: '1.6',
		letterSpacing: '0.0075em',
		textDecoration: 'none',
		color: 'white',
		cursor: 'pointer',
		marginLeft: '-5px'
	},
}))

const Header = () => {
	const classes = useStyles()

	const history = useHistory()
	const currentUser = useSelector((state) => state.currentUser)
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.currentUser.firstName)
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleChange = (event) => {
		setAuth(event.target.checked)
	}

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const logOut = () => {
		dispatch(log_out()) && history.push('/')
	}

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar className={classes.header}>
					<Typography variant='h6' className={(classes.title, classes.regs)}>
						<div style={{ display: 'flex' }}>
							<Link style={{ color: 'white', textDecoration: 'none' }} to={routes.home}>
								<div className="logo">Home</div>
							</Link>
							<Link style={{ color: 'white', textDecoration: 'none' }} to={routes.users_page}>
								<div className="logo">Users</div>
							</Link>
						</div>
					</Typography>
					{
						auth ? (
							<div>
								<IconButton
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleMenu}
									color='inherit'
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose}>
										<Link to={routes.profile}>
											Profile
										</Link>
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										onClick={logOut}
									>
										Logout
									</MenuItem>
								</Menu>
							</div>
						) : (
							<div
								style={{
									marginLeft: '50px',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<Link style={{
									marginRight: 30,
								}} className={classes.regs} to={routes.login}>
									Login
								</Link>
								<Link className={classes.regs} to={routes.register}>
									Register
								</Link>

							</div>
						)
					}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
