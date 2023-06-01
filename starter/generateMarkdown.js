// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or inquiries, please reach out via the following:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
