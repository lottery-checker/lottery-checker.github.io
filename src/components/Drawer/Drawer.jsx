import DrawerMenu from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Drawer.css';
const Drawer = ({ toggle, toggleDrawer, onMenuSelect }) => {
    return (
        <div className="drawer">
            <DrawerMenu className='drawer__menu' anchor={'left'} open={toggle} onClose={() => toggleDrawer(false)}>
                <div className="drawer__logo" onClick={() => onMenuSelect('home')}>
                    <h3>{process.env.REACT_APP_WEBSITE_NAME}</h3>
                </div>
                <List 
                className='List'>
                    <ListItem button onClick={() => onMenuSelect('home')}>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => onMenuSelect('about')}>
                        <ListItemText primary={'About'} />
                    </ListItem>
                    <Divider />
                    <div className="github-section">
                        <a href="https://github.com/lottery-checker/lottery-checker.github.io"
                        rel="noreferrer"
                        target='_blank' className="github__link">
                            Open Source &nbsp;<GitHubIcon />
                        </a>
                    </div>
                </List>
            </DrawerMenu>
        </div>
    )
}

export default Drawer