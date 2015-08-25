import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),

  reactElemInConsole: require('./images/react-element-in-dev-console.png')
};

preloader([images.city, images.kat]);

import Pong from 'react-pong'
import ReactCountdownClock from 'react-countdown-clock'

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "fade"]} transitionDuration={800}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            React
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            An Introduction
          </Heading>
          <Heading size={2} fit caps textColor="black">
            library and ecosystem
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <BlockQuote>
            <Quote textColor="gray">A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</Quote>
            <Cite textColor="altBlue">React home page</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
            <CodePane
              lang="javascript"
              source={require("raw!./examples/simple/index.html")}
              margin="20px auto"/>
        </Slide>

        <Slide>
          index.html
            <CodePane
              lang="javascript"
              source={require("raw!./examples/simple-2/index.html")}
              margin="20px auto"/>
            helloglendora.js
            <CodePane
              lang="javascript"
              source={require("raw!./examples/simple-2/helloglendora.js.example")}
              margin="20px auto"/>
        </Slide>

        <Slide notes="shows transpiled JSX">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/simple-2/helloglendora.js")}
              margin="20px auto"/>
        </Slide>

        <Slide>
          <Image src={images.reactElemInConsole.replace('/','')} margin="0px auto 40px"/>
        </Slide>

        <Slide>
            <CodePane
              lang="javascript"
              source={require("raw!./examples/first-component/index.html")}
              margin="20px auto"/>
        </Slide>

        <Slide>Gotcha!  class vs. className</Slide>


        <Slide>
          <ReactCountdownClock seconds={60}
                               color="#000"
                               alpha={0.9}
                               size={300} />

        </Slide>

        <Slide align="center flex-start">
          <Layout>
            <Heading>react-canvas</Heading>

          </Layout>
          <Layout>
            <Fill>
              <div>
              <Pong/></div>
            </Fill>
          </Layout>
        </Slide>

      </Deck>
    );
  }
}
