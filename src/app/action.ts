"use server";

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

export async function handleForm(formData: FormData): Promise<void> {
    const nombre = formData.get("nombre") as string | null;
    const email = formData.get("email") as string | null;
    const asunto = formData.get("asunto") as string | null;
    const mensaje = formData.get("mensaje") as string | null;

    // Validation: Check if all fields are filled in
    if (!asunto || !nombre || !email || !mensaje) {
        console.error("Complete todos los campos");
        return; // Stop execution but return nothing (void)
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'Desde Web <onboarding@resend.dev>',
            to: ['jeronimo.kristof@materiaprimasa.com'],
            subject: asunto,
            reply_to: email,
            react: EmailTemplate({ firstName: nombre, text: mensaje, asunto }),
        });
    } catch (err) {
        console.error("An error occurred while sending the email:", err);
    }
}
