const { resolve } = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
	config.resolve.alias.set('@', resolve('./src'))
		.set('@page', resolve('./src/pages'))
		.set('@cmp', resolve('./src/components'))
		
  }
})
