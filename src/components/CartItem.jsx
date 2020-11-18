import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { removeItem, updateQuantity } from "./actions";

export const CartItem = ({ itemId }) => {
  const item = useSelector((state) => {
    return state[itemId];
  });

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(item));
  };

  return (
    <ItemDiv>
      <ItemNameDiv>
        <ItemName>{item.title}</ItemName>
        <DeleteIcon onClick={handleDelete}>X</DeleteIcon>
      </ItemNameDiv>
      <QuantityDiv>
        <p>
          Quantity:
          <span>
            <Input
              onChange={(ev) => {
                dispatch(
                  updateQuantity({ id: item.id, quantity: ev.target.value })
                );
              }}
              value={item.quantity}
            ></Input>
          </span>
        </p>
      </QuantityDiv>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  border: 1px dashed white;
`;

const ItemNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const ItemName = styled.h3``;

const DeleteIcon = styled.h2`
  cursor: pointer;
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: end;
  padding-left: 15px;
  background-color: #522133;
`;

const Input = styled.input`
  width: 40px;
  margin-left: 20px;
`;
