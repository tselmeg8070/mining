import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import {Pie} from "react-chartjs-2";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import LinearProgress from "@material-ui/core/LinearProgress";
import {locationDatas} from "./datas";

function AnnualData({classes, year, location, locations}) {
    const data = locationDatas.find((e) => (e.location === location && e.year === year));
    const area = locations.find(e => e.location === location).locationArea;
    if(data === undefined)
        return (<div></div>);
    return (
        <>
            <Typography variant="h6" className={classes.subHeader}>Өгөгдөл</Typography>
            <Divider/>
            <Grid container className={classes.subHeader} spacing={1}>
                <Grid item xs={6}>
                    <Usage classes={classes} title="Уурхайн эдэлбэр талбай /га/" max={area} value={data.area}/>
                </Grid>
                <Grid item xs={6}>
                    <Usage classes={classes} title="Эвдэрсэн газрын хэмжээ /Га/" max={area} value={data.brokenArea}/>
                </Grid>
            </Grid>
            <Grid container className={classes.subHeader} spacing={1}>
                <Grid item xs={6}>
                    <Usage classes={classes} title="Тайлант онд нөхөн сэргээлт хийх талбай /га/ (Төлөвлөгөө)" max={area} value={data.recoverArea}/>
                </Grid>
                <Grid item xs={6}>
                    <Usage classes={classes} title="Тайлант онд нөхөн сэргээлт хийх талбай /га/ (Гүйцэтгэл)" max={area} value={data.recoveredArea}/>
                </Grid>
            </Grid>


            <Typography variant="h6" className={classes.subHeader}>Тайлан</Typography>
            <Divider/>
            <Grid container className={classes.subHeader} spacing={1}>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant={"body1"}>Олборлолт</Typography>
                        <Compare classes={classes} mined={data.mined} minedValue={data.minedValue}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <Pie data={{
                            labels: ["Гадаад", "Дотоод"],
                            datasets: [
                                {
                                    label: 'Гадаад',
                                    backgroundColor: ["#B2DF8A", "#4BC0C0"],
                                    borderColor:  ["#B2DF8A", "#4BC0C0"],
                                    data: [data.foreighnIncome, data.localIncome],
                                    fill: false,
                                },
                            ]
                        }}/>
                        <Typography variant={"body1"} align="center">Нийт борлуулалт(сая/төг)</Typography>
                        <Typography variant={"h5"} align="center">{numberWithCommas(data.income)}</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h6" className={classes.subHeader}>Уурхайнууд</Typography>
            <Divider/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Нэр</TableCell>
                        <TableCell>Регист</TableCell>
                        <TableCell>Тусгай зөвшөөрөл</TableCell>
                        <TableCell>Нийт ажилчид</TableCell>
                        <TableCell>Хөрөнгө оруулалт</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </>
    );
}
export default AnnualData;

function Usage({classes, title, value, max}) {
    const percent = value/max*100;
    return (<Paper className={classes.paper} elevation={0}>
        <Typography variant={"body1"} align="center">{title}</Typography>
        <LinearProgress className={classes.subHeader} variant="determinate" value={percent} style={{height: 8}}/>
        <Typography align="center" className={classes.subHeader} variant={"h5"}>{numberWithCommas(value)} га {percent.toFixed(2)}%</Typography>
        {/*<Compare classes={classes} number={techMoney/techArea} data={techData.find(e => e.year === year)}/>*/}
    </Paper>);
}
function Compare({classes, mined, minedValue}) {
    return (
        <>
            <Typography variant={"h4"} className={classes.avgYes}>{mined} тонн.мянга
            </Typography>
            <Typography variant={"body1"}>{numberWithCommas(minedValue)} төг.сая</Typography>
        </>
    );
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}