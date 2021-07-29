import { Form, DatePicker, FormItemProps, Button, FormInstance } from "antd";
import { DateRange, DateRangeMethods } from "enum";
import moment from "moment";
import styled from "styled-components";

const { RangePicker } = DatePicker;

const StyledFormDateRange = styled(Form.Item)`
  .ant-btn {
    width: 90px;
    height: 32px;
  }
`;

interface FormDateRangeProps extends FormItemProps {
  form: FormInstance;
}
export const FormDateRange = (props: FormDateRangeProps) => {
  const { form, name, ...rest } = props;

  const handleChangeShortcut = (key: DateRange) => {
    let started = moment().startOf("days");
    const ended = moment().endOf("days");

    switch (key) {
      case DateRange.TODAY:
        started.subtract(0, "days");
        break;

      case DateRange.RECENT_WEEK:
        started.subtract(7, "days");
        break;

      case DateRange.ALL:
        started = moment("2020-01-01");
        break;

      case DateRange.RECENT_MONTH:
        started.subtract(1, "months");
        break;
      default:
        break;
    }
    form.setFieldsValue({
      [`${name}`]: [started, ended],
    });
  };

  return (
    <StyledFormDateRange {...rest}>
      <Form.Item name={name} noStyle>
        <RangePicker
          onChange={(e) => console.log(e)}
          placeholder={["시작일", "종료일"]}
        />
      </Form.Item>
      <Button onClick={() => handleChangeShortcut(DateRange.TODAY)}>
        {DateRangeMethods.getLabel(DateRange.TODAY)}
      </Button>
      <Button onClick={() => handleChangeShortcut(DateRange.RECENT_WEEK)}>
        {DateRangeMethods.getLabel(DateRange.RECENT_WEEK)}
      </Button>
      <Button onClick={() => handleChangeShortcut(DateRange.RECENT_MONTH)}>
        {DateRangeMethods.getLabel(DateRange.RECENT_MONTH)}
      </Button>
      <Button onClick={() => handleChangeShortcut(DateRange.ALL)}>
        {DateRangeMethods.getLabel(DateRange.ALL)}
      </Button>
    </StyledFormDateRange>
  );
};
