import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

export async function sendOrderConfirmation({
  to,
  customerName,
  productName,
  amount,
  sessionId,
}: {
  to: string;
  customerName: string;
  productName: string;
  amount: number;
  sessionId: string;
}) {
  return getResend().emails.send({
    from: "AI Code Agency <orders@aicodeagency.com>",
    to,
    subject: `Order Confirmed: ${productName} — AI Code Agency`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', sans-serif; background: #060608; color: #F4F2EE; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { border-bottom: 1px solid #1A1A1E; padding-bottom: 24px; margin-bottom: 32px; }
            .logo { font-size: 24px; font-weight: 800; color: #F4F2EE; }
            .logo span { color: #C8FF00; }
            .badge { background: #C8FF00; color: #060608; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 4px; display: inline-block; margin-top: 12px; }
            h1 { font-size: 28px; font-weight: 800; margin: 0 0 8px; }
            p { color: #9ca3af; line-height: 1.6; }
            .box { background: #0E0E10; border: 1px solid #1A1A1E; border-radius: 8px; padding: 20px; margin: 24px 0; }
            .box-row { display: flex; justify-content: space-between; margin-bottom: 12px; }
            .label { color: #6b7280; font-size: 13px; }
            .value { color: #F4F2EE; font-size: 13px; font-weight: 600; }
            .amount { color: #C8FF00; font-size: 20px; font-weight: 800; }
            .cta { display: inline-block; background: #C8FF00; color: #060608; font-weight: 700; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin-top: 16px; }
            .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #1A1A1E; color: #4b5563; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">AI<span>CODE</span> AGENCY</div>
              <div class="badge">ORDER CONFIRMED</div>
            </div>
            <h1>Thanks, ${customerName}! 🎉</h1>
            <p>Your payment was successful. Here's a summary of your order:</p>
            <div class="box">
              <div class="box-row">
                <span class="label">Product</span>
                <span class="value">${productName}</span>
              </div>
              <div class="box-row">
                <span class="label">Amount Paid</span>
                <span class="amount">$${(amount / 100).toFixed(2)}</span>
              </div>
              <div class="box-row">
                <span class="label">Order ID</span>
                <span class="value">${sessionId.slice(-12)}</span>
              </div>
            </div>
            <p>Our team will reach out within <strong style="color: #F4F2EE">24 hours</strong> to onboard you and get your deployment started.</p>
            <a href="https://aicodeagency.com/store" class="cta">Browse More Products →</a>
            <div class="footer">
              <p>AI Code Agency Pvt Ltd · Negombo, Sri Lanka</p>
              <p>Questions? Reply to this email or contact us at hello@aicodeagency.com</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });
}

export async function sendQuoteNotification({
  name,
  email,
  service,
  message,
}: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  return getResend().emails.send({
    from: "AI Code Agency <noreply@aicodeagency.com>",
    to: "hello@aicodeagency.com",
    subject: `New Quote Request: ${service} — from ${name}`,
    html: `
      <div style="font-family: monospace; background: #060608; color: #F4F2EE; padding: 32px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C8FF00;">New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p style="color: #9ca3af; border-left: 3px solid #C8FF00; padding-left: 12px;">${message}</p>
      </div>
    `,
  });
}
