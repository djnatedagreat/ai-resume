import 'dotenv/config'
import * as fs from 'fs'
//const axios = require('axios');
import OpenAI from "openai";

const openai = new OpenAI();

/**  
 * reads input JSON data from a file
 */
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    process.exit(1);
  }
}

/**
 * Write results to file
 * @param {*} content 
 * @todo make output file a parameter
 */
function writeMarkdownFile(content) {
  fs.writeFile('results.md', content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
}

/**
 * Creates ChatGPT prompt and queries API
 * @returns results from ChatGPT
 * @todo don't use global const... pass in jsonData as parameter
 * @todo a lot of possibilities here
 */
async function sendQueryToChatGPT() {
  //console.log("here");
  const completion = await openai.chat.completions.create({
    messages: [
      { 
        role: "system", content: "You are a helpful assistant that can assist with JSON data." 
      },
      {
        role: "user",
        content: "Please create a resume that enhances the data in the resume field with the data from the job_posting field to create a resume that reflects a great candidate for the position that is defined in the job_posting field. Please use the skills and job titles from the resume, but enhance them based on information in the position data. Please provide the resulting resume as Markdown."
      },
      {
        role: 'user',
        content: `Please use the following JSON data:\n${JSON.stringify(jsonData, null, 2)}`,
      }
    ],
   // model: "gpt-3.5-turbo",
    model: "gpt-4",
  });
  console.log(completion.choices[0]);
  return completion.choices[0];
  

}

// Specify the path to your JSON file
const jsonFilePath = 'postings/NYS_Senate.json';

// Read JSON data from the file
const jsonData = readJsonFile(jsonFilePath);
const result = await sendQueryToChatGPT(jsonData);
writeMarkdownFile(result.message.content);
console.log(result);