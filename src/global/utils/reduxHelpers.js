/**
 *
 * @param {String} type - Fully qualified Ducks name for action
 * @example
 * export const increaseCount = creatAction("app/counter/INCREASE")
 */
export const createAction = type => {
  const action = payload => (payload === undefined ? { type } : { type, payload });
  action.toString = () => type;
  return action;
};

/**
 *
 * @param {Object} initialState - Initial reducer state
 * @param {Object} handlers - Hash Table of handlers.
 * @example
 * import { setCount, increaseCount, decreaseCount } from './actions'
 *
 * const reducer = createReducer(init, {
 *   [increaseCount]: (state) => ({ ...state, count: state.count + 1 }),
 *   [decreaseCount]: (state) => ({ ...state, count: state.count - 1 }),
 *   [setCount]: (state, { payload }) => ({ ...state, count: payload })
 * });
 */
export const createReducer = (initialState, handlers) => (state = initialState, action) =>
  handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
