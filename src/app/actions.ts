"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Missing required fields" };
    }

    try {
        // 1. Send email to Admin (You)
        await resend.emails.send({
            from: "Next Path Global <onboarding@resend.dev>", // Use verified domain in production
            to: "yasser30dc@gmail.com", // Your email
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        // 2. Send confirmation email to User
        await resend.emails.send({
            from: "Next Path Global <onboarding@resend.dev>",
            to: email,
            subject: "We received your message! - Next Path Global",
            html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to Next Path Global. We have received your message regarding <strong>${service}</strong>.</p>
        <p>Our team will review your inquiry and get back to you as soon as possible.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>Next Path Global Team</strong></p>
        <p>Vista Tower, The Intermark, Kuala Lumpur</p>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Resend Error:", error);
        return { success: false, error: "Failed to send email" };
    }
}
