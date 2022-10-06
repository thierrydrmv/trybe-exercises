const COUNTER_DATA = 'COUNTER_DATA';
const MINUS = 'MINUS';

export { COUNTER_DATA, MINUS};

export const counterAction = (count) => ({ type: COUNTER_DATA, count})

export const counterMinus = (count) => ({ type: MINUS, count})
