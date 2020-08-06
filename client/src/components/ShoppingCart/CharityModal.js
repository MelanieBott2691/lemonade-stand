import React from 'react';
import RadioButton from '../Checkout/RadioButton';
import {
  Modal,
  Button,
  Form,
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import charity from '../../assets/images/charity.png';
import './CharityModal.css';

class CharityModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false
    };
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  render() {
    return (
      <div>
        <Button
          id="charityModal"
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => this.handleModalShowHide()}>
          Select a Charity
        </Button>
        <br />

        <Modal id="modal" show={this.state.showHide} className="modal-checkout">
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Container>
              <Col>
                <Row>
                  <img
                    src={charity}
                    alt="header image"
                    variant="top"
                    height={200}
                    width={400}
                    className="card-image"
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <hr />
                  <Modal.Title></Modal.Title>
                </Row>
              </Col>
            </Container>
          </Modal.Header>
          <Modal.Body className="modal-container">
            <Card.Body>
              <Card.Title>Choose a Charity To Donate To:</Card.Title>
              <br />

              <div className="row">
                <div className="column">
                  <a
                    href="https://secure2.wish.org/site/SPageServer?pagename=donate_now&ft=SPEA&fi=20_10&otgmthg=true&level1=1000&level2=500&level3=250&level4=125&level5=75&presel=level4&Campaign_ID=MNOO%25fy%25&Appeal_ID=%25fy%25ON-XXX-SRCH&Package_ID=OT-NT-GIO&Subtype=DEV-Multimedia%20Online&gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_term=make-a-wish%20donate&utm_campaign=Paid&gclid=CjwKCAjw1K75BRAEEiwAd41h1P9D5CR7ax2-0HQOND931UGC7V6Qs_1dmJ-dZbZCsPEwsAqAXl9NURoCZxEQAvD_BwE"
                    target="_blank">
                    Make A Wish
                  </a>
                </div>
              </div>

              <div className="column">
                <a
                  href="https://www.redcross.org/donate/D072002.html/?adobe_mc_sdid=SDID%3D05FDF77404FC8745-39ECDBA5D918592D%7CMCORGID%3D723A22C757518E2C7F000101@AdobeOrg%7CTS%3D1596749763&adobe_mc_ref=https:%2F%2Fwww.google.com%2F"
                  target="_blank">
                  Red Cross
                </a>
              </div>

              <div className="row">
                <div className="column">
                  <a
                    href="https://www.habitat.org/together-we-build?source_code=DNWW14071000043&mrkgadid=3311692909&mrkgcl=1005&mrkgen=gtext&mrkgbflag=1&mrkgcat=exact&device=c&network=g&matchtype=e&locationid=%7bloc_phyiscal_ms%7d&creative=318577458933&targetid=kwd-15438344272&campaignid=138111921&adgroupid=8353760961&gclid=CjwKCAjw1K75BRAEEiwAd41h1KU9pDapgo7jbPPnjI-E2XxmWUKLfQeitqZsvHm25Ce0ldsscnm0eBoCjX4QAvD_BwE&gclsrc=aw.ds"
                    target="_blank">
                    Habitat for Humanity
                  </a>
                </div>
              </div>

              <div className="column">
                <a
                  href="https://support.bestfriends.org/site/Donation2?df_id=2884&mfc_pref=T&2884.donation=form1&gclid=CjwKCAjw1K75BRAEEiwAd41h1DugvBFWpL1rTykJeiOx-qVmWsMH0kWO8SygYEz0rH41VhfmMg-MrBoC5Q0QAvD_BwE"
                  target="_blank">
                  Best Friends Animal Society
                </a>
              </div>
              <div className="column">
                <a href="/shoppingcart">Local Charity</a>
              </div>
              <Button
                className="checkout-btn"
                variant="primary"
                onClick={() => this.handleModalShowHide()}>
                Return to Complete Checkout
              </Button>
            </Card.Body>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CharityModal;
