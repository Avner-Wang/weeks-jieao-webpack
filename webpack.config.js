let path=require('path');


module.exports={
	// mode 模式 开发模式和生成环境，默认为生产环境 production
	mode:'development',
	entry:'./src/common.js',
	output:{
		filename:'bundle.min.js',
		// 输出路径为绝对路径  两个下划线
		path:path.resolve(__dirname,'build'),
	}
}