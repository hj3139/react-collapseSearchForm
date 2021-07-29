import { ReactNode, useState } from "react";

import { Form, Button, FormProps, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledCollapseSearchForm = styled(Form)`
  position: relative;
  width: 100%;
  background: #ffffff;
  .ant-form-item {
    margin-bottom: 0;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .submit-btn {
    background: #000000;
  }

  .reset-btn,
  .submit-btn {
    width: 140px;
    height: 40px;
  }

  .detail-btn {
    position: absolute;
    width: 120px;
    height: 40px;
    right: 0;
  }

  .button-box {
    margin-top: 10px;
  }
`;

interface CollapseSearchFormProps extends FormProps {
  detail: ReactNode;
}

export const CollapseSearchForm = (props: CollapseSearchFormProps) => {
  const { detail, children, ...rest } = props;
  const [detailStatus, setDetailStatus] = useState(false);

  return (
    <StyledCollapseSearchForm {...rest} onFinish={(e) => console.log(e)}>
      {children}
      {detailStatus && detail}
      <Row justify="center" className="button-box">
        <Button className="submit-btn" htmlType="submit" type="primary">
          검색
        </Button>
        <Button
          className="detail-btn"
          onClick={() => setDetailStatus(!detailStatus)}
        >
          상세 검색 {detailStatus ? <UpOutlined /> : <DownOutlined />}
        </Button>
      </Row>
    </StyledCollapseSearchForm>
  );
};
