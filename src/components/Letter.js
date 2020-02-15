import React, { Component } from "react";
import Anime, { anime } from 'react-anime';

export default class Letter extends Component {
    render() {
        return (
            <div className="row w-100 justify-content-center align-items-center m-auto">
                <div className="col-12 App-header">
                    <div className="background-cover position-absolute">
                        <GridBackground></GridBackground>
                    </div>
                <LetterY></LetterY>
                </div>
            </div>
        )
    }
}
function LineGrid() {
    let cubeElement = []
    let cubes = 22;
    for(let i = 0; i < cubes; i++) {
        cubeElement.push(<div className="small-block-grid" key={i}></div>)
    }
    return (
        <div className="col-12 d-flex justify-content-center align-items-center">
            <Anime delay={anime.stagger(100, {grid: [cubes, 5], from: 'center'})}
                    translateX={anime.stagger(10, {grid: [cubes, 5], from: 'center', axis: 'x'})}
                    translateY={anime.stagger(10, {grid: [cubes, 5], from :'center', axis: 'y'})}
                    rotateZ={anime.stagger([0, 90], {grid: [cubes, 5], from: 'center', axis: 'x'})}
                    easing={'easeInOutCirc'}
                    opacity={[1, 0]}
                    loop={true}
                    autoplay={true}
                    duration={1350}
                    direction={'alternate'}
            >
                {cubeElement}
            </Anime>
        </div>
    )
}

function GridBackground() {
    let line = []
    for(let i = 0; i < 12; i++) {
        line.push(<LineGrid key={i}></LineGrid>)
    }
    return (
        <div className="row w-100 justify-content-center align-items-center m-auto">
            {line}
        </div>
    )
}

function LetterY() {
    return (
        <div className="row w-100 justify-content-center align-items-center">
            <div className="col-12">
                <Anime delay={anime.stagger(100)}
                        rotate={[0, 360]}
                        autoplay={true}
                        easing={'easeInOutCirc'}
                        loop={true}
                        direction={'alternate'}
                        duration={1000}
                        opacity={[0, 1]}
                        >
                    {/* TOP OF Y */}
                    <div className="d-flex justify-content-center">
                        <div className="angled-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="angled-block-opposite"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="angled-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="angled-block-opposite"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="angled-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="angled-block-opposite"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="angled-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="angled-block-opposite"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="angled-block"></div>
                        <div className="transparent-block"></div>
                        <div className="transparent-block"></div>
                        <div className="angled-block-opposite"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="angled-block"></div>
                        <div className="transparent-block"></div>
                        <div className="angled-block-opposite"></div>
                    </div>

                    {/* CENTER CONNECTING TOP AND STEM */}
                    <div className="d-flex justify-content-center">
                        <div className="block-center"></div>
                        <div className="block-center-opposite"></div>
                    </div>
                    <div className="d-flex justify-content-center position-relative">
                        <div className="block-small-center position-absolute"></div>
                    </div>

                    {/* STEM OF Y */}
                    {/* <div className="d-block"> */}
                        <div className="block m-auto"></div>
                        <div className="block m-auto"></div>
                        <div className="block m-auto"></div>
                        <div className="block m-auto"></div>
                        <div className="block m-auto"></div>
                        <div className="block m-auto"></div>
                        <div className="block m-auto"></div>
                    {/* </div> */}
                </Anime>
            </div>
        </div>
    )
}