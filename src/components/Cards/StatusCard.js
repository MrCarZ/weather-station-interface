import React from 'react';
import StatusInfo from './StatusInfo';
import { Card, CardContent } from '@mui/material';
import {Thermometer} from 'react-feather';

const StatusCard = (props) => {
    const {data} = props;
    
    return(
        <Card sx={{ width: 250, height: 250 }}>
            <CardContent>
                <StatusInfo name="Temperature" ></StatusInfo>                
            </CardContent>
        </Card>
    )
}

export default StatusCard;