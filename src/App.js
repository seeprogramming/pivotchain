import React from "react";
import Carousel from "react-elastic-carousel";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CustomSection from "./components/Layout/CustomSection";
import CustomImageSection from "./components/Layout/CustomImageSection";
import Button from "../src/components/Layout/Button";
import TitleWithUnderline from "./components/Layout/TitleWithUnderline";
import CustomCard from "./components/Layout/CustomCard";
import Item from "./components/Layout/Item";
import SliderItem from "./components/Layout/SliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCaretLeft,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../src/assets/featureIcon.png";
import SearchIcon from "../src/assets/search.png";
import IntegrationImage from "../src/assets/integration.jpg";
import DashboardImage from "../src/assets/dashboard.jpg";
import ReasonImage from "../src/assets/reasons.png";

function App() {
  //Dummy data - 1
  const aiFeaturesArray = [
    {
      title: "Automatic",
      iconUrl: Icon,
      data:
        "AI algorithm for automated public safety events detection in real-time",
    },
    {
      title: "POI Identification",
      iconUrl: Icon,
      data: "Improve clearance rate and  & reduce response time to crime",
    },
    {
      title: "Object",
      iconUrl: Icon,
      data: "Raven works seamlessly with your existing CCTV cameras",
    },
    {
      title: "People",
      iconUrl: Icon,
      data: "Raven works seamlessly with your existing CCTV cameras",
    },
  ];

  //Dummy data - 2
  const situationDashboardArray = [
    {
      iconUrl: SearchIcon,
      title: "spot",
      data: "Spot trend for crimes/abnormal events across geography over time.",
    },
    {
      iconUrl: SearchIcon,
      title: "Hotspots",
      data: "Detect risk patterns an hotspots.",
    },
    {
      iconUrl: SearchIcon,
      title: "live alerts",
      data: "Live alerts count for public safety events.",
    },
    {
      iconUrl: SearchIcon,
      title: "Response Time",
      data: "Predictive response time recommendation for public saety events.",
    },
  ];

  //Slider breakpoints
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 1 },
  ];

  const opAIFeatureArray = aiFeaturesArray.slice(0, 3).map((item, key) => {
    return (
      <div key={key} className="col-md-4 ">
        <CustomCard
          fDirection="column"
          height="75%"
          jContent="center"
          border="2px solid #162437"
        >
          <img src={item.iconUrl} alt={item.data} />
          <p style={{ textAlign: "center" }}>{item.data}</p>
        </CustomCard>
      </div>
    );
  });

  const opSituationDashboard = situationDashboardArray.map((item, key) => {
    return (
      <div key={key} className="col-md-6">
        <CustomCard
          fDirection="row"
          height="75%"
          jContent="flex-start"
          border="1px solid rgba(255,255,255,0.1)"
          padding="30px"
        >
          <div className="situationImage">
            <img src={item.iconUrl} alt={item.title} />
          </div>
          <div className="situationData">
            <h6>{item.title}</h6>
            <p>{item.data}</p>
          </div>
        </CustomCard>
      </div>
    );
  });

  const opSlider = aiFeaturesArray.map((slide, key) => {
    return (
      <Item>
        <div className="sliderData">
          <TitleWithUnderline title="Built for Homeland" fWeight="900" />
          <div className="slideImage">
            <img src={slide.iconUrl} alt="Build" />
          </div>
          <p className="sliderText">{slide.data}</p>
        </div>
      </Item>
    );
  });

  const opRiskSlider = aiFeaturesArray.map((slide, key) => {
    return (
      <div key={key} className="riskDataWrap">
        <div className="riskImage">
          <img src={IntegrationImage} alt="Risk" />
        </div>
        <div className="riskData">
          <p>{slide.title}</p>
          <h6>
            Number Plate Recognition{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>{" "}
          </h6>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <Hero />
      <CustomSection bgColor="#041329">
        <div className="container">
          <div className="titleWrap">
            <h1>RAVEN | Homeland</h1>
            <h3>(Real-time AI based Video analytics ENgine)</h3>
          </div>
          <div className="row">{opAIFeatureArray}</div>
          <Button btnTitle="Request Demo" />
        </div>
      </CustomSection>
      <CustomSection bgColor="#030f22">
        <div className="container">
          <div className="row">
          <div className="helpSectionTitleWrap">
                <h3>How can we help?</h3>
                <h4>
                  {" "}
                  <span>Detect risks in real time</span>{" "}
                  
                </h4>
                <h3 className="eventTitle"><span >Events</span></h3>
              </div>
          </div>
          <div className="row">
            <div className="col-md-6">
             
              <div className="helpSlideData">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <SliderItem
                        id="01"
                        title="Vandalism"
                        data=" Raven works seamlessly with your existing CCTV cameras."
                      />
                    </div>
                    <div className="carousel-item">
                      <SliderItem
                        id="02"
                        title="Accidents"
                        data=" Raven works seamlessly with your existing CCTV cameras."
                      />
                    </div>
                  </div>
                </div>

                <div className="playIcon">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carouselArrows">
               
              
                <a
                
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </a>
                <a
                 
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>

      <CustomSection bgColor="#041329">
        <div className="container">
          <div className="row">
            <div className="mySlider">
              <TitleWithUnderline title="Detect potential risks in real time" />
              <Carousel breakPoints={breakPoints}>{opRiskSlider}</Carousel>
            </div>
          </div>
        </div>
      </CustomSection>
      <CustomImageSection bgImage={DashboardImage}>
        <div className="situationDashboardWrap">
          <TitleWithUnderline title="Situaton Dashboard" fweight="600"/>
          <div className="container ">
            <div className="row">{opSituationDashboard}</div>
          </div>
        </div>
      </CustomImageSection>
      <CustomSection bgColor="#041329">
        <div className="integrationSectionWrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="integrationImage">
                  <img src={IntegrationImage} alt="Integration Image" />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="integrationData p-md-4">
                  <div className="intInnerData">
                    <h5>Integration</h5>
                    <p>
                      Integrates with your notification system(mail, sms, buzzer
                      etc)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
      <CustomImageSection bgImage={DashboardImage}>
        <div className="container">
          <div className="row">
            <div className="mySlider">
              <Carousel>{opSlider}</Carousel>
            </div>
          </div>
        </div>
      </CustomImageSection>
      <CustomSection bgColor="#041329">
        <div className="container">
          <div className="row">
            <div className="resonSectionTitleWrap">
              <h3>5 reasons</h3>
              <h2>Why you should go with Raven ?</h2>
            </div>
            <div className="reasonImageWrap">
              <img src={ReasonImage} alt="Reasons" />
            </div>
          </div>
        </div>
      </CustomSection>
    </Layout>
  );
}

export default App;
