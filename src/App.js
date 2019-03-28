import React from "react";
import { connect } from "react-redux";
import actions from "./actions";

function App({
  haveCurrency,
  markCurrency,
  currency,
  searchTerm,
  searchTermChanged
}) {
  return (
    <section>
      <h1>Currency List</h1>

      <form>
        <div>
          <input
            style={{ width: "100%" }}
            type="text"
            name="search"
            placeholder="Search Currencies"
            value={searchTerm}
            onChange={e => searchTermChanged(e.target.value)}
          />
        </div>
      </form>

      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Code</th>
            <th>Number</th>
            <th>Countries</th>
            <th>Currency</th>
            <th>Have?</th>
          </tr>
        </thead>
        <tbody>
          {currency.map(_Currency => (
            <tr key={_Currency.currency}>
              <td>{_Currency.code}</td>
              <td>{_Currency.number}</td>
              <td>{_Currency.countries}</td>
              <td>{_Currency.currency}</td>
              <td>
                {haveCurrency.includes(_Currency.currency) ? (
                  "You Have!"
                ) : (
                  <button
                    type="button"
                    onClick={() => markCurrency(_Currency.currency)}
                  >
                    Verify
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default connect(
  store => store,
  actions
)(App);
