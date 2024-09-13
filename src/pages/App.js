import * as React from "react"
import { useState, useCallback } from "react";
import './App.css'

import SkillCard from "./Components/SkillCard"
import WindowsCard from "./Components/WindowsComponentCard/WindowsCard"
import MacCard from "./Components/MacComponentCard/MacCard"
import MessageForm from "./Components/MessageForm/MessageForm"
import SkillTextCard from "./Components/SkillTextCard"
import WaveGuy from "./Components/p5art/WaveGuy"
import SolarSystem3D from './Components/p5art/SolarSystem3D'
import SinWave from './Components/p5art/SinWave';
import PerlinNoise2D from "./Components/p5art/PerlinNoise2D"
import TimesTables from "./Components/p5art/TimesTables"
import Kaleidoscope2D from "./Components/p5art/Kaleidoscope2D"
import TaurusAnimation from './Components/p5art/TorusAnimation'
import CubeAnimation from "./Components/p5art/CubeAnimation"
import SineWaveGraph from "./Components/p5art/SineWaveGraph"
import TriangleWaveAnimation from "./Components/p5art/TriangleWaveAnimation"
import SphereAnimation from "./Components/p5art/SphereAnimation"
import PongGame from "./Components/p5art/PongGame"
import FallingObstaclesGame from "./Components/p5art/FallingObstaclesGame"
import FlowArt from "./Components/p5art/FlowArt"
import InteractiveArt from "./Components/p5art/InteractiveArt"
import InteractiveDrawing from "./Components/p5art/InteractiveDrawing"
import PointingRectangles from "./Components/p5art/PointingRectangles"
import WaterWaves from "./Components/p5art/WaterWaves"

import letterseparate from "../images/letter-separate.png"
import endletterbar from "../images/endletterbar.png"

import zipRipped from "../images/artportfolio/zipRipped.png"
import cracked from "../images/artportfolio/cracked.png"
import ringSit from "../images/artportfolio/ringSit.png"
import ordering from "../images/artportfolio/nathanOrdering.png"
import tornApart2 from "../images/artportfolio/tornApart2.png"
import tornChain from "../images/artportfolio/tornChainNOBG.png"
import embryo from "../images/artportfolio/embryov2.png"
import tapePaper from "../images/notepapertaped.png";
import brickWall from "../images/brickwall.png"
import lips from "../images/lips.png"


import waitingRoom from "../images/artportfolio/waitingRoom.png"
import redtack from "../images/redtack.png"
import greentack from "../images/greentack.png";
import yellowtack from "../images/yellowtack.png";
// import bulletHole from "../images/bullethole.png"
// import HeartRateMonitor from "./Components/p5art/HeartRateMonitor"
import MarqueeCard from "./Components/MarqueeCard/MarqueeCard"
import FloorToolbar from "./Components/FloorToolbar/FloorToolbar"
import { AiFillCloseCircle } from "react-icons/ai";

import $ from 'jquery';

// Sound url imports
// import waveguysound from '../sounds/waveguysound.wav'
import MusicBumper from "./Components/MusicBumper/MusicBumper";

let tacks = [
  redtack,
  greentack,
  yellowtack
];

function ArtCard(props) {
  return (
    <div className="art-card-wrapper">
      <img className="art-image" src={props.imageSrc} />
      <img className="tack" src={tacks[Math.floor(Math.random() * 3)]} />
    </div >
  );
}

const App = () => {

  const [filterEnabled, setFilterEnabled] = useState(true);
  const [gridEnabled, setGridEnabled] = useState(true);
  const [inversionEnabled, setInversionEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [aboutEnabled, setAboutEnabled] = useState(false);

  React.useEffect(() => {
    $(".tile").on({
      mouseenter() {
        $(this).addClass("tile-ani");
      },
      animationend() {
        $(this).removeClass("tile-ani");
      },
    });
  }, []);

  const toggleFilter = (t) => {
    setFilterEnabled(t);
  }

  const toggleGrid = (t) => {
    setGridEnabled(t);
  }

  const toggleInversion = (t) => {
    setInversionEnabled(t);
  }


  // Mute a singular HTML5 element
  function muteMe(elem, t) {
    elem.muted = t;

    if (!t) {
      elem.play();
    }
    else {
      elem.pause();
    }
  }

  // Try to mute all video and audio elements on the page
  function mutePage(t) {
    document.querySelectorAll("video, audio").forEach((elem) => muteMe(elem, t));
  }

  const toggleSound = (t) => {
    setSoundEnabled(t);
    mutePage(!t);
  }

  const toggleAboutEnabled = () => {
    setAboutEnabled(!aboutEnabled);
  }

  const generateTiles = (n) => {
    let tileArray = [];

    for (let i = 0; i < n; i++) {
      tileArray.push(<div className="tile"></div>);
    }

    return tileArray;
  }

  const onClickWindow = useCallback((e) => {
    // $("#" + props.id).toggleClass("above");
    // $(e.target).addClass("above");
    // console.log(props.id);
    console.log(e.target);
    // e.preventDefault();
  });

  return (
    <React.Fragment>
      <div className="about-coverpage-wrapper" style={{ visibility: (aboutEnabled ? "visible" : "hidden") }} onClick={null}>
        <div className="close-about-btn" onClick={toggleAboutEnabled}>
          <AiFillCloseCircle />
        </div>
        <h1>
          - About this site -
        </h1>
        <div className="about-window">
          <h2>
            Welcome to the <span className="italics ambu-color">Ambulation Zone</span>
          </h2>

          <div className="letter-separator-wrap">
            <img className="letter-separator" src={letterseparate} />
          </div >

          <div className="about-text-wrap">
            <h3>
              Dearest,
            </h3>

            <h5>
              - What is this place? -
            </h5>
            <p>
              The <span className="italics ambu-color">Ambulation Zone</span> is an ideaboard-space.  Any visual, practical, interactive related development ideas that may come to mind may lead to fruition in this zone.
            </p>

            <hr></hr>

            <h5>
              - Who? -
            </h5>

            <p>
              My name is <span className="my-name">Nathan Breen</span>, I'm a <span className="what-i-am">UX/UI designer</span> and <span className="what-i-am2">Software Developer</span>.    If you'd like to know more about me, please go to
              <a className="my-website" href="https://www.nbreen.dev" target="_blank">THIS</a> website.
            </p>


            <hr></hr>

            <h5>
              - Thank you -
            </h5>

            <div className="thank-you">
              Thank you for stopping by this site.  Take care.
            </div>
          </div>

          <div className="letter-separator-wrap">
            <img className="letter-separator" src={endletterbar} />
          </div >
          <div className="sig-padding">
            <h4>
              Much obliged,
            </h4>

            <h6>
              <span className="my-name">
                Nathan Breen
              </span>
            </h6>
          </div>

        </div>
      </div>
      <body className={(inversionEnabled ? "invert " : "") + (aboutEnabled ? "blur " : "")}>
        <div className="header-wrap">
          <div className="bolt-wrapper">
            <div className="rivot" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
            <div className="rivot" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
          </div>
          <div className="left-header-wrap">

            <div className="header-coin-wrap coin-left">
              <div className="coin-face header-coin-front">
                <p className="coin-text">
                  %
                </p>
              </div>
              <div className="coin-face header-coin-back">
                <p className="coin-text text-purp">
                  &
                </p>
              </div>
            </div>

          </div>

          <div className="title-wrap">
            <div className="double-vision">
              <div className="title-text">
                <span className="title-span1">- AMBULATION ZONE -</span>
              </div>

              {/* <div className="title-text">
                <span className="title-span2">- AMBULATION ZONE -</span>
              </div> */}
            </div>
            <div className="lightboxes">
              <div className="lbox1" />
              <div className="lbox2" />
              <div className="lbox3" />
              <div className="lbox4" />
            </div>
          </div>
          <div className="about-info-wrapper">
            <div className="about-info" onClick={toggleAboutEnabled}>
              ?
            </div>
          </div>
          <div className="bolt-wrapper">
            <div className="rivot" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
            <div className="rivot" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
          </div>
        </div>
        <div className={"program-art-page " + (gridEnabled ? "" : "background-none")}>
          <div className={"page-filter " + (filterEnabled ? "" : "background-none")}></div>
          <div className="art-windows">
            <SkillCard id="sinwave" handleDrag={onClickWindow} setId={"sinwave"} programText="sinwave.p5" artComp={<SinWave />} />
            <WindowsCard id="marquee" handleDrag={onClickWindow} className="window-item" programText="X:/marquee.css" artComp={<MarqueeCard sound={soundEnabled} />} />
            <ArtCard imageSrc={zipRipped} />

            <WindowsCard id='waveguy' soundUrl={null} sound={soundEnabled} programText="C:/wave-guy.p5" artComp={<WaveGuy />} />
            <ArtCard imageSrc={embryo} />
            <SkillCard programText="pong.p5" artComp={<PongGame />} />

            {/* THE FUCKING GUY! */}
            {/* <div className="senior-bumpis">
              <MacCard id='angelbumper' programText="Angelic Bumper" underbartext="Above him stood the seraphim." artComp={<MusicBumper />} />
              <WindowsCard id='muah' className="window-item" programText="X:/muah-XOXO" artComp={
                <img className="art-image" src={lips} style={{ boxShadow: "none", background: "#000", width: "400px", borderRadius: "0" }} />
              } />
            </div>

            <div className="senior-bumpis" style={{ flexDirection: "column" }}>
              <ArtCard imageSrc={ringSit} />
              <ArtCard imageSrc={tornApart2} />
            </div>

            <WindowsCard className="window-item" programText="X:/type-it-out" artComp={
              <div className="tile-drawer-wrap">
                {
                  generateTiles(400).map((tile) => tile)
                }
              </div>
            } />

            <MacCard id='mrwaveguy' programText="Mr.-Waveguy" underbartext="Move like water---" artComp={<WaterWaves />} />
            <WindowsCard soundUrl={null} sound={soundEnabled} programText="C:/barber.css" artComp={
              <React.Fragment>
                <div className="barber-wrapper">
                  <div className="barber-inner">
                    <div className="barber"></div>
                    <div className="barber"></div>
                  </div>
                </div>
              </React.Fragment>
            } />
            <SkillTextCard programText="What does it all mean?" titleText="What is this?" skillsText="Cosmic tapestry of existence, fungal beings slumber, 
            their mycelial tendrils weaving through the shadows. 
            Life, a fleeting illusion, succumbs to their ancient dance. 
            Spores whisper forgotten truths, 
            heralding an era where boundaries blur, 
            and the world trembles in ominous anticipation." />
            <div className="art-card-wrapper" style={{ height: "250px" }}>
              <img className="art-image" src={tapePaper} style={{ boxShadow: "none" }} />
            </div >
            <MacCard programText="they-are-looking.p5" artComp={<PointingRectangles />} />
            <WindowsCard programText="C:/color-wheel.p5" artComp={<Kaleidoscope2D />} />
            <ArtCard imageSrc={cracked} />

            <MessageForm programText="Shoot me a messsage!" />
            <div className="art-card-wrapper">
              <img className="art-image" src={brickWall} style={{ boxShadow: "none" }} />
            </div >
            <MacCard programText="timesTables.p5" artComp={<TimesTables />} />
            <SkillTextCard programText="a lot" titleText="There's a lot going on here." bgColor="#333" titleColor="#fff" textColor="#FFFC33"
              skillsText="I know." />
            <WindowsCard programText="wavegen.p5" artComp={<SineWaveGraph />} />
            <SkillCard programText="bigsmall.p5" artComp={<InteractiveArt />} />
            <div className="art-card-wrapper">
              <img className="art-image" src={tornChain} style={{ boxShadow: "none" }} />
            </div >
            <MacCard programText="hover-square.p5" artComp={<InteractiveDrawing />} />
            <SkillTextCard programText="Any others?" titleText="It's for display." bgColor="#80008b" titleColor="#FFF" textColor="#fff"
              skillsText="
            Bathed in moonlight, the greenhouse quivered. 
            Roots crawled, leaves whispered in the darkness. 
            Silent witnesses watched as the plants, once motionless, twisted in an unholy dance. 
            A cursed spectacle, visible only to those fortunate souls drawn into their sinister performance, bound to secrecy or doomed to join the foliage's malevolent waltz.
            " />

            <WindowsCard programText="hover-flow.p5" artComp={<FlowArt />} />
            <SkillCard programText="terrain-generation.p5" artComp={<PerlinNoise2D />} />
            <ArtCard imageSrc={waitingRoom} />
            <SkillCard programText="hoolahoop.p5" artComp={<SphereAnimation />} />
            <ArtCard imageSrc={ordering} />
            <SkillCard programText="tangent-spaceinvaders.p5" artComp={<TriangleWaveAnimation />} />
            <SkillCard programText="solar-system.p5" artComp={<SolarSystem3D />} /> */}
          </div>
        </div>
      </body>

      {
        (aboutEnabled ? null : <FloorToolbar tFilter={toggleFilter} tGrid={toggleGrid} tInversion={toggleInversion} tSounds={toggleSound} />
        )
      }
    </React.Fragment>
  )
}

export default App

export const Head = () => <title>Ambulation Zone</title>
