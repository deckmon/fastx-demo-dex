const GET_ASSETS = 'GET_ASSETS';
const SET_ASSETS_FILTER = 'SET_ASSETS_FILTER';
const ASSETS_RECEIVED = 'ASSETS_RECEIVED';
const ASSETS_SEARCH = 'ASSETS_SEARCH';
const ASSET_DETAIL_RECEIVED = 'ASSET_DETAIL_RECEIVED';
const ALLPS_RECEIVED = 'ALLPS_RECEIVED';

const initialState = {
  isLoading: false,
  results: [],
  filter: '',
  search: '',
  asset: {},
  allPs: [],
  amount: 0
};

export default function assets(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ASSETS:
      return {
        ...state
      };
    case ASSETS_RECEIVED:
      return {
        ...state,
        results: action.results
      };
    case ASSET_DETAIL_RECEIVED:
      return {
        ...state,
        asset: action.asset
      };
    case SET_ASSETS_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    case ASSETS_SEARCH:
      return {
        ...state,
        search: action.search
      };
    case ALLPS_RECEIVED:
      return {
        ...state,
        allPs: action.allPs
      };
    default:
      return state;
  }
}