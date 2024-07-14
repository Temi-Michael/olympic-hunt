import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from 'react-loading-skeleton';

const DataExplorer = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h5">Data Explorer</Typography>
                        <Grid container spacing={2}>
                            {[...Array(5)].map((_, index) => (
                                <Grid item xs={12} key={index}>
                                    <Paper style={{ padding: '10px' }}>
                                        <Skeleton height={40} />
                                        <Skeleton height={20} />
                                        <Skeleton height={20} />
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

    if (error) {
        return (
            <Typography color="error" style={{ padding: '20px' }}>
                {error}
            </Typography>
        );
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper style={{ padding: '20px' }}>
                    <Typography variant="h5">Data Explorer</Typography>
                    <Grid container spacing={2}>
                        {data.map((item) => (
                            <Grid item xs={12} key={item.id}>
                                <Paper style={{ padding: '10px' }}>
                                    <Typography variant="subtitle1">{item.name}</Typography>
                                    <Typography variant="body1">{item.body}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DataExplorer;