const SuperClubPopCarousel = () =>{
    return(
 {/* <MobileView> */}
 <Box className="header-club">
 <img src={arrow} alt="title" className="back-aerrow" />
 <img src={sampleText} alt="title" className="supper-club-image" />
</Box>
{/* <Box className="blowOut-description">
               <Typography className="blowOut-title">The Big Fat Parsi Blowout</Typography>
               <Box className="slots">
                   <Typography className="slot-title">
                       Curated by Chef Mako
                   </Typography>
                   <Typography className="slot-title2">
                       2 Slots Left!o
                   </Typography>
               </Box> */}
{/* </Box> */}

{/* </MobileView> */}
<Box className="main-box">
 <Grid container spacing={{ md: 2 }}>
   <Grid item xl={7} md={7} sm={6} xs={12}>
     {/* {isMobile ? ( */}
       <Box sx={{ background: "#fff" }}>
         {/* <AutoPlaySwipeableViews
           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
           index={activeStep}
           onChangeIndex={handleStepChange}
           enableMouseEvents
         > */}
           {/* {images.map((step) => (
             <div> */}
               <Box className="main-div">
                 {/* <img
                   alt="sample_file"
                   className="img"
                   src={step}
                   style={{
                     display: "block",
                     width: "100%",
                     height: "100%",
                   }}
                 /> */}
               </Box>
             {/* </div> */}
           {/* ))} */}
         {/* </AutoPlaySwipeableViews> */}
         {/* <MobileStepper
           steps={maxSteps}
           position="static"
           activeStep={activeStep}
           sx={{
             background: "#FBFBFB",
             display: "flex",
             justifyContent: "center",
           }}
         /> */}
       </Box>
     {/* ) : ( */}
       <Box className="container">
         <img
           src={RestorentImg}
           alt="RestorentImg"
           className="main-img"
           // className="image"
           onClick={handleImageClick}
         />
          {showCarousel && (
<Box className="carousel-popup">
 <button className="close-button" onClick={handleClose}>
   X
 </button>
 <Box className="carousel">
 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
<SwiperSlide><img  src={RestorentImg}/></SwiperSlide>
<SwiperSlide><img src={RestorentImg}/></SwiperSlide>
<SwiperSlide><img src={RestorentImg}/></SwiperSlide>
<SwiperSlide><img src={RestorentImg}/></SwiperSlide>
<SwiperSlide><img src={RestorentImg}/></SwiperSlide>
</Swiper>
 </Box>
</Box>
)}
       </Box>
     {/* )} */}
     </Grid>
             <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
              <Grid className="child-container" container spacing={2}>
                <Grid item md={6} sm={6} xs={6} xl={6}>
                  <img
                    src={RestorentImg}
                    alt="RestorentImg"
                    className="main-img-1"
                    onClick={handleImageClick}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={6} xl={6}>
                <img
                    src={RestorentImg}
                    alt="RestorentImg"
                    className="main-img-1"
                    onClick={handleImageClick}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={6} xl={6}>
                <img
                    src={RestorentImg}
                    alt="RestorentImg"
                    className="main-img-2"
                    onClick={handleImageClick}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={6} xl={6}>
                <img
                    src={RestorentImg}
                    alt="RestorentImg"
                    className="main-img-2"
                    onClick={handleImageClick}
                  />
                   <Button className="show-btn">Show All Photos</Button>
                </Grid>
               
                 </Grid>
)}
export default SuperClubPopCarousel