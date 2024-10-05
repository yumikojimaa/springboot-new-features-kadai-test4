const stripe = Stripe('pk_test_51Q5PEdJobDsCoyDPPXbCJyWNhQ4UF9zpTII1NmmVU1VhVfL4oEkyUIItXKqD5twgsSfU9WmfxPO7JRqdn0CQzR3A00mDGwdeqQ');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });