'use client'

import { Button } from '@/components/ui/button'

import { TransportationMethodOption as Option } from '@/lib/types'
import { useOrder, useOrderActions } from '@/store/order'

interface TransportationMethodOptionProps
	extends React.ComponentPropsWithoutRef<'div'> {
	option: Option
}

export default function TransportationMethodOption({
	option,
	className,
	...props
}: TransportationMethodOptionProps) {
	const order = useOrder()
	const orderActions = useOrderActions()

	const isOptionSelected = order.transportationMethod === option.id
	const Icon = option.icon

	return (
		<div className="flex flex-col items-center justify-center gap-1" {...props}>
			<Button
				variant={isOptionSelected ? 'default' : 'outline'}
				size="sm"
				onClick={() => orderActions.changeTransportationMethod(option.id)}
				className="w-full"
			>
				<Icon className="size-4 shrink-0" />
			</Button>
			<span className="text-xs">{option.label}</span>
		</div>
	)
}
