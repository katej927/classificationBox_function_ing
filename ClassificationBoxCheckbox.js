import React from "react";
import styled, { ThemeProvider } from "styled-components";

export default function ClassificationBoxCheckbox({
  categories,
  // handleCheckbox,
  // state,
}) {
  return (
    <ClassificationBoxCheckboxWrapper>
      {categories.map((category, idx) => {
        return (
          <Label>
            <Checkbox
            // onClick={handleCheckbox}
            // name={"categoryNameIdx" + idx}
            // checked={state.categoryNameIdx1}
            />
            <CheckboxText>{category.name}</CheckboxText>
          </Label>
        );
      })}
    </ClassificationBoxCheckboxWrapper>
  );
}

const ClassificationBoxCheckboxWrapper = styled.section`
  border: 1px solid orange;
`;

// 체크박스 묶음
const Label = styled.label``;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  height: 20px;
`;

const CheckboxText = styled.span``;
