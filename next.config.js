module.exports = {
  images: {
    domains: ["amazon-press.jp", "fakestoreapi.com", "links.papareact.com"],
  },
  env: {
    stripe_public_key: `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`,
  },
};
