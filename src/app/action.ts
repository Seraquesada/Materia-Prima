"use server";

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';


export async function handleForm(formData: FormData) {
    const nombre = formData.get("nombre") as string | null;
    const email = formData.get("email") as string | null;
    const asunto = formData.get("asunto") as string | null;
    const mensaje = formData.get("mensaje") as string | null;

    if (!asunto || !nombre || !email || !mensaje) {
        return {error: "Complete todos los campos "}
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'Desde Web <onboarding@resend.dev>',
            to: ['quesada.serafin03@gmail.com'],
            subject: asunto,
            reply_to: email,
            react: EmailTemplate({ firstName: nombre, text: mensaje, asunto }),
        });

    } catch (err) {
        console.error(err);
        return { error: "An error occurred" };
    }


}