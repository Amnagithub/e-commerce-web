import { NextRequest } from "next/server";  // Changed from NextApiRequest
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2025-01-27.acacia"  // Using latest API version
});

export async function POST(req: NextRequest) {  // Changed from NextApiRequest
    try {
        const origin = req.headers.get("origin");  // Changed from req.headers.origin
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel`,
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Product 1",
                            description: "This is my stripe test product"
                        },
                        unit_amount: 2000
                    }
                }
            ]
        });
        
        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        console.error("Stripe error:", err);
        return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 });
    }
}