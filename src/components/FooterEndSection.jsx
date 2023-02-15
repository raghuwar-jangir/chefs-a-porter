import React from "react";
import {Box, Stack, styled} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {Link} from "gatsby";

const FooterEnd = () => {
    const BoxWrapper = styled(Box)(() => ({
        '.footer-text': {
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: "#222222",
            padding: '18px',
        }, '.footer-item': {
            color: '#DCD7CB',
        },
        '.footer-end': { display: 'flex', justifyContent: 'center', backgroundColor: '#222222', width:'100%' },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="footer-end">
                    <Stack className='footer-text'
                           Boxider={<FiberManualRecordIcon sx={{fontSize: '6px', color: '#C6A87D'}}/>}
                           direction="row" spacing={2}>
                        <Link className='footer-item' to='/'> FAQs </Link>
                        <Link className='footer-item' to='/'> Privacy Policy </Link>
                        <Link className='footer-item' to='/'> T&C </Link>
                    </Stack>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default FooterEnd