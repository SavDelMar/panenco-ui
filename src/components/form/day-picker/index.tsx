import cx from 'classnames';
import { Icon, PrimaryButton, TextInput } from 'components';
import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps } from 'react-day-picker/types/Props';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { useMode, useTheme } from 'utils/hooks';
import { DateUtils } from 'react-day-picker';

import { setHours, setMinutes } from 'date-fns';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import { WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';

function parseDate(str, format, locale): Date | undefined {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale): string {
  return dateFnsFormat(date, format, { locale });
}

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export interface PickerProps extends DayPickerInputProps {
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
  isTimePicker: boolean;
  onChange: (value: any) => {};
  format: string;
  value?: Date;
}

const transformTime = () => {
  const date = new Date();
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

const defaultFormat = 'dd/MM/yyyy';
export const DayPicker = React.forwardRef<HTMLDivElement, PickerProps>(
  (
    {
      format = defaultFormat,
      onChange,
      isTimePicker,
      value,
      placeholder = format,
      iconAfter = Icon.icons.calendar,
    }: PickerProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    let dayPickerInputRef;

    const hideDayPicker = () => {
      dayPickerInputRef.hideDayPicker();
    };

    const [day, setDay] = React.useState(new Date());

    const handleDayChange = (selectedDay): void => {
      setDay(selectedDay);
    };

    const OverlayComponent = ({ children, ...overlayComponentProps }: { children: any }) => {
      const [dateTime, setDateTime] = React.useState(transformTime());

      const submitAndClose = () => {
        const newTempTo = setHours(setMinutes(day, Number(dateTime.slice(-2))), Number(dateTime.slice(0, 2)));

        onChange(newTempTo);
        setDay(newTempTo);
        hideDayPicker();
      };

      return (
        <div className="overlay" {...overlayComponentProps}>
          {children}
          {isTimePicker ? (
            <div className="footer">
              <MaskedInput
                id="my-input-id"
                render={(customRef, restProps) => (
                  <TextInput
                    id="mask"
                    name="mask"
                    title="Time"
                    key="mask"
                    iconAfter={Icon.icons.clock}
                    inputRef={customRef}
                    {...restProps}
                  />
                )}
                mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
                placeholder="--:--"
                pipe={createAutoCorrectedDatePipe('HH:MM')}
                onChange={(e): void => {
                  setDateTime(e.target.value);
                }}
                value={dateTime}
              />
              <PrimaryButton className="submitTime" type="button" onClick={submitAndClose}>
                Save
              </PrimaryButton>
            </div>
          ) : null}
        </div>
      );
    };

    return (
      <StyledDayPicker className={cx('dayPickerInput')} theme={theme} mode={mode} ref={ref}>
        <DayPickerInput
          ref={(curRef) => {
            dayPickerInputRef = curRef;
          }}
          formatDate={formatDate}
          format={format}
          parseDate={parseDate}
          className="wrapper"
          hideOnDayClick={!isTimePicker}
          overlayComponent={OverlayComponent}
          dayPickerProps={{
            weekdaysShort: WEEKDAYS_SHORT,
            firstDayOfWeek: 0,
          }}
          onDayChange={handleDayChange}
          placeholder={placeholder}
          value={value}
          component={(inputComponentProps): JSX.Element => <TextInput iconAfter={iconAfter} {...inputComponentProps} />}
        />
      </StyledDayPicker>
    );
  },
);

DayPicker.defaultProps = {
  isTimePicker: false,
};