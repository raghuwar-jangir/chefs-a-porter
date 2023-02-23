import React from "react";
import {Box, styled} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Link} from "gatsby";

const FooterEnd = () => {
    const BoxWrapper = styled(Box)(() => ({
        '.footer-text': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: "#222222",
            padding: '18px',
            width: '50%',
            margin: '0px 0px'
        },
        '.footer-text li': {
            listStyle: "none"
        },
        '.footer-item': {
            fontFamily: 'Proxima Nova',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FBFBFB',
            textDecoration: 'none'
        },
        '.footer-end': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#222222',
            width: '100%'
        },
        '.dot-icon': {
            color: '#FBFBFB',
            fontSize: '10px'
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.footer-item': {
                textDecoration: 'underline'
            },
            '.footer-text li': {
                listStyle: 'none'
            },
            'footer-text': {
                padding: '16px',
            },
            '.dot-icon': {
              display:'none'
            },
        },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="footer-end">
                    <ul className='footer-text'>
                        <li><Link className='footer-item' to='/'> FAQs </Link></li>
                        <li><FiberManualRecordIcon className="dot-icon"/></li>
                        <li><Link className='footer-item' to='/'> Privacy Policy </Link></li>
                        <li><FiberManualRecordIcon className="dot-icon"/></li>
                        <li><Link className='footer-item' to='/'> T&C </Link></li>
                    </ul>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default FooterEnd