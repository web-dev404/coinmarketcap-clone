// @ts-check
import { RouterContext } from 'next/dist/shared/lib/router-context'
// import { AuthProvider } from "../state/auth/AuthContext";
import * as NextImage from 'next/image'

import '../src/styles/globals.scss'

const BREAKPOINTS_INT = {
	mw: 320,
	ms: 479.98,
	sm: 767.98,
	md: 991.98,
	pc: 1325 // limited container size
}

const customViewports = Object.fromEntries(
	Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
		console.log(val)
		return [
			key,
			{
				name: key,
				styles: {
					width: `${val}px`,
					height: `${(idx + 5) * 10}vh`
				}
			}
		]
	})
)

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: props => <OriginalNextImage {...props} unoptimized />
})

// export const decorators = [
//   (Story) => (
//     <AuthProvider>
//       <Story />
//     </AuthProvider>
//   ),
// ];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	viewport: { viewports: customViewports },
	layout: 'fullscreen',
	nextRouter: {
		Provider: RouterContext.Provider
	}
}
