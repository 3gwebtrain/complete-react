import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

  const priceForStripe = price * 100;
  const publishKey = 'pk_test_s002MxZEERi6wMW2MMei4Vzl00e9Zodoj7';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout

      label='Pay Now'
      name='Afzil corps'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishKey}

    />
  )

}

export default StripeCheckoutButton;