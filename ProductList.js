import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import ClassificationBox from "./Components/ClassificationBox/ClassificationBox";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  // const [state, setState] = useState({
  //   categoryNameIdx1: false,
  //   categoryNameIdx2: false,
  //   categoryNameIdx3: false,
  // });
  // function handleCheckbox(e) {
  //   const { name, checked } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: checked }));
  // }

  useEffect(() => {
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => setCategories(res.results));
  });

  return (
    <ProductListWrap>
      <Nav>네브바 자리</Nav>
      <Header>
        <MenuName>음료</MenuName>
        <CurrentLocation>MENU 음료</CurrentLocation>
      </Header>
      <ClassificationBox
        categories={categories}
        // state={state}
        // handleCheckbox={handleCheckbox}
      />
      <ProductCategory categories={categories} />
    </ProductListWrap>
  );
}

const ProductListWrap = styled.div`
  padding: 0px 125px;
  font-family: $nanumGothic;
`;

const Nav = styled.nav`
  border: 1px solid black;
  height: 120px;
  width: 100%;
`;

const Header = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 98px;
`;

const MenuName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const CurrentLocation = styled.div`
  font-size: 12px;
  color: #222222;
`;
