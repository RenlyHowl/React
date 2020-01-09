// module.exports = (config, env) => {
//   // 如果没有使用customize-cra就在这里对config进行配置

  
//   return config;
// }




// 引入customize-cra里的方法
/*
如果想在里面添加一些插件或者preset解析语法这个包里都提供了相应操作的方法;
这些配置信息都是在override这个方法中
*/
const {override, addDecoratorsLegacy} = require('customize-cra')
// override里面可以传很多参数的
module.exports = override(
  addDecoratorsLegacy(), // 启用装饰性模式
)




