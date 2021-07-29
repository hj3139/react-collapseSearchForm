import { Form, FormItemProps, Input, InputProps } from "antd";
import styled from "styled-components";

const StyledFormInput = styled(Form.Item)`
  .ant-input {
    width: 400px;
  }
`;

interface FormInputProp extends FormItemProps {
  inputProps?: InputProps;
}

export const FormInput = (props: FormInputProp) => {
  const { inputProps, ...rest } = props;
  return (
    <StyledFormInput {...rest}>
      <Input {...inputProps} />
    </StyledFormInput>
  );
};
