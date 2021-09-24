import { Col, DateInput, DayPicker, Row } from 'components';
import DateInputDocs from 'components/form/date-input/date-input-DOCS.md';
import DateInputReadme from 'components/form/date-input/date-input-README.md';
import README from 'components/select/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const dateFormatMapping = {
  yy: '21',
  yyyy: '2021',
  M: '1',
};

export default decorator('DayPicker', DateInputDocs, README).add('DayPicker', () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="12" m="12" l="12">
          <DayPicker value={value} onChange={handleChange} />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="12" m="12" l="12">
          <DayPicker
            isTimePicker
            value={value}
            onChange={handleChange}
            format="MM/dd/yyyy HH:mm"
            placeholder="mm/dd/yy 00:00"
          />
        </Col>
      </Row>
    </WrappedComponent>
  );
});

const inputs1 = [
  {
    title: 'Day',
    type: 'date',
    format: 'dd',
    placeholder: '01',
  },
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

const inputs2 = [
  {
    title: 'Day',
    type: 'date',
    format: 'dd',
    placeholder: '01',
  },
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '01',
  },
];

const inputs3 = [
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

export const DateInputStory = decorator('DateInput', DateInputDocs, DateInputReadme).add('DateInput', () => {
  return (
    <WrappedComponent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs1} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs2} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs3} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs1} divider="/" />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs2} divider="/" />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs3} divider="/" />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});