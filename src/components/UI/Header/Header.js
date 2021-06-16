import classes from './Header.module.css';
import { withStyles } from '@material-ui/core';
import { Badge } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: `0px`,
        // border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        fontSize: `18px`,
        fontWeight: `bold`,
        width: `30px`,
        height: `30px`,
    },
}))(Badge);

const Header = props => {
    return (
        <div className={classes.header}>
            <h2>ToDo App</h2>
            <nav>
                <ul>
                    <li><span style={{marginRight:'20px'}}>Task Count</span><StyledBadge badgeContent={props.taskCount} color="secondary"></StyledBadge></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;