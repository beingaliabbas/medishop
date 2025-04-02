import nodemailer from 'nodemailer';

// Create a transporter object using Gmail's SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aliabbaszounr213@gmail.com', // Your Gmail address
    pass: 'ywnc gekd lsrl saqx',     // Your Gmail app password (or regular password if 2FA is not enabled)
  },
});

// Function to send an order confirmation email
export function sendOrderConfirmationEmail(customerEmail: string, orderDetails: any) {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: customerEmail,
    subject: `Order Confirmation - Order #${orderDetails.orderNumber}`,
    html: `
      <h1>Thank you for your purchase!</h1>
      <p>Order Number: ${orderDetails.orderNumber}</p>
      <p>Items Ordered:</p>
      <ul>
        ${orderDetails.items.map((item: any) => `
          <li>
            <strong>${item.name}</strong><br>
            Description: ${item.description}<br>
            Quantity: ${item.quantity}<br>
            Price: $${item.price}<br>
            <img src="${item.image}" alt="${item.name}" width="100">
          </li>
        `).join('')}
      </ul>
      <p>Total: $${orderDetails.total}</p>
      <p>We will notify you once your order has shipped.</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Order confirmation email sent:', info.response);
    }
  });
}
