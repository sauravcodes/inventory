import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import firebase from "../../firebase";
import {
  Wrapper,
  AddItem,
  ItemsDiv,
  Input,
  Button,
  TextDiv,
} from "./Item.styles";

const Item = () => {
  const [itemDb, setItemDb] = useState([]);
  const [values, setValues] = useState({
    name: "",
    desc: "",
    price: "",
  });
  const [updateValue, setUpdateValue] = useState({
    updatedname: "",
    updateddesc: "",
    updatedprice: "",
    itemID: "",
  });

  const fetchItem = () => {
    const firestore = firebase.database().ref("/newItem");
    firestore.on("value", (res) => {
      const itemData = res.val();
      let itemInfo = [];
      for (let id in itemData) {
        itemInfo.push({
          id: id,
          name: itemData[id].itemName,
          desc: itemData[id].itemDesc,
          price: itemData[id].itemPrice,
        });
      }
      setItemDb(itemInfo);
    });
  };
  useEffect(() => {
    fetchItem();
  }, []);

  const handleAddItem = async () => {
    const firestore = firebase.database().ref("/newItem");
    let data = {
      itemName: values.name,
      itemDesc: values.desc,
      itemPrice: values.price,
    };
    await firestore.push(data);
    setValues({
      name: "",
      desc: "",
      price: "",
    });
  };

  const handleEditItem = (data) => {
    setUpdateValue({
      updatedname: data.name,
      updateddesc: data.desc,
      updatedprice: data.price,
      itemID: data.id,
    });
  };

  const handleUpdateItem = async () => {
    const firestore = firebase
      .database()
      .ref("/newItem")
      .child(updateValue.itemID);
    await firestore.update({
      itemName: updateValue.updatedname,
      itemDesc: updateValue.updateddesc,
      itemPrice: updateValue.updatedprice,
    });
    setUpdateValue({
      updatedname: "",
      updateddesc: "",
      updatedprice: "",
    });
  };

  const handleDeleteItem = async (id) => {
    const firestore = firebase.database().ref("/newItem").child(id);
    await firestore.remove();
  };
  const handleName = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleDesc = (e) => {
    setValues({ ...values, desc: e.target.value });
  };
  const handlePrice = (e) => {
    setValues({ ...values, price: e.target.value });
  };

  const handleUpdateName = (e) => {
    setUpdateValue({ ...updateValue, updatedname: e.target.value });
  };
  const handleUpdateDesc = (e) => {
    setUpdateValue({ ...updateValue, updateddesc: e.target.value });
  };
  const handleUpdatePrice = (e) => {
    setUpdateValue({ ...updateValue, updatedprice: e.target.value });
  };
  return (
    <Wrapper>
      <ItemsDiv>
        <AddItem>
          <Input
            type="text"
            placeholder="item name"
            value={values.name}
            onChange={handleName}
          />
          <Input
            type="text"
            placeholder="description"
            value={values.desc}
            onChange={handleDesc}
          />
          <Input
            type="number"
            placeholder="price"
            value={values.price}
            onChange={handlePrice}
          />
          <Button
            add
            disabled={!values.name || !values.desc || !values.price}
            onClick={handleAddItem}
          >
            Add Item
          </Button>
        </AddItem>
        <AddItem>
          <Input
            type="text"
            placeholder="item name"
            value={updateValue.updatedname}
            onChange={handleUpdateName}
          />
          <Input
            type="text"
            placeholder="description"
            value={updateValue.updateddesc}
            onChange={handleUpdateDesc}
          />
          <Input
            type="number"
            placeholder="price"
            value={updateValue.updatedprice}
            onChange={handleUpdatePrice}
          />
          <Button
            disabled={
              !updateValue.updatedname ||
              !updateValue.updateddesc ||
              !updateValue.updatedprice
            }
            onClick={handleUpdateItem}
          >
            Update Item
          </Button>
        </AddItem>
      </ItemsDiv>

      {itemDb.length !== 0 ? (
        <ItemList
          items={itemDb}
          handleEdit={handleEditItem}
          handleDelete={handleDeleteItem}
        />
      ) : (
        <TextDiv>
          Oops no Item in the inventory, plz add by clicking on Add Item
        </TextDiv>
      )}
    </Wrapper>
  );
};

export default Item;
