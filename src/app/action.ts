"use server";

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';


export async function handleForm(formData: FormData) {
    const name = formData.get("nombre")?.valueOf() as string;
    const email = formData.get("email")?.valueOf() as string;
    const asunto = formData.get("asunto");
    const content = formData.get("mensaje");

    if (!asunto || !name || !email || !content) {
        return console.log("Please fill all fields", name, email, asunto, content);
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'Sera <onboarding@resend.dev>',
        to: ['quesada.serafin03@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
    });

    console.log(data);

}