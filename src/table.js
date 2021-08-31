import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

const Styles = makeStyles((theme) => ({
    td: {
        textAlign: "right",
    },
    paper: {
        color: "white",
        backgroundColor: "black"
    },
}));
function mapStateToProps(state) {
    return {
        coins: state.coins,
    };

}
export default connect(mapStateToProps)(function table(props) {
    const { coins } = props;
    const classes = Styles();

    return (
        <div>
            { coins.map((item) => (
                <>

                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <Paper className={classes.paper}>
                                <img style={{ width: "8%" }} src={item.icon}></img>{item.name}
                            </Paper>
                        </Grid>
                    </Grid>
                    <table style={{ color: "white" }}>
                        {item.Indices.map((item) => (
                            <tr style={{backgroundColor:item.star?"#ffff0042":""}}>
                                <td>{item.nameC}</td>
                                <td className={classes.td}>{item.number}</td>
                                <td style={{ color: item.Percent > 0 ? "red" : "green", textAlign: "center" }}>{item.Percent > 0 ? <>+</> : <></>}{item.Percent}%</td>
                                <td className={classes.td}>{item.number2}<span style={{ color: item.star ? "yellow" : "grey" }}><StarIcon /></span></td>
                            </tr>
                        ))}</table>
                </>
            ))}
        </div>
    )
}
)