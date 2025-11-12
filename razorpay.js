
/**
 * Placeholder Razorpay API example (serverless).
 * Do NOT use in production without adding authentication & validating inputs.
 *
 * Set env variables in Vercel:
 * RAZORPAY_KEY_ID
 * RAZORPAY_KEY_SECRET
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  // Example response - in production you'd create an order via Razorpay REST API:
  return res.status(200).json({
    orderId: 'order_test_12345',
    amount: req.body.amount || 1000,
    currency: 'INR'
  });
}
