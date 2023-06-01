# SkimGPT

![Team Photo](https://github.com/dartmouth-cs52-23s/project-skimgpt/assets/61445037/eca88b74-0bde-4dfe-ac96-430a6bc6e456) <br>

### Overview
SkimGPT is a Chrome extension built to help the users efficiently digest online articles and blog posts. It uses GPT to generate summary of the webpage the user is currently on and displays it on the side.

**Disclaimer: Due to the nature of GPT, the summarizer may take from 1 to 2 minutes to generate the result.**

### Problem statement

Research papers, news articles, and even blog posts are all relatively lengthy and require quite a bit of time out of people's days to read. Society is very fast paced, so not that many people feel like they have time to sit down and read an article. So how can we get the most relevant information as quickly as possible? And if the individual reads it, will they enjoy reading the article if the writer is extremely biased or opinionated?

### Our problem is broken down into two major areas:

1. There is too much information for people to digest in a short period of time, and people are more likely to feel too overwhelmed with the length of an article and lose track of the main point.
    * Granted, article headlines and abstracts may be beneficial, but they are a bit too short and don't cover the topic in too much depth... so we need to find a middle ground.
2. Some authors are extremely passionate about their perspective, and it may come off as aggressive, discouraging readers from finishing the article and understanding the author's main point.

### Mockups
<img src="https://hackmd.io/_uploads/HkkgYozr2.png" width="500" />


## Architecture

- Chrome Extension Architecture
    - manifest.json enables the code to be run as Chrome extension.

- APIs used
    - OpenAI API


## Setup
- npm install
- npm run dev
- make sure you update vite to the latest version


## Deployment

- git clone this repository
- run 'npm run build' on project directory
- go to Chrome Extensions page(chrome://extensions/)
- In developer mode, click "load unpacked"
- select the extension folder, within the project folder. The extension folder should have manifest.json and content.js. (content.js is created after you do 'npm run build'


## Authors

- Annie Tang
- Ashley Liang
- Di Luo
- Gyuri Hwang
- Kyle Huang
- Pedro Campos

## Helpful Links
- [Figma file](https://www.figma.com/file/D2RiAV9YWDM20AmD7uoDOv/Mockups?type=design&node-id=3%3A2&t=VXWciuczTsUaGeep-1)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

## Acknowledgments
