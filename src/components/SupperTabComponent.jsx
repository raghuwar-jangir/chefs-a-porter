import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, styled } from '@mui/material';
import FoodDetailing from './FoodDetailing';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ paddingTop: '0px' }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SupperTabComponent = ({ name }) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const BoxWrapper = styled(Box)(() => ({
        ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
            margin: '0px 2px',
            border: "1px solid",
            width: '32.33%',
            textTransform: "capitalize",
            fontSize: '16px',
            fontWeight: '600',
            color: '#080B0E',
        },
        ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
            color: "#FBFBFB",
            background: "#080B0E",
            border: "1px solid #080B0E",
            display: 'block'
        },
        '.button-component': {
            textAlign: 'center',
            background: '#FBFBFB',
            paddingBottom: '30px'
        },
        '.view-button': {
            border: '1px solid #080B0E',
            textTransform: 'capitalize',
            width: '30%',
            fontSize: '24px',
            backgroundColor: '#FBFBFB',
            color: '#080B0E',
            marginTop: '40px'
        },

        '@media(min-width: 1px) and (max-width: 425px)': {
            '.view-button': {
                width: '100%'
            }
        }

    }))


    const useStyles = makeStyles({
        tab: {
            backgroundColor: '#FBFBFB',
        },
    });

    const classes = useStyles();

    return (
        <BoxWrapper>
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <Tabs indicatorColor={""} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Mumbai"{...a11yProps(0)} />
                    <Tab label="Delhi" {...a11yProps(1)} />
                    <Tab label="Goa" {...a11yProps(2)} />
                    <Tab label="Banglore" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel className={classes.tab} value={value} index={0}>
                <FoodDetailing />
                <Box className='button-component'>
                    <Button
                        fullWidth
                        className='view-button'
                    >
                        View All
                    </Button>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FoodDetailing />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FoodDetailing />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FoodDetailing />
            </TabPanel>

        </BoxWrapper >
    );
}
export default SupperTabComponent;
