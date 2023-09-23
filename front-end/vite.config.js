import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
	],
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/styles/global.scss";`
			}
		}
	}
})