import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      // Resend requires the "from" address to be a verified domain, 
      // OR you can use their testing address if sending to yourself.
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      replyTo: email,
      to: process.env.EMAIL_TO || 'info@chnomanahmad.me', // Receiver email
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ message: 'Failed to send message', error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Message sent successfully', data }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message', error: error.message },
      { status: 500 }
    );
  }
}
