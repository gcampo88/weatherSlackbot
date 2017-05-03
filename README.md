# weatherSlackbot
Fairly useless slackbot that is very pro pup walks

This repository contains the code for an AWS Lambda function. To use: 
1) `git clone`, `cd weatherSlackBot`, `npm install`
2) Log in to your AWS account (or make a new one), and navigate through the console to AWS Lambda. 
3) Zip up the files in your weatherSlackBot directory (including node_modules) and upload the resulting zip file as the source code for your Lambda function. 
4) Navigate to AWS API Gateway and set up a resource and POST method to hit the AWS Lambda you just created. 
5) Copy the URL for your API Gateway resource. 
6) Use the [slash command API from slack](https://api.slack.com/slash-commands) to set a slash command that will POST to your API Gateway URL. 
7) Profit! 
<img width="609" alt="screen shot 2017-05-02 at 8 41 12 pm" src="https://cloud.githubusercontent.com/assets/16007382/25644970/0c57b6c8-2f78-11e7-8954-e82d9a137f81.png">
