import React from "react";
import styled from "styled-components";
import { Container, Content } from "../src/components/common";
import Sky from "../src/components/Sky";
import Text from "../src/components/TextCanvas";
import Footer from "../src/components/Footer";

export default class IndexPage extends React.PureComponent {
  render() {
    return (
      <Container>
        <iframe
          width="0"
          height="0"
          src="<iframe width="854" height="480" src="https://www.youtube.com/embed/gphA89W5xdQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>"
          frameBorder="0"
          allow=""
          allowFullScreen
        />
        <Content>
          <Sky />
          <Text />
          <Footer />
        </Content>
      </Container>
    );
  }
}
