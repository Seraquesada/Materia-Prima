
import { handleForm } from '@/app/action'
import Link from 'next/link'
import Image from 'next/image'

const Contacto = () => {
	return (
		<section className="md:pb-[20rem]" id="contacto">
			<div className="flex flex-col justify-center gap-16 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Contacto
				</h2>
				<form
					action={async (formData) => {
						await handleForm(formData)
					}}
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
								type="text"
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
				</form>
			</div>
			<Link href={`https://wa.me/+5491140453849`} target="_blank">
				¿Alguna duda? Habla con nosotros por WhatsApp
				<Image
					src={'whats.svg'}
					alt="whatsapp"
					height={100}
					width={100}
				/>
			</Link>
			<Link href={`https://wa.me/+5491140453849`} target="_blank">
				¿Alguna duda? Habla con nosotros por WhatsApp
				<Image
					src={'whats.svg'}
					alt="whatsapp"
					height={100}
					width={100}
				/>
			</Link>
			<div className="flex justify-center pt-10 md:justify-end"></div>
		</section>
	)
}

export default Contacto
