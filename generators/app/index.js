const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // 提示信息
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your Project Name',
        default: this.appname
      }
    ])
    .then (answers => {
      this.answers = answers
    })
  }

  writing () {
    // 文件相对路径
    const templates = [
      // '.browserslistrc',
      // '.editorconfig',
      // '.env.development',
      // '.env.production',
      // '.eslintrc.js',
      // '.gitignore',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/store/actions.js',
      'src/store/getters.js',
      'src/store/index.js',
      'src/store/mutations.js',
      'src/store/state.js',
      'src/utils/request.js',
      'src/views/About.vue',
      'src/views/Home.vue'
    ]
    // 遍历路径做写入操作
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}