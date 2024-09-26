"use client"
import { useRef, useState, FormEvent } from 'react'
import { handleForm } from '@/app/action'

const Form = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const [formSubmitted, setFormSubmitted] = useState(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
		e.preventDefault()

		// Call your form action here
		const formData = new FormData(e.currentTarget)
		await handleForm(formData)

		// Reset the form after successful submission
		if (formRef.current) {
			formRef.current.reset()
		}
		setFormSubmitted(true)

		// Optionally, reset formSubmitted state after some time to clear any success message
		setTimeout(() => setFormSubmitted(false), 3000)
	}

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className="flex flex-col gap-6 rounded-md bg-white px-4 py-4 text-black"
		>
			<div className="flex flex-wrap gap-4 lg:flex-nowrap">
				<div className="flex w-full flex-col gap-1 text-start lg:w-1/3">
					<label htmlFor="nombre">Nombre Completo</label>
					<input
						required={true}
						type="text"
						name="nombre"
						id="nombre"
						placeholder="Juan Martinez"
						className="rounded-md border border-[#D9D9D9] py-3 pl-4"
					/>
				</div>
				<div className="flex w-full flex-col gap-1 text-start lg:w-1/3">
					<label htmlFor="email">Email</label>
					<input
						required={true}
						type="email"
						name="email"
						id="email"
						placeholder="juanmartinez@gmail.com"
						className="rounded-md border border-[#D9D9D9] py-3 pl-4"
					/>
				</div>
				<div className="flex w-full flex-col gap-1 text-start lg:w-1/3">
					<label htmlFor="asunto">Asunto</label>
					<input
						required={true}
						type="text"
						name="asunto"
						id="asunto"
						placeholder="Asunto"
						className="rounded-md border border-[#D9D9D9] py-3 pl-4"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-4 lg:flex-row">
				<div className="flex w-full flex-col gap-1 text-start">
					<label htmlFor="mensaje">Mensaje</label>
					<textarea
						required={true}
						name="mensaje"
						id="mensaje"
						placeholder="Mensaje"
						className="rounded-md border border-[#D9D9D9] py-3 pl-4"
					/>
				</div>
				<button
					type="submit"
					className="h-min w-full self-center rounded-md bg-[#2C2C2C] py-3 text-white transition-colors duration-300 hover:bg-black sm:w-[60%] lg:w-[40%] lg:self-end"
				>
					Enviar
				</button>
			</div>
			{formSubmitted && <p className="text-green-500">¡Formulario enviado con éxito!</p>}
		</form>
	)
}

export default Form
