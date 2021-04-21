import { Col, GridContainer, Row } from 'components';
import GridDocs from 'components/grid/DOCS.md';
import GridReadme from 'components/grid/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';

const Column = () => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      padding: '8px 0px',
      border: '1px solid #0065ff',
      fontSize: '12px',
    }}
  />
);

export default decorator('Grid', GridDocs, GridReadme).add('Grid component', () => (
  <>
    <GridContainer>
      <Row>
        <Col s="2" m="2" l="6">
          <Column />
        </Col>

        <Col s="2" m="6" l="6">
          <Column />
        </Col>
      </Row>
    </GridContainer>
    <GridContainer>
      <Row>
        <Col s="4" m="8" l="12">
          <Column />
        </Col>
      </Row>
    </GridContainer>
    <GridContainer>
      <Row>
        <Col s="2" m="3" l="2">
          <Column />
        </Col>
        <Col s="2" m="5" l="10">
          <Column />
        </Col>
      </Row>
    </GridContainer>
    {/* <Row>
      <Col xs="5">
        <Column />
      </Col>
      <Col xs="2">
        <Column />
      </Col>
      <Col xs="5">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col xs="4">
        <Column />
      </Col>
      <Col xs="4">
        <Column />
      </Col>
      <Col xs="4">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col xs="3">
        <Column />
      </Col>
      <Col xs="6">
        <Column />
      </Col>
      <Col xs="3">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col xs="2">
        <Column />
      </Col>
      <Col xs="8">
        <Column />
      </Col>
      <Col xs="2">
        <Column />
      </Col>
    </Row> */}
  </>
));
