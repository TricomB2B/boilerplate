'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('TricomB2B') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your app?',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Description',
      default: this.appname
    }, {
      type: 'input',
      name: 'primaryColor',
      message: 'Primary Color',
      default: '#353535'
    }, {
      type: 'input',
      name: 'prefix',
      message: 'Global prefix (e.g. app = app-directive-name)',
      default: 'app'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.log(props);

    }.bind(this));
  },

  writing: function () {

    var properties = {
      name: this.props.name,
      description: this.props.description,
      primaryColor: this.props.primaryColor,
      prefix: this.props.prefix,
      prefixedName: this.props.prefix+'-'
    }

    this.fs.bulkDirectory(this.templatePath('static')); // Copies all files from static directory into root
    this.fs.bulkDirectory(this.templatePath('scss', this.destinationPath('src/scss')));

    this.fs.copy(
      this.templatePath('.gitkeep'),
      this.destinationPath('img/')
    );
    this.fs.copy(
      this.templatePath('.gitkeep'),
      this.destinationPath('src/components/')
    );
    this.fs.copy(
      this.templatePath('.gitkeep'),
      this.destinationPath('src/views/')
    );

    this.fs.template(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      properties
    );
    this.fs.template(
      this.templatePath('js/app.js'),
      this.destinationPath('src/js/app.js'),
      properties
    );
    this.fs.template(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      properties
    );

  },

  install: function () {
    this.installDependencies({
      bower:false,
      callback: function () {
        console.log('Everything is ready!');
      }
    });
  }
});
