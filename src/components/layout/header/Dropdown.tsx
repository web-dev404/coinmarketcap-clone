import Link from 'next/link'
import { FC } from 'react'

const Dropdown: FC<{ isDropdownOpened: boolean }> = ({ isDropdownOpened }) => {
	return (
		<div
			className={`bg-gray4 header-dropdown ${
				isDropdownOpened ? 'active' : ''
			}`}
		>
			<Link
				className={
					'text-white dropdown-item hover:bg-blue hover:text-white2'
				}
				href={'settings'}
			>
				Profile
			</Link>
			<hr style={{ color: 'white' }} />
			<button
				className={
					'dropdown-item text-[#F20000] hover:bg-[#F20000] hover:text-white2'
				}
			>
				Log out
			</button>
		</div>
	)
}
export default Dropdown
