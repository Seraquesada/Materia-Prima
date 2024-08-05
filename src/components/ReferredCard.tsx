import { FC } from 'react'

interface Props {
	name: string
	position: string
	description: string
}

const ReferredCard: FC<Props> = ({ name, position, description }) => {
	return (
		<div className="flex h-full flex-col justify-between">
			<div className="flex flex-col gap-4">
				<div>
					<h4 className="text-xl font-semibold">{name}</h4>
					<span className="text-md font-semilight"> {position}</span>
				</div>

				<p className="font-semilight text-lg">{description}</p>
			</div>
		</div>
	)
}

export default ReferredCard
