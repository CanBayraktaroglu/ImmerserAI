# Immerser - An Intelligent, dynamic and immersive Discord Bot
## Video Demo:  <https://youtu.be/3VeBHof33ZY>
## GitHub Link: <https://github.com/CanBayraktaroglu/Immerser.git>
## Description:

An immersive and dynamic discord bot for detecting swear words, interacting with members of a channel and providing multiple utilities.

Simply put, open source GPT 3.5-level LLM provided to all guild members free of charge. For non-commercial usage only! All guild members can access GPT3.5 level LLM and interact with it as they wish; from asking questions, roleplaying, code generation to text summarization and conversation.With the system prompt one can set in their own config.json, you can have an AI Agent that directly obeys your origin story, manners, style and personality! Unique to your own discord guild/channel/members of course.

In addition, usage of profanity is marked and frowned upon on each guild member, helping to create a safe and comfortable space for you and your friends/clients/customers only.

## Pre-requisites:
pip
```
alt_profanity_check==1.3.2
Flask==3.0.0
openai==0.27.7

```

npm

```
discord.js@14.14.1
fs@0.0.1-security
node@21.2.0
node-fetch@2.7.0

```

## Instructions:

Generate a config.json file in the project folder with the following keys: botName,clientId,publicKey,permissionsInt,token,inviteLink,guildId,HFtoken,ownerId,systemPromptLLM and their objects respectively. 

Other than systemPromptLLM key, these are all information; which the dev/user has to gather from their own discord bot and discord profiles/guilds.

Then download all necessary node modules and packages for python virtual environment, listed in Pre-requisites section.

Finally, download LM Studio and install mistral v2 4 bit quantized Open-Source LLM  on LM Studio (Approx 4 GB). Start the server on LM Studio, run the "python ./app.py" and "node ./bot.js" commands on 2 powershells synchronously. Voila!

## Overview:

app.py: Flask Backend for LLM and Profanity Checker Integration

bot.js: Main File for Discord Backend

requests.js: Bridge between Flask Backend and Discord CLient.

events: Events for tests and message interaction in guild channels

commands: Ordinary commands to check the status of discord bot within Discord

deploy-commands.js: Script to deploy commands, in case of a new one existing.

Instructions.txt: The commands to give in powershells after setting up the project fully.

## Author:
Can Bayraktaroglu

## License:
Apache-2.0
