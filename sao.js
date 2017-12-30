module.exports = {
  prompts: {
    name: {
      required: true,
      type: "string",
      default: ':folderName:',
      message: "Project name"
    },
    description: {
      type: "string",
      message: "Project description",
      default: "A npm library project"
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      filter: val => val.toLowerCase(),
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    }
  },
  skipInterpolation: [
    'template/**'
  ],
  gitInit: true,
  installDependencies: true
}
