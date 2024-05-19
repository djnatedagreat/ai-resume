# Description

A **Proof of Concept** that uses AI (chatGPT) to generate a resume for a specific job posting.

# Goal

Use AI to generate an "enhanced" resume that is customized for a specific job posting, but that is based on the real skillset and experience of the job candidate.

# Dependencies

* Node.js version 18
* OpenAI / ChatGPT paid account and API Key

# How To Use

1. Install npm dependecies

    `$ npm install`

2. Create `.env` file in project root and add OpenAI API Key

    `OPENAI_API_KEY="sk-..."`

3. Execute script

    `$ node index.js`

# Try Your Own Data

1. Create a datafile in `postings` directory, eg. `my_posting.json` (Copy the example and tune to your liking)
2. Change hardcoded const at the bottom of `index.js`

    `const jsonFilePath = 'postings/my_posting.json';`

# To Improve

* Remove all hardcoding
* Make prompts more flexible by allowing the user to configure the prompt or input their own prompts
* Better organization of output file
* In general, this prompt isn't performing to my expectations -- needs more experimentation
* Separate input into 2 files: resume and posting. Data is currently combined