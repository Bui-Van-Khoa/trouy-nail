/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAINS],
		formats: ["image/avif", "image/webp"],
		},
}

module.exports = nextConfig;
