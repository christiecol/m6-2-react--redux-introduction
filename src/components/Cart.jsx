import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import Button from "./Button";
import { CartItem } from "./CartItem";
import { getStoreItemArray, getCartTotal } from "../reducers";

export const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  const total = useSelector(getCartTotal);

  // console.log(state, storeItems);
  return (
    <Wrapper>
      <YourCart>
        <h2>Your Cart</h2>
        <p>1 Item</p>
      </YourCart>

      <div>
        {storeItems.map((item) => (
          <CartItem itemId={item.id} key={item.id} />
        ))}
      </div>

      <TotalDiv>
        <Total>
          Total: <strong>{total}</strong>
        </Total>
        <Button>Purchase</Button>
      </TotalDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  color: white;
`;

const YourCart = styled.div`
  margin-bottom: 40px;
`;

const TotalDiv = styled.div`
  margin-top: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.p`
  font-size: 23px;
`;
