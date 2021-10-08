import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Icon, Link } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { GitHub, YouTube } from '@material-ui/icons'
import '../../assets/styles/Footer.less'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,

	},
}))

const Footer = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			{/* <div className="container"> */}
			<AppBar position='static'>
				<Toolbar className='toolbar'>
						<Typography variant='h6' className={classes.title}>
							Creative Team
						</Typography>
						<Typography variant='h6' className={classes.title}>
							© 2021 Creative team, all rights reserved. Made with for a better
							web.
						</Typography>
					<div className='icons'>

						<Icon className='icon'>
							<Link><InstagramIcon /></Link>
						</Icon>

						<Icon className='icon'>
							<FacebookIcon />
						</Icon>
						<Icon className='icon'>
							<TelegramIcon />
						</Icon>
						<Icon className='icon'>
							<LinkedInIcon />
						</Icon>
						<Icon className='icon'>
							<GitHub />
						</Icon>
						<Icon className='icon'>
							<YouTube />
						</Icon>
					</div>
				</Toolbar>
			</AppBar>
			{/* </div> */}
		</div>
	)
}
export default Footer
