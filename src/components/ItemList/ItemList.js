import React from "react";
import {
  MainDiv,
  ItemDiv,
  NameDiv,
  DescDiv,
  PriceDiv,
  Button,
} from "./ItemList.styles";

const ItemList = (props) => {
  const { items, handleDelete, handleEdit } = props;
  return (
    <MainDiv>
      {items.map((item) => (
        <ItemDiv key={item?.id}>
          <NameDiv>{item?.name}</NameDiv>
          <DescDiv>{item?.desc}</DescDiv>
          <PriceDiv>{item?.price}</PriceDiv>
          <Button onClick={() => handleEdit(item)}>Edit</Button>
          <Button remove onClick={() => handleDelete(item?.id)}>
            Remove
          </Button>
        </ItemDiv>
      ))}
    </MainDiv>
  );
};

export default ItemList;
