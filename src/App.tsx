import { Layout, Form } from "antd";
import {
  CollapseSearchForm,
  FormCheckBox,
  FormInput,
  FormDateRange,
} from "component";
import { FormSelect } from "component/Form/FormSelect";
import styled from "styled-components";

const { Content } = Layout;

const StyledApp = styled(Layout)`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 750px;
  height: 100vh;
`;

const App = () => {
  const [form] = Form.useForm();
  const storeStatusOptions = [
    { label: "신청", value: "APPLY" },
    { label: "심사", value: "JUDGE" },
    { label: "보류", value: "HOLD" },
    { label: "승인", value: "OKAY" },
    { label: "해지", value: "TERMINATION" },
    { label: "수정요청", value: "MODIFYINFO" },
  ];

  const storeDivisionOptions = [
    { label: "개인", value: "individual" },
    { label: "법인", value: "corporation" },
  ];

  const areaOptions = [
    {
      title: "서울",
      value: "seoul",
    },
    {
      title: "부산",
      value: "busan",
    },
    {
      title: "전체",
      value: "all",
    },
  ];

  return (
    <StyledApp>
      <Content>
        <CollapseSearchForm
          form={form}
          detail={
            <>
              <FormInput
                label="전화번호"
                colon={false}
                labelCol={{ span: 4 }}
                labelAlign="left"
                inputProps={{ placeholder: "전화번호를 입력해주세요" }}
              />
              <FormCheckBox
                label="가맹점 구분"
                circle
                form={form}
                name="storeDivision"
                labelAlign="left"
                labelCol={{ span: 4 }}
                colon={false}
                option={storeDivisionOptions}
              />
              <FormSelect
                name="area"
                label="지역"
                labelCol={{ span: 4 }}
                colon={false}
                labelAlign="left"
                option={areaOptions}
              />
            </>
          }
        >
          <FormInput
            label="가맹점"
            colon={false}
            labelCol={{ span: 4 }}
            labelAlign="left"
            inputProps={{ placeholder: "가맹점을 입력해주세요" }}
          />
          <FormCheckBox
            form={form}
            label="가맹점 처리상태"
            name="storeStatus"
            labelAlign="left"
            labelCol={{ span: 4 }}
            colon={false}
            option={storeStatusOptions}
          />
          <FormDateRange
            name="createdDate"
            form={form}
            label="등록일자"
            labelCol={{ span: 4 }}
            labelAlign="left"
            colon={false}
          />
        </CollapseSearchForm>
      </Content>
    </StyledApp>
  );
};

export default App;
