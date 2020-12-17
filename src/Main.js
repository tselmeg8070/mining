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
import { index, gold } from "./mainData";

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

                <Typography variant="h5" className={classes.header}>Хамаарлын график</Typography>
                <Divider className={classes.divider}/>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <Line data={{
                            labels: index.map(e => e.year),
                            datasets: [{
                                label: 'Уурхайн тоо',
                                backgroundColor: "#000000",
                                borderColor: "#000000",
                                data: index.map(e => e.quantity),
                                fill: false,
                            },
                                {
                                    label: 'Уурхайн эдэлбэр /га/',
                                    backgroundColor: "#B2DF8A",
                                    borderColor: "#B2DF8A",
                                    data: index.map(e => e.area),
                                    fill: false,
                                },
                                {
                                    label: 'Хүн амын боловсролын түвшний индекс',
                                    backgroundColor: "#A6CEE3",
                                    borderColor: "#A6CEE3",
                                    data: index.map(e => e.education),
                                    fill: false,
                                },
                                {
                                    label: 'Хүн амын нягтрал',
                                    backgroundColor: "#1F78B4",
                                    borderColor: "#1F78B4",
                                    data: index.map((e) => e.density),
                                    fill: false,
                                },
                                {
                                    label: 'Малын тоо',
                                    backgroundColor: "#1F08B4",
                                    borderColor: "#1F08B4",
                                    data: index.map((e) => e.animal),
                                    fill: false,
                                },
                                {
                                    label: 'ХӨДӨЛМӨР ЭРХЛЭЛТИЙН ТҮВШИН',
                                    backgroundColor: "#aF08B4",
                                    borderColor: "#aF08B4",
                                    data: index.map((e) => e.job),
                                    fill: false,
                                },
                            ]
                        }}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                        Correlation(-0.06) ХАМААРАЛ БАГА:
                        Уурхайн тоо,
                        Хүн амын боловсролын түвшний индекс
                        <br />
                        Correlation(0.09) ХАМААРАЛ БАГА:
                        Уурхайн тоо,
                        Нэг хүнд ноогдох ҮНО-ын индекс
                        <br />
                        Correlation(-0.16) УРВУУ:
                        Уурхайн тоо,
                        Хүн амын нягтрал
                        <br />
                        Correlation(0.02) ХАМААРАЛ БАГА:
                        Уурхайн тоо,
                        ХӨДӨЛМӨР ЭРХЛЭЛТИЙН ТҮВШИН
                        <br />
                        Correlation(0.01) ХАМААРАЛ БАГА:
                        Уурхайн тоо,
                        АЖ АХУЙН НЭГЖ, БАЙГУУЛЛАГЫН АЖИЛЛАГЧДЫН САРЫН ДУНДАЖ ЦАЛИН
                        <br />
                        Correlation(-0.06) ХАМААРАЛ БАГА:
                        Уурхайн тоо,
                        МАЛЫН ТОО
                        <br />
                        Correlation(-0.09) ХАМААРАЛ БАГА:
                        Уурхайн эдэлбэр /га/,
                        Хүн амын боловсролын түвшний индекс
                        <br />
                        Correlation(-0.06) ХАМААРАЛ БАГА:
                        Уурхайн эдэлбэр /га/,
                        МАЛЫН ТОО
                        <br />
                        </Typography>
                    </Grid>
                </Grid>


                <Typography variant="h5" className={classes.header}>Алт олборлолтын улсад төлсөн татвар</Typography>
                <Divider className={classes.divider}/>
                <Line data={{
                    labels: gold.map(e => e.year),
                    datasets: [{
                        label: 'Аж ахуйн нэгжийн орлогын албан татвар',
                        backgroundColor: "#000000",
                        borderColor: "#000000",
                        data: gold.map(e => e.company),
                        fill: false,
                    },
                    {
                        label: 'Гаалийн албан татвар',
                        backgroundColor: "#B2DF8A",
                        borderColor: "#B2DF8A",
                        data: gold.map(e => e.border),
                        fill: false,
                    },
                    {
                        label: 'Нэмэгдсэн өртгийн албан татвар',
                        backgroundColor: "#A6CEE3",
                        borderColor: "#A6CEE3",
                        data: gold.map(e => e.not),
                        fill: false,
                    },
                    {
                        label: 'Автобензин, дизелийн түлшний онцгой албан татвар',
                        backgroundColor: "#1F78B4",
                        borderColor: "#1F78B4",
                        data: gold.map((e) => e.gasoline),
                        fill: false,
                    },
                    {
                        label: 'Автобензин, дизелийн түлшний албан татвар',
                        backgroundColor: "#1F08B4",
                        borderColor: "#1F08B4",
                        data: gold.map((e) => e.gasoline2),
                        fill: false,
                    },
                    ]
                }}/>

                <Typography variant="h5" className={classes.header}>Экспорт (2017)</Typography>
                <Divider className={classes.divider}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={process.env.PUBLIC_URL + "/neg.gif"} style={{width: "100%", borderRadius: 12}}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={process.env.PUBLIC_URL + "/hoyor.gif"} style={{width: "100%", borderRadius: 12}}/>
                    </Grid>
                </Grid>
                <Typography variant="h5" className={classes.header}>Жиргээ</Typography>
                <Divider className={classes.divider}/>
                <img src={process.env.PUBLIC_URL + "/flat.png"} style={{width: "100%", borderRadius: 12}}/>
            </Container>}
        </div>
    );
}
export default Main