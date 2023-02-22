import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [initialState, setState] = useState({
    productCost: 58,
    shippingCost: 5,
    transactionFee: 0.03,
    fixedCosts: 100,
    sellingPrice: 75,
    numberSold: 10,
    productExpenses: 0,
    shippingExpenses: 0,
    transactionExpenses: 0,
    totalExpenses: 0,
    revenue: 0,
    profit: 0
  });

  function updateCalculator(event: any) {
    event.preventDefault();

    const productExpenses = initialState.productCost * initialState.numberSold;
    const shippingExpenses =
      initialState.shippingCost * initialState.numberSold;
    const transactionExpenses =
      initialState.sellingPrice *
      initialState.numberSold *
      initialState.transactionFee;

    const totalExpenses =
      productExpenses +
      shippingExpenses +
      transactionExpenses +
      initialState.fixedCosts;

    const revenue = initialState.sellingPrice * initialState.numberSold;
    const profit = revenue - totalExpenses;

    setState({
      ...initialState,
      [event.target.name]: event.target.value,
      productExpenses,
      shippingExpenses,
      transactionExpenses,
      totalExpenses,
      revenue,
      profit
    });
  }

  return (
    <div className="App">
      <h1>Dropshipping Calculator</h1>

      <div className="content">
        <div className="form">
          <form name="form">
            <div className="group">
              <label htmlFor="product-cost">Product Cost</label>
              <input
                type="number"
                name="productCost"
                value={initialState.productCost}
                onChange={updateCalculator}
              />
            </div>
            <div className="group">
              <label htmlFor="shipping-cost">Shipping Cost</label>
              <input
                type="number"
                name="shippingCost"
                value={initialState.shippingCost}
                onChange={updateCalculator}
              />
            </div>
            <div className="group">
              <label htmlFor="transaction-fee">Transaction Fee</label>
              <input
                type="number"
                name="transactionFee"
                value={initialState.transactionFee}
                onChange={updateCalculator}
              />
            </div>
            <div className="group">
              <label htmlFor="fixed-costs">Fixed Costs</label>
              <input
                type="number"
                name="fixedCosts"
                value={initialState.fixedCosts}
                onChange={updateCalculator}
              />
            </div>
            <div className="group">
              <label htmlFor="selling-price">Selling Price</label>
              <input
                type="number"
                name="sellingPrice"
                value={initialState.sellingPrice}
                onChange={updateCalculator}
              />
            </div>
            <div className="group">
              <label htmlFor="number-sold">Number Sold</label>
              <input
                type="number"
                name="numberSold"
                value={initialState.numberSold}
                onChange={updateCalculator}
              />
            </div>
          </form>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Product Expenses</th>
              <th>Shipping Expenses</th>
              <th>Transaction Expenses</th>
              <th>Total Expenses</th>
              <th>Revenue</th>
              <th>Profit</th>
            </tr>
            <tr>
              <td>{initialState.productExpenses}</td>
              <td>{initialState.shippingExpenses}</td>
              <td>{initialState.transactionExpenses}</td>
              <td>{initialState.totalExpenses}</td>
              <td>{initialState.revenue}</td>
              <td>{initialState.profit}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
