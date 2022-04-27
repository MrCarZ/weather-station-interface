import React from 'react';
import MultiChart from '../MultiChart';
import { Card, CardContent } from '@mui/material';

const ChartCard = () => {
    return(
        <Card sx={{height: "600px"}}>
            <CardContent sx={{height: "90%"}}>
                <MultiChart/>
            </CardContent>
        </Card>
    )
}

export default ChartCard;