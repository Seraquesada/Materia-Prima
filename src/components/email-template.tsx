import * as React from 'react'

interface EmailTemplateProps {
	firstName: string
	text: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstName,
	text,
}) => (
	<div>
		<h1>{firstName}, se ha contacto con nosotros</h1>
		<p>{text}</p>
	</div>
)
