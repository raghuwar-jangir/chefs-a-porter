import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import "../../assets/styles/fontStyle.css";

const CancellationPolicy = () => {
  const BoxWrapper = styled(Box)(() => ({
    ".main-box": {
      padding: "120px 160px 40px",
    },
    ".about-heading": {
      fontStyle: "normal !important",
      fontSize: "32px !important",
      lineHeight: "30px",
      fontWeight: "700",
      textAlign: "center",
      letterSpacing: "0.06em",
      color: "#080B0E",
      fontFamily: "Bon Vivant !important",
    },
    ".details": {
      fontWeight: "400",
      fontStyle: "normal",
      textAlign: "left",
      fontFamily: "ProximaNovaA-Regular",
    },
    ".sub-box": {
      padding: "40px 16px 16px 16px",
    },
    "@media (min-width: 1px) and (max-width:431px)": {
      ".main-box": {
        padding: "0px",
      },
      ".about-heading": {
        display: "none",
      },
      ".mt-40": {
        marginTop: "40px !important",
      },
    },
    "@media (min-width: 426px) and (max-width:769px)": {
      ".main-box": {
        padding: "0px",
      },
      ".about-heading": {
        paddingTop: "80px",
        marginTop: "40px",
      },
    },
  }));
  return (
    <React.Fragment>
      <BoxWrapper>
        <Navbar heading="Cancellation Policy" />
        <Box className="main-box">
          <Box>
            <Typography className="about-heading">
              Cancellation Policy
            </Typography>
            <Box className="sub-box">
              <Typography className="details">
                <h3>Cancellation Policy for chefsaporter.com </h3>
                <p>
                  Effective Date: <b>23/07/2023</b>
                </p>
                <b>Cancellation of Orders:</b>
                <p>
                  1.1. Customers can cancel their orders for products or
                  services offered on chefsaporter.com by notifying us through
                  email or phone within [Insert Number] hours of placing the
                  order.
                </p>
                <p>
                  1.2. In the event of cancellation within the stipulated time
                  frame, customers will be eligible for a full refund of the
                  order amount.
                </p>
                <p>
                  1.3. If the customer fails to notify us within the specified
                  time or cancels the order after the processing has begun, the
                  cancellation request may not be honored, and the customer may
                  not be eligible for a refund.
                </p>
                <br />
                <b>Refund Policy:</b>
                <p>
                  2.1. Upon successful cancellation of an order as per Section
                  1, we will initiate the refund process within [Insert Number]
                  business days.
                </p>
                <p>
                  2.2. The refund will be processed using the same payment
                  method used for the original transaction, unless otherwise
                  agreed upon.
                </p>
                <p>
                  2.3. Please note that the refund processing time may vary
                  depending on the payment gateway or bank involved, and we
                  shall not be held responsible for any delays in the refund
                  process.
                </p>
                <br />
                <b>Non-Refundable Items/Services:</b>
                <p>
                  3.1. Some items or services may be non-refundable. These
                  non-refundable items will be clearly indicated on the
                  chefsaporter.com website.
                </p>
                <p>
                  3.2. Non-refundable items may include but are not limited to:
                  <ul>
                    <li>Perishable goods</li>
                    <li>Personalized or customized products</li>
                    <li>Downloadable digital content</li>
                    <li>Services that have already been rendered</li>
                  </ul>
                </p>
                <br />
                <b>Modification or Termination:</b>
                <p>
                  4.1. chefsaporter.com reserves the right to modify or
                  terminate the cancellation policy at any time without prior
                  notice.
                </p>
                <p>
                  4.2. Any changes to the policy will be updated on this page,
                  and customers are encouraged to review the policy periodically
                  for any updates. Contact Us: If you have any questions or
                  concerns regarding our cancellation policy, please feel free
                  to contact us at{" "}
                  <a href="mailto:rsvp@chefsaporter.com">
                    rsvp@chefsaporter.com
                  </a>
                </p>
              </Typography>
            </Box>
          </Box>
        </Box>

        <NeedHelp />
        <Footer />
        <FooterEnd />
      </BoxWrapper>
    </React.Fragment>
  );
};
export default CancellationPolicy;
