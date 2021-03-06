export const getAssets = () => {
  return {
    type: "GET_ASSETS"
  };
}

export const getAssetDetail = (category, id) => {
  return {
    type: "GET_ASSET_DETAIL",
    category,
    id
  };
}

export const assetsReceived = (results) => {
  return {
    type: "ASSETS_RECEIVED",
    results: results
  }
}

export const setAssetsFilter = (e, target) => {
  return {
    type: "SET_ASSETS_FILTER",
    filter: target && target.value
  };
}

export const assetsSearch = (e, target) => {
  return {
    type: "ASSETS_SEARCH",
    search: target && target.value
  };
}

export const assetBuy = (category, id, fillTx) => {
  return {
    type: "ASSETS_BUY",
    category,
    id,
    fillTx
  };
}

export const getPublishStatus = (category, id) => {
  return {
    type: "GET_PUBLISH_STATUS",
    category,
    id
  };
}

export const setAssetStatus = () => {
  return {
    type: "ASSETS_STATUS",
    status: ''
  };
}

export const checkIsOwner = (category, id, locationParams) => {
  return {
    type: "CHECK_IS_OWNER",
    category,
    id,
    locationParams
  };
}

export const checkBlanceEnough = (amount) => {
  return {
    type: "CHECK_BLANCE_ENOUGH",
    amount
  };
}

export const takeOut = (category, id, currency) => {
    return {
        type: "TAKE_OUT",
        category,
        id,
        currency
    };
}
