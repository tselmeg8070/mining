import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container, Grid, Typography} from "@material-ui/core";
import GoogleMap from "./Map";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import AnnualData from "./AnnualData";
import {locations} from "./datas";

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
    },
    mapS: {
        overflow: "auto",
        marginBottom: theme.spacing(2)
    }

}));

function App({selected}) {
    const classes = useStyles();

    const [year, setYear] = useState(2019);
    const [location, setLocation] = useState(selected);


    const handleClickLocation = (e) => {
        setLocation(e.target.id);
    }

    return (
        <div className={classes.root}>
            <Container maxWidth={"xl"}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <GoogleMap classes={classes} onClick={handleClickLocation}/>
                    {location !== null && <OverAll classes={classes} locations={locations} location={location}/>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container justify={"space-between"} alignItems="center">
                        <Grid item>
                    <Typography variant="body2" className={classes.content}><Box fontWeight={"bold"}>Аймаг</Box></Typography>
                    <Typography variant="h4" className={classes.header}>{location} ({location !== null
                    && numberWithCommas(locations.find(e => e.location === location).locationArea)} га)</Typography>
                        </Grid>
                        <Grid item>
                        <TextField select label="Он" variant="outlined" value={year} onChange={(e) => setYear(e.target.value)}>
                            <MenuItem value={2015}>2015</MenuItem>
                            <MenuItem value={2016}>2016</MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                        </TextField>
                        </Grid>
                    </Grid>
                    {location !== null && <AnnualData classes={classes} location={location} locations={locations} year={year}/>}
                </Grid>
            </Grid>
            </Container>
        </div>
    );
}


function OverAll({locations, location, classes}) {
    const data = locations.find((e) => e.location == location);
    return (
        <>
            <Typography variant="h6" className={classes.subHeader}>Ерөнхий мэдээлэл</Typography>
            <Divider/>
            <Grid container spacing={2} className={classes.subHeader}>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Icon>
                                    <img  src={process.env.PUBLIC_URL + "/mine.svg"}/>
                                </Icon>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">Уурхайн төслийн тоо</Typography>
                                <Typography variant="h2" align="right">{data.quantity}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant={"body2"}>Уурхайн эдэлбэр /га/</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body2"}>{data.area}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant={"body2"}>Тайлант онд нөхөн сэргээлт хийх талбай /га/ </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body2"}>{data.recovery}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item xs={4}>
                                <Icon>
                                    <img src={process.env.PUBLIC_URL + "/coal.svg"} style={{padding: 5, width: 64, height: 64}}/>
                                </Icon>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h6">Хамгийн их олборлосон бүтээгдэхүүн</Typography>
                                <Typography variant="h4" align="right">{data.mineral}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant={"body2"}>Нийт борлуулалт({data.measurement})</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body2"}>{data.soldQuantity}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant={"body2"}>Нийт борлуулалт(сая/төг) </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body2"}>{data.sold}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default App;
