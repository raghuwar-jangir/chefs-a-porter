import React from "react";
import cap from "../../assets/images/chef-cap.png";
import date from "../../assets/images/date.png";
import tag from "../../assets/images/tag-chef.png";
import trending from "../../assets/images/trending.png";
import moment from "moment";
import { Box, Typography } from "@mui/material";

const ItemCard = ({ item }) => {
  const pictures = Array.isArray(item.pictures)
    ? item.pictures?.[0]
    : item.pictures;
  return (
    <div style={{
      boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',marginBottom: '20px'
    }}>
      <img className="test-img" src={pictures} />
      {item.status && (
        <Box className="trending">
          <img className="trending-img" src={trending} />
          <Typography className="trending-title">Trending</Typography>
        </Box>
      )}
      <Box className="supper-info">
        <Typography className="super-title">{item.title}</Typography>
        <Box className="super-chef-details">
          <span className="chef-tag">
            <img className="img-tag" src={cap} alt="chef cap" />
            <Typography className="tag-detail">{`Chef ${item.chef.name}`}</Typography>
          </span>
          <span className="chef-tag">
            {/* here */}
            <img className="img-tag" src={date} alt="date" />
            {/*<Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography>*/}
            <Typography className="tag-detail">
              {moment(item.new_dates?.[0]?.date).format("MMMM D")} |{" "}
              {moment(item.new_dates?.[0]?.from, "HH:mm").format("h:mm A")} -{" "}
              {moment(item.new_dates?.[0]?.to, "HH:mm").format("h:mm A")}
            </Typography>
          </span>
          <span className="chef-tag">
            <img className="img-tag" src={tag} alt="Rates" />
            <Typography className="tag-detail">
              <b>{`₹${item.price}`}</b>/per diner
            </Typography>
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default ItemCard;
