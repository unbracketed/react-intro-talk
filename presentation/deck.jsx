import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  reactElemInConsole: require('./images/react-element-in-dev-console.png')
};

// preloader([images.city, images.kat]);

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

        <Slide>
            <CodePane
              lang="javascript"
              source={require("raw!./examples/first-component/simple-component.example")}
              margin="20px auto"/>
        </Slide>

        <Slide>
            <CodePane
              lang="javascript"
              source={require("raw!./examples/what-is-jsx.example")}
              margin="20px auto"/>
        </Slide>

        <Slide>
          <Heading size={2} textColor="black">
            JSX!
          </Heading>
        </Slide>

        <Slide>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!./examples/before-transpiled-jsx.example")}
              margin="20px auto"/>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!./examples/transpiled-jsx.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>


        <Slide>
          <Heading>Composable</Heading>
          <Heading size={2}>Components can return trees of components</Heading>
        </Slide>

        <Slide bgColor="white">
            <BlockQuote>
              <Quote textSize={44}>React's primary purpose is to create a contract between components so that different abstractions in the ecosystem can co-exist. An important part of that role is to raise the level of abstraction for common concepts so that we can enable new cross-component features. E.g. saving all the state of a subtree, then revive the subtree. Or possibly including automatic unmounting on the server or changing the timing aspects of reconciliation on the server.</Quote>
              <Cite textColor="gray">Sebastian Markbage <a href="#">comment in #3398</a></Cite>
            </BlockQuote>
        </Slide>

        <Slide>
            <Heading size={4}>Let's compose</Heading>
              <CodePane
                lang="javascript"
                source={require("raw!./examples/compose-components.example")}
                margin="20px auto"/>
        </Slide>

        <Slide>
            <Heading size={4}>Let's compose</Heading>
              <CodePane
                lang="javascript"
                source={require("raw!./examples/composed-components.example")}
                margin="20px auto"/>
        </Slide>


        <Slide>
          <Heading>Props</Heading>
            <Appear>
              <CodePane
                  lang="javascript"
                  source={require("raw!./examples/component-with-props.example")}
                  margin="20px auto"/>

            </Appear>
            <Appear>
              <CodePane
                  lang="javascript"
                  source={require("raw!./examples/passing-props.example")}
                  margin="20px auto"/>
            </Appear>
        </Slide>

        <Slide>
          <Heading>State</Heading>
              <CodePane
                  lang="javascript"
                  source={require("raw!./examples/component-with-state.example")}
                  margin="20px auto"/>
        </Slide>

        <Slide>
          <Heading>State</Heading>
              <CodePane
                  lang="javascript"
                  source={require("raw!./examples/component-set-state.example")}
                  margin="20px auto"/>
        </Slide>

        <Slide>
          <Heading>Component Lifecycle Methods</Heading>
          <List>
            <ListItem>componentWillMount</ListItem>
            <ListItem>componentDidMount</ListItem>
            <ListItem>componentWillReceiveProps</ListItem>
            <ListItem>shouldComponentUpdate</ListItem>
            <ListItem>componentWillUpdate</ListItem>
            <ListItem>componentDidUpdate</ListItem>
            <ListItem>componentWillUnmount</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Component Lifecycle Methods</Heading>
          <List>
            <ListItem>async operations</ListItem>
            <ListItem>authentication / policy checks</ListItem>
            <ListItem>interact with other libraries</ListItem>
            <ListItem>improve performance</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Event handlers</Heading>

          <CodePane
              lang="javascript"
              source={require("raw!./examples/event-handler.example")}
              margin="20px auto"/>

        </Slide>


        <Slide>
          <Heading>Pros / Cons</Heading>
            <Heading size={3}>Pro</Heading>
            <List>
              <ListItem>Minimal API surface area</ListItem>
              <ListItem>Lean on language features</ListItem>
              <ListItem>Code easy to navigate</ListItem>
              <ListItem>Declarative / reactice style programming is fun</ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading>Pros / Cons</Heading>
            <Heading size={3}>Con</Heading>
            <List>
              <ListItem>Getting used to JSX, learning quirks and patterns</ListItem>
              <ListItem>Different mental model</ListItem>
              <ListItem>Tooling / bleeding edge</ListItem>
              <ListItem>React isn't small</ListItem>
            </List>
        </Slide>


        <Slide>
          <Heading>Review</Heading>
          <List>
            <ListItem><Appear fid="1">A minimal component</Appear></ListItem>
            <ListItem><Appear fid="2">JSX</Appear></ListItem>
            <ListItem><Appear fid="3">Composability</Appear></ListItem>
            <ListItem><Appear fid="4">Props</Appear></ListItem>
            <ListItem><Appear fid="5">State</Appear></ListItem>
            <ListItem><Appear fid="6">Component lifecycle</Appear></ListItem>
          </List>
        </Slide>


        <Slide>
          <Heading>Virtual DOM</Heading>
          <Image src="http://image.slidesharecdn.com/2015-150409045423-conversion-gate01/95/react-tech-salon-20-638.jpg?cb=1428560032"/>
        </Slide>


        <Slide>
          <ReactCountdownClock seconds={60}
                               color="#000"
                               alpha={0.9}
                               size={300} />

        </Slide>

        <Slide align="center flex-start">
            <Pong/>
        </Slide>


        <Slide>
          <Heading>Resources</Heading>
          <List>
            <ListItem>egghead.io</ListItem>
            <ListItem>React Koans</ListItem>
            <ListItem>Reactiflux Slack community</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>Brian Luft</Heading>
          <Heading size={3}>@unbracketed</Heading>
          <Heading size={3}>Lincoln Loop</Heading>
        </Slide>

      </Deck>
    );
  }
}
