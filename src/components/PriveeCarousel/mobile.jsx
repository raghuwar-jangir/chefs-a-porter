import React from 'react'
import { useContext } from "react";
import CmsContext from "../../context/CmsContext";
import 'swiper/css';
import 'swiper/css/navigation';
import ItemCard from "./itemCard";
import { navigate } from 'gatsby';

const PriveeCarouselMobile = () => { 
    const { data } = useContext(CmsContext);
    return <div onClick={() => navigate(`/chef-details/${item?.id}`)} style={{ cursor: 'pointer' }}>
                {data?.home?.chefs_private_dining?.chefs?.length > 0 && (<>
                    {data.home.chefs_private_dining.chefs[0] && (<ItemCard item={data.home.chefs_private_dining.chefs[0]} />)}
                    {data.home.chefs_private_dining.chefs[1] && (<ItemCard item={data.home.chefs_private_dining.chefs[1]} />)}
                </>)}
            </div>
}

export default PriveeCarouselMobile;