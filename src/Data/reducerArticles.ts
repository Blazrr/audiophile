import { useEffect } from 'react';
import { defaultArticles } from '../../articles';
import _ from "lodash";
import { article } from '../../typing';

const articles: article[] = JSON.parse(localStorage.getItem("articles")) || defaultArticles

export const reducerArticles = (state = articles, action: any) => {
  const cloneState = _.cloneDeep(state);
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      return cloneState.map(item => {
        if (item.name == action.payload.itemName){
          return {...item , qty: item.qty + action.payload.count}
        }
        return item
      })
    default:
      return state;
  }
};


