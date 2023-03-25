import React, {useContext} from 'react'
import {Box, styled, Typography} from '@mui/material';
import Rebook from './../assets/images/rebook.png'
import {navigate} from "gatsby";
import chef from '../assets/images/chef1.png'
import chef2 from '../assets/images/chef2.png'
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";
import reebok from "../assets/images/rebook.png";

const Privee = (props) => {

    const handleClick = () => {
        navigate('/chef-details');
    }
    const {data} = useContext(CmsContext);

    const MainContentBox = styled(Box)({
        '.grid': {
            display: 'grid',
            gridTemplate: 'repeat(1, 1fr) / repeat(3, 3fr)',
            gap: '40px',
            height: '1200px',
            overflow: 'hidden',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem'
        },
        '.privee-img': {
            width: '100%',
            objectPosition: 'top',
            objectFit: 'cover',
            height: '426px'
        },
        ".name-box": {
            padding: '16px 20px',
            background: '#101418',
            position: 'relative',
            bottom: '5px'
        },
        '.chef-title': {
            display: 'flex',
            placeContent: 'center',
            color: '#FBFBFB',
            fontSize: '20px',
            lineHeight: '25px',
            marginBottom: '6px',
            fontFamily: 'Bon Vivant ',
            fontWeight: 700,
            letterSpacing: '0.06em'

        },
        '.chef-details': {
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '250',
            letterSpacing: '0.02em',
            color: 'rgba(198, 168, 125, 0.8)',
            position: 'relative',
            paddingTop: '6px',
        },
        '.line': {
            position: 'relative',
            width: '1px',
            height: '100%',
            margin: '0 5px'
        },
        '.rebook-title': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
            padding: '5px 20px 5px 0px'
        },
        '.rebook-img': {
            objectFit: 'contain',
            marginRight: '4px',
            width: '12px',
            height: '16px',
            paddingTop: '5px'
        },
        '.rebook': {
            position: 'absolute',
            background: '#101418',
            display: 'flex',
            placeContent: 'flex-end',
            top: '0px',
            width: '100%',
        },
        '.cell': {
            position: 'relative'
        },
        "@media (min-width: 768px) and (max-width:990px)": {
            '.grid': {
                height: '100%'
            },
            '.privee-img': {
                height: '553px'
            }
        },
        "@media (min-width: 1px) and (max-width:767px)": {
            '.grid': {
                gridTemplate: 'repeat(1, 1fr) / repeat(2, 2fr)',
                gap: '15px',
                marginTop: '40px',
                paddingTop: '40px',
                height: '100%'
            },
            '.privee-img': {
                height: '220.24px',
                objectPosition: 'center'
            },
            '.chef-title': {
                fontSize: '14px',
                marginBottom: '6px'
            },
            '.chef-details': {
                fontSize: '12px',
                lineHeight: '15px',
                paddingTop: '0px'
            },
            '.name-box': {
                padding: '8px'
            },
            '.rebook-title': {
                fontSize: '12px',
                lineHeight: '15px'
            },
            '.rebook-img': {
                width: '11px',
                height: '13px'
            }
        }
    })

    return (
        <React.Fragment>
            <MainContentBox onClick={handleClick}>
                {
                    !_.isEmpty(data) &&
                    <div className="grid">
                        {
                            data.our_chefs.our_chefs.chefs.results.map((item) => {
                                return (
                                    <div className="cell">
                                        <img className='privee-img' src={item.picture}/>
                                        {/*{*/}
                                        {/*    item.details.is_featured &&*/}
                                        {/*    <Box className="rebook">*/}
                                        {/*        <img className="rebook-img" src={reebok}/>*/}
                                        {/*        <Typography className="rebook-title">Rebook</Typography>*/}
                                        {/*    </Box>*/}
                                        {/*}*/}
                                        <Box className="name-box"><Typography
                                            className='chef-title'>{item.name}</Typography>
                                            <Box className="chef-details">
                                                {item.details.tags.map((tagItem) => {
                                                    return <span>{tagItem}<span className='line'>|</span></span>
                                                })}
                                            </Box>
                                        </Box>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </MainContentBox>
        </React.Fragment>
    )
}

export default Privee;
