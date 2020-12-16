import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GoogleMap from "./Map";
import Grid from "@material-ui/core/Grid";
import {Line, Pie} from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import App from "./App";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        margin: 8,
        backgroundColor: theme.palette.common.white
    },
    mapS: {
        overflow: "auto",
        marginBottom: theme.spacing(2)
    },
    divider: {
        marginBottom: theme.spacing(2)
    },
    header: {
        marginTop: theme.spacing(2)
    },
    paper: {
        padding: 16,
        background: "#F3F6FF",
        borderRadius: 8,
        marginBottom: theme.spacing(2)
    },
}));
function Main() {
    const classes = useStyles();
    const [selected, setSelected] = useState(null);

    const handleOnClickMap = (e) => {
        setSelected(e.target.id);
    }

    return (
        <div className={classes.root}>
            {selected !== null ? <App selected={selected}/> :
            <Container maxWidth={"lg"}>
                <Typography variant="body2">"OP insight" team</Typography>
                <Typography variant="h3">Алт олборлолт ба түүний байгаль орчин болон нийгэм эдийн засагт нөлөөлөх нөлөө</Typography>
                <Divider  className={classes.divider}/>
                <GoogleMap classes={classes} onClick={handleOnClickMap}/>
                <Typography variant="h5"  classes={classes.header}>Уурхайтай холбоотой жиргээнүүд</Typography>
                <Divider className={classes.divider}/>
                <Grid container>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper elevation={0} className={classes.paper}>
                            <Pie data={{
                                labels: ["Эерэг", "Сөрөг"],
                                datasets: [
                                    {
                                        label: 'Гадаад',
                                        backgroundColor: ["#B2DF8A", "#4BC0C0"],
                                        borderColor:  ["#B2DF8A", "#4BC0C0"],
                                        data: [40, 60],
                                        fill: false,
                                    },
                                ]
                            }}/>
                            <Typography variant={"body1"} align="center">Нийт жиргээнүүд</Typography>
                            <Typography variant={"h5"} align="center">{50}</Typography>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography variant={"body1"}>Давтамж</Typography>
                            <Line data={{
                                labels: [],
                                datasets: [{
                                    label: 'Хүний хөгжил',
                                    backgroundColor: "#000000",
                                    borderColor: "#000000",
                                    data: [],
                                    fill: false,
                                },
                                {
                                    label: 'Ажил эрхлэлтийн түвшин',
                                    backgroundColor: "#B2DF8A",
                                    borderColor: "#B2DF8A",
                                    data: [],
                                    fill: false,
                                },
                                {
                                    label: 'Хүн амын нягтрал',
                                    backgroundColor: "#A6CEE3",
                                    borderColor: "#A6CEE3",
                                    data: [],
                                    fill: false,
                                },
                                {
                                    label: 'Малын тоо',
                                    backgroundColor: "#1F78B4",
                                    borderColor: "#1F78B4",
                                    data: [],
                                    fill: false,
                                },]
                            }}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        {/*Todo() - Twitter*/}
                    </Grid>
                </Grid>

                <Typography variant="h5" className={classes.header}>Хамаарлын график</Typography>
                <Divider className={classes.divider}/>
                <Line data={{
                    labels: [],
                    datasets: [{
                        label: 'Хүний хөгжил',
                        backgroundColor: "#000000",
                        borderColor: "#000000",
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Ажил эрхлэлтийн түвшин',
                        backgroundColor: "#B2DF8A",
                        borderColor: "#B2DF8A",
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Хүн амын нягтрал',
                        backgroundColor: "#A6CEE3",
                        borderColor: "#A6CEE3",
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Малын тоо',
                        backgroundColor: "#1F78B4",
                        borderColor: "#1F78B4",
                        data: [],
                        fill: false,
                    },]
                }}/>
                <Typography variant="h5" className={classes.header}>Экспорт (2017)</Typography>
                <Divider className={classes.divider}/>
                {/*Todo() - Export*/}
            </Container>}
        </div>
    );
}
export default Main