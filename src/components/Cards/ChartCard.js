import React from 'react';
import MultiChart from '../MultiChart';
import { Card, CardContent } from '@mui/material';

const ChartCard = (props) => {
    const {data} = props;
    
    return(
        <Card>
            <CardContent>
                <MultiChart data={data}/>
            </CardContent>
        </Card>
    )
}

export default ChartCard;