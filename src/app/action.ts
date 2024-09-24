"use server";

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';


export async function handleForm(formData: FormData) {
    const name = formData.get("nombre")?.valueOf() as string;
    const email = formData.get("email")?.valueOf() as string;
    const asunto = formData.get("asunto")?.valueOf() as string;
    const content = formData.get("mensaje")?.valueOf() as string;

    if (!asunto || !name || !email || !content) {
        return console.log("Please fill all fields", name, email, asunto, content);
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'Desde Web <onboarding@resend.dev>',
        to: ['quesada.serafin03@gmail.com'],
        subject: asunto,
        react: EmailTemplate({ firstName: name, text: content }),
    });

    console.log(data, error);

}