import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	distDir: "dist",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**"
			}
		]
	}
}

export default withNextIntl(nextConfig)
