import { FormItemProps, Select } from "antd";
import { Form } from "antd";
import styled from "styled-components";

const StyledFormSelect = styled(Form.Item)`
  width: 100%;

  .ant-select {
    width: 180px;
  }
`;

interface FormSelectProps extends FormItemProps {
  option: { title: string; value: string }[];
}
const { Option } = Select;

export const FormSelect = (props: FormSelectProps) => {
  const { option, ...rest } = props;
  return (
    <StyledFormSelect {...rest} initialValue={"all"}>
      <Select>
        {option.map((arr, idx) => (
          <Option key={idx} value={arr.value}>
            {arr.title}
          </Option>
        ))}
      </Select>
    </StyledFormSelect>
  );
};
