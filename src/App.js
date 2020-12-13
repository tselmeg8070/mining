import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container, Grid, Typography} from "@material-ui/core";
import GoogleMap from "./Map";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import MenuItem from "@material-ui/core/MenuItem";
import {Line} from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        margin: 8,
        backgroundColor: theme.palette.common.white
    },
    content: {
        paddingTop: 28
    },
    header: {
        marginTop: 8,
        marginBottom: 16
    },
    subHeader: {
        marginTop: 8,
        marginBottom: 8
    },
    paper: {
        padding: 16,
        background: "#F3F6FF",
        borderRadius: 8
    },

    avgYes: {
        marginTop: 6,
        marginBottom: 8,
        color: "green"
    },
    avgNo: {
        marginTop: 6,
        marginBottom: 8,
        color: "red"
    }

}));

function App() {
    const classes = useStyles();

    const [techMoney, setTechMoney] = useState(0);
    const [bioMoney, setBioMoney] = useState(0);
    const [techArea, setTechArea] = useState(0);
    const [bioArea, setBioArea] = useState(0);
    const [year, setYear] = useState(2019);

    const techData = [
        {
            year: 2015,
            brokenAre: 0,
            recoveredArea: 9.09333333333333,
            money: 53604951.1166667
        },
        {
            year: 2016,
            brokenAre: 21.2709677419355,
            recoveredArea: 8.20903225806452,
            money: 33418241.0322581
        },
        {
            year: 2017,
            brokenAre: 5.75861111111111,
            recoveredArea: 6.75277777777778,
            money: 47228472.0486111
        },
        {
            year: 2018,
            brokenAre: 9.9054,
            recoveredArea: 6.8272,
            money: 21241695.3674
        },
        {
            year: 2019,
            brokenAre: 5.20048780487805,
            recoveredArea: 7.50926829268293,
            money: 98302965.0229268
        },

    ]

    const bioData = [
        {
            year: 2015,
            brokenAre: 0,
            recoveredArea: 10.5361111111111,
            money: 39350517.4944444
        },
        {
            year: 2016,
            brokenAre: 46.4357142857143,
            recoveredArea: 6.77857142857143,
            money: 144325302.683929
        },
        {
            year: 2017,
            brokenAre: 7.81746031746032,
            recoveredArea: 7.59349206349207,
            money: 142781414.492381
        },
        {
            year: 2018,
            brokenAre: 12.9729411764706,
            recoveredArea: 12.0619117647059,
            money: 72358688.6948529
        },
        {
            year: 2019,
            brokenAre: 5.65842105263158,
            recoveredArea: 7.375,
            money: 58494886.0515789
        },

    ]

    return (
        <div className={classes.root}>
            <Container maxWidth={"lg"}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <GoogleMap/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" className={classes.content}><Box fontWeight={"bold"}>"Jot" багын бүтээл</Box></Typography>
                    <Typography variant="h4" className={classes.header}>Алт олборлолтын нөхөн сэргээлт</Typography>
                    <Typography variant="h6" className={classes.subHeader}>Өгөгдөл</Typography>
                    <Divider/>
                    <Grid container className={classes.subHeader} spacing={1}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <Typography variant={"body2"}>Техникийн нөхөн сэргээлт</Typography>
                                <TextField fullWidth type="number" label="Мөнгөн дүн(төг)" variant="outlined" margin="dense"
                                           value={techMoney} onChange={(e) => setTechMoney(e.target.value)} />
                                <TextField fullWidth type="number" label="Талбай(га)" variant="outlined" margin="dense"
                                           value={techArea} onChange={(e) => setTechArea(e.target.value)} />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <Typography variant={"body2"}>Биологийн нөхөн сэргээлт</Typography>
                                <TextField fullWidth type="number" label="Мөнгөн дүн(төг)" variant="outlined" margin="dense"
                                           value={bioMoney} onChange={(e) => setBioMoney(e.target.value)} />
                                <TextField fullWidth type="number" label="Талбай(га)" variant="outlined" margin="dense"
                                           value={bioArea} onChange={(e) => setBioArea(e.target.value)} />
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container justify={"space-between"} alignItems="center">
                        <Grid item>
                            <Typography variant="h6" className={classes.subHeader}>Харьцуулалт</Typography>
                        </Grid>
                        <Grid item>
                            <TextField select label="Он" variant="outlined" margin="dense" value={year} onChange={(e) => setYear(e.target.value)}>
                                <MenuItem value={2015}>2015</MenuItem>
                                <MenuItem value={2016}>2016</MenuItem>
                                <MenuItem value={2017}>2017</MenuItem>
                                <MenuItem value={2018}>2018</MenuItem>
                                <MenuItem value={2019}>2019</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    <Divider/>
                    <Grid container className={classes.subHeader} spacing={1}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <Typography variant={"body2"}>Техникийн нөхөн сэргээлт</Typography>
                                <Compare classes={classes} number={techMoney/techArea} data={techData.find(e => e.year === year)}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <Typography variant={"body2"}>Биологийн нөхөн сэргээлт</Typography>
                                <Compare classes={classes} number={bioMoney/bioArea} data={bioData.find(e => e.year === year)}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant={"body2"}>Хугацааны график</Typography>
                        <Line data={{
                            labels: bioData.map(value => value.year),
                            datasets: [{
                                label: 'Техникийн нөхөн сэргээлт',
                                backgroundColor: "#000000",
                                borderColor: "#000000",
                                data: techData.map(e => e.money/e.recoveredArea),
                                fill: false,
                            },
                                {
                                    label: 'Биологи',
                                    backgroundColor: "#B2DF8A",
                                    borderColor: "#B2DF8A",
                                    data: bioData.map(e => e.money/e.recoveredArea),
                                    fill: false,
                                },
                                {
                                    label: 'Утга(биологи)',
                                    backgroundColor: "#A6CEE3",
                                    borderColor: "#A6CEE3",
                                    data: bioData.map(e => bioMoney/bioArea),
                                    fill: false,
                                },
                                {
                                    label: 'Утга(техник)',
                                    backgroundColor: "#1F78B4",
                                    borderColor: "#1F78B4",
                                    data: bioData.map(e => techMoney/techArea),
                                    fill: false,
                                },]
                        }}/>
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
}

function Compare({number, data, classes}) {
    const avg = data.money/data.recoveredArea;
    const diff =  number - avg;
    const percent = (diff/avg*100);
    return (
        <>
            <Typography variant={"h4"} className={percent < 0 ? classes.avgNo : classes.avgYes}>{numberWithCommas((number).toFixed(0))}₮/га
                &nbsp;{percent.toFixed(2)}%
            </Typography>
            <Typography variant={"body1"}>{numberWithCommas(avg.toFixed(0))}₮/га(дундаж)</Typography>
        </>
    );
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default App;
