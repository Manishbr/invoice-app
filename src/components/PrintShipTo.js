import React, { forwardRef } from "react";

const PrintShipTo = forwardRef(({ shipToAddress }, ref) => (
  <div ref={ref}>
    <h6>Ship To:</h6>
    <p>{shipToAddress.name}</p>
    <p>{shipToAddress.street}</p>
    <p>
      {shipToAddress.city}, {shipToAddress.state} {shipToAddress.zip}
    </p>
    <p>{shipToAddress.country}</p>
    <p>Code: {shipToAddress.code}</p>
  </div>
));

export default PrintShipTo;
