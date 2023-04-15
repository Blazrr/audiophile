import { loadStripe } from "@stripe/stripe-js";

interface Props {
  lineItems: any;
}

export async function checkout({ lineItems }: Props) {
  let stripePromise: any = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
    }

    return stripePromise;
  };
  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/OrderComplete`,
    cancelUrl: window.location.origin,
  });
}



