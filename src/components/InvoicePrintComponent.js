import React, { forwardRef } from "react";
import { Button, Card, Container, Row, Col, Table ,Form,Modal} from "react-bootstrap";
import { useSelector , useDispatch } from 'react-redux';


const InvoicePrintComponent = forwardRef(({ products }, ref) => {
    return (
      <div ref={ref}>
        <h1>Invoice</h1>
        <table>
          <thead>
            <tr>
              <th>Line #</th>
              <th>Buyer's Part #</th>
              <th>Vendor Item #</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>UOM</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          <tbody>
  <tr>
    <td>1</td>
    <td>Example Buyer Part</td>
    <td>Example Vendor Item</td>
    <td>Example Description</td>
    <td>10</td>
    <td>PCS</td>
    <td>100</td>
    <td>1000</td>
  </tr>
</tbody>

          </tbody>
        </table>
      </div>
    );
  });

export default InvoicePrintComponent;
