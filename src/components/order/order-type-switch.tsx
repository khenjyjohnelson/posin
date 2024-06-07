'use client'

import { ListMinus, ListPlus } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Switch } from '@/components/ui/switch'

import { DEFAULT_ORDER_TYPE, ORDER_TYPE_PARAMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function OrderTypeSwitch() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const orderType = searchParams.get(ORDER_TYPE_PARAMS) || DEFAULT_ORDER_TYPE

	const handleSwitchClick = () => {
		const urlSearchParams = new URLSearchParams(searchParams)

		urlSearchParams.set(
			ORDER_TYPE_PARAMS,
			orderType === 'customer-order' ? 'inventory-order' : 'customer-order',
		)

		router.replace(`${pathname}?${urlSearchParams.toString()}`)
	}

	return (
		<div className="flex items-center gap-2">
			<ListMinus
				className={cn(
					'size-4 shrink-0 text-muted-foreground transition-colors',
					orderType === 'customer-order' && 'text-accent-foreground',
				)}
			/>
			<Switch onClick={handleSwitchClick} />
			<ListPlus
				className={cn(
					'size-4 shrink-0 text-muted-foreground transition-colors',
					orderType === 'inventory-order' && 'text-accent-foreground',
				)}
			/>
		</div>
	)
}