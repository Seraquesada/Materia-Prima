import { FC } from 'react'
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

interface EmailTemplateProps {
	firstName: string
	text: string
	asunto: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
	firstName,
	text,
	asunto,
}) => (
	<Html>
		<Head />
		<Preview>Nuevo mensaje desde web</Preview>
		<Tailwind>
			<Body>
				<Container>
					<Section>
						<Heading>
							Nuevo Mensaje de {firstName} : {asunto}
						</Heading>
						<Hr />
						<Text>{text}</Text>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
)
