import redux, { applyMiddleware } from "redux";

import pkg from "redux-logger";

const createStore = redux.legacy_createStore;

const bindActionCreators = redux.bindActionCreators;

const combineReducers = redux.combineReducers;

const { createLogger } = pkg;

const logger = createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";

const CAKE_RESTOCKED = "CAKE_RESTOCKED ";

const ICE_CREAM_ORDER = "ICE_CREAM_ORDER";

const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const orderIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_ORDER,
    payload: qty,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: qty,
  };
};

const initialStateCake = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const intialStateIceCream = {
  numOfIceCreams: 10,
  anotherProperty: 0,
};

//(previousState, action) => newState

const cakeReducer = (state = initialStateCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = intialStateIceCream, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDER:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store-initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.restockCake(2);
actions.orderIceCream();
actions.restockIceCream(3);

unsubscribe();
