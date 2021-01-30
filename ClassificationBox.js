import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ClassificationBoxCheckbox from "./ClassificationBoxCheckbox";

export default function ClassificationBox({
  categories,
  // handleCheckbox,
  // state,
}) {
  return (
    <ClassificationBoxWrapper>
      <CategoryBtn>카테고리</CategoryBtn>
      <ClassificationBoxCheckbox
        categories={categories}
        // handleCheckbox={handleCheckbox}
      />
    </ClassificationBoxWrapper>
  );
}

const ClassificationBoxWrapper = styled.section`
  border: 1px solid #ddd;
  height: 244px;
`;

const CategoryBtn = styled.button`
  height: 35px;
  width: 200px;
  border-radius: 3px;
  color: white;
  background-color: #006633;
`;
