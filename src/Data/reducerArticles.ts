import { useEffect } from "react";
import { defaultArticles } from "../../articles";
import _ from "lodash";
import { article } from "../../typing";

const articles: article[] =
  JSON.parse(localStorage.getItem("articles")) || defaultArticles;

export const reducerArticles = (state = articles, action: any) => {
  const cloneState = _.cloneDeep(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return cloneState.map((item) => {
        if (item.name == action.payload.itemName) {
          return { ...item, qty: item.qty + action.payload.count };
        }
        return item;
      });
    case "DECREMENT_ITEM":
      return cloneState.map((item) => {
        if (item.title == action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    case "INCREMENT_ITEM":
      return cloneState.map((item) => {
        if (item.title == action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    case "REMOVE_ALL":
      return cloneState.map((item) => {
        return { ...item, qty: 0 };
      });
    default:
      return state;
  }
};
