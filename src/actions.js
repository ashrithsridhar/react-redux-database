function searchTermChanged(searchTerm) {
  return {
    type: "SEARCH_INPUT_CHANGED",
    payload: { searchTerm }
  };
}

function markCurrency(currency) {
  return {
    type: "MARK_CURRENCY",
    payload: { currency }
  };
}

export default {
  searchTermChanged,
  markCurrency
};
