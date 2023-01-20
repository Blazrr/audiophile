import { defaultArticles } from './../../articles';
import _ from "lodash";

const articles = defaultArticles
export const reducerArticles = (state = articles, action: any) => {
  const cloneState = _.cloneDeep(state);
  switch (action.type) {
    default:
      return state;
  }
};
