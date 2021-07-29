import { Checkbox, Form, FormInstance, FormItemProps } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { useState } from "react";
import styled, { css } from "styled-components";

const StyledFormCheckBox = styled(Form.Item)<{ $circle?: boolean }>`
  .ant-checkbox-checked .ant-checkbox-inner {
    background: #000000 !important;
  }
  ${(props) =>
    props.$circle &&
    css`
      .ant-checkbox-inner,
      .ant-checkbox-inner,
      .ant-checkbox:hover {
        border-radius: 10px;
      }
      .ant-checkbox-checked::after {
        border: none;
      }
    `}
`;

interface FormCheckBoxProps extends FormItemProps {
  option: { label: string; value: string }[];
  circle?: boolean;
  form: FormInstance;
}

export const FormCheckBox = (props: FormCheckBoxProps) => {
  const { option, name, form, circle, ...rest } = props;
  const [checkAll, setCheckAll] = useState(false);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    form.setFieldsValue({
      [`${name}`]: e.target.checked ? option.map((arr) => arr.value) : [],
    });
    setCheckAll(e.target.checked);
  };

  return (
    <StyledFormCheckBox {...rest} $circle={circle}>
      <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        전체
      </Checkbox>
      <Form.Item name={name} noStyle>
        <Checkbox.Group options={option} />
      </Form.Item>
    </StyledFormCheckBox>
  );
};
