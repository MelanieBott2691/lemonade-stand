import React from 'react';
import './PurchaseInfo.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function PurchaseInfo(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Recent Purchases</Card.Title>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img
                    className="img-size"
                    variant="top"
                    src="https://cdn3.volusion.com/65wgp.sm6ue/v/vspfiles/photos/GT66AA-2.jpg?v-cache=1569508703"
                    thumbnail
                  />
                </td>
                <td>Friendship Bracelets</td>
                <td>$5.00</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <img
                    className="img-size"
                    variant="top"
                    src="https://cdn.shopify.com/s/files/1/1133/3328/products/yummy-luv-sticker-pack-2019_800x.png?v=1564258685"
                  />
                </td>
                <td>Cute Sticker Pack</td>
                <td>$10.00</td>
                <td>Shipped</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <img
                    className="img-size"
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/I/61LKtry2iOL._AC_SX425_.jpg"
                  />
                </td>
                <td>Fluffy Slime</td>
                <td>$6.00</td>
                <td>Order Processing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
}
