import classes from './PriorityDisplay.module.css';

const PriorityDisplay = () => {
    const low = [classes.priority,classes.low];
    const moderate = [classes.priority,classes.moderate];
    const high = [classes.priority,classes.high];
    return (
        <div style={{ margin: '1rem auto 0 auto', width: '40rem', }}>
            <p style={{fontSize:'18px',fontWeight:'bold',color:'#fff',marginBottom:'10px'}}>Priority:</p>
            <div className={classes.inlineBlockdata}>
                <div className={low.join(' ')}></div> Low
            </div>
            <div className={classes.inlineBlockdata}>
                <div className={moderate.join(' ')}></div> Moderate
            </div>
            <div className={classes.inlineBlockdata}>
                <div className={high.join(' ')}></div> High
            </div>
        </div>
    )
}

export default PriorityDisplay;