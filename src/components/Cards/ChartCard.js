import React from 'react';
import MultiChart from '../MultiChart';
import { Card, CardContent } from '@mui/material';

const ChartCard = () => {
    return(
        <Card>
            <CardContent>
                <MultiChart/>
            </CardContent>
        </Card>
    )
}

export default ChartCard;