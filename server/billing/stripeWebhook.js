import express from "express";

export const stripeWebhookRouter = express.Router();

// raw body required for Stripe signature verification
stripeWebhookRouter.post("/stripe/webhook", express.raw({ type: "application/json" }), async (req, res) => {
    try {
        // TODO: verify Stripe signature header
        // const sig = req.headers["stripe-signature"];
        // const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

        const event = JSON.parse(req.body.toString()); // placeholder

        switch (event.type) {
            case "checkout.session.completed":
                // TODO: mark user subscription active in DB
                break;

            case "invoice.payment_failed":
                // TODO: mark subscription unpaid / inactive
                break;

            case "customer.subscription.deleted":
                // TODO: deactivate subscription
                break;

            default:
                break;
        }

        return res
