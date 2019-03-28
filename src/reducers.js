import NC from "./currencies";

const initialState = {
  currency: NC,
  searchTerm: "",
  haveCurrency: []
};

export default function currency(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_INPUT_CHANGED":
      const { searchTerm } = action.payload;
      return {
        ...state,
        searchTerm: searchTerm,
        currency: searchTerm
          ? NC.filter(
              currency =>
                currency.currency
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) > -1
            )
          : NC
      };

    case "MARK_CURRENCY":
      return {
        ...state,
        haveCurrency: [...state.haveCurrency, action.payload.currency]
      };

    default:
      return state;
  }
}
