const path = require("path");

module.exports = {
	webpack(config) {
		config.resolve.alias.images = path.join(__dirname, "images");
		return config;
	},
	images: {
		deviceSizes: [320, 640, 960, 1200, 1800, 2400],
		imageSizes: [16, 32, 48, 64, 96],
		formats: ["image/webp"],
	},
};
