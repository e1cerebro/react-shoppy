export const processOrder = order => {
  dispatch({ type: PROCESS_ORDER, payload: order });
  console.log(order);
  history.push(`/order-summarry`);
};
