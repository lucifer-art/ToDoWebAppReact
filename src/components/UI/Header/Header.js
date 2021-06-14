import classes from './Header.module.css';
import { Badge } from '@material-ui/core';

const Header = props => {
    return (
        <div className={classes.header}>
            <h2>ToDo App</h2>
            <nav>
                <ul>
                    <li><span>Task Count</span><Badge style={{minWidth:'40px'}} badgeContent={1} color="secondary"></Badge></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;