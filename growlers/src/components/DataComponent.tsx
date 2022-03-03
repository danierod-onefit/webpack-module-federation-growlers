import React, { ReactElement } from "react";

import { useSnapshot } from "valtio";
import store, { TapStore } from "../store";

import { MFE_BORDER } from "../constants";

const DataComponent: React.FC<{
  children: (state: TapStore) => ReactElement<any, any>;
}> = ({ children }) => {
  const { taps, filteredTaps, alcoholLimit, cart, searchText } =
    useSnapshot(store);
  return children({
    alcoholLimit,
    searchText,
    taps: [...taps],
    filteredTaps: [...filteredTaps],
    cart: [...cart],
  });
};

export default DataComponent;
