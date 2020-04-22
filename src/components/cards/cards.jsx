import React from 'react';
import styles from "./cards.module.css";
import { Grid, CardContent, Card, Typography } from "@material-ui/core"
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading......"
    }
    const changeFormat = (item) => {
        let amOrPm = item.getHours() >= 12 ? "pm" : "am"
        let h = (item.getHours() % 12) || 12
        let m = item.getMinutes()
        return `${h}:${(item.getMinutes() / 10) > 1 ? "" : "0"}${m} ${amOrPm}`
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xm={12} sm={3} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                        </Typography><br />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary">{changeFormat(new Date(lastUpdate))}</Typography>
                        <br />
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xm={12} sm={3} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <br />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary">{changeFormat(new Date(lastUpdate))}</Typography>
                        <br />
                        <Typography variant="body2">Number of cases recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xm={12} sm={3} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography><br />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary">{changeFormat(new Date(lastUpdate))}</Typography>
                        <br />
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;