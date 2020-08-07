class PayPalApp extends Component {
  state = {
    showPaypal: false
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PayPalButton />;
    } else {
      return (
        <div className="main">
          <h2> Buy this Mercedes at a giveaway price (Super Cheap) </h2>
          <img alt="Mercedes G-Wagon" src={Car} />
          <h3>
            <b>$200</b>
          </h3>
          <button onClick={this.showPayPalButton}> Pay </button>
        </div>
      );
    }
  }
}

export default PayPalApp;
