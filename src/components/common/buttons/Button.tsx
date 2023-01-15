import { FC } from 'react'

import { IButton } from '@/components/common/buttons/button.interface'

const Button: FC<IButton> = ({ children, ...rest }) => {
	return <button>{children}</button>
}

export default Button
