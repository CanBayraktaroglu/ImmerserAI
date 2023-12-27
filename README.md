# Immerser - An Intelligent, dynamic and immersive Discord Bot
## Video Demo:  <https://youtu.be/3VeBHof33ZY>
## Description: 
### An immersive and dynamic discord bot for detecting swear words, interacting with members of a channel and providing multiple utilities. Simply put, open source GPT 3.5-level LLM provided to all guild members free of charge. For non-commercial usage only!

## Instructions: 
### Generate a config.json file in the project folder with the following keys: botName,clientId,publicKey,permissionsInt,token,inviteLink,guildId,HFtoken,ownerId,systemPromptLLM and their objects respectively. 

### Then download all necessary packages for node.js and python venv. Finally, download LM Studio and install mistral 4 bit quantized Open-Source LLM  on LM Studio. 

### Start the server on LM Studio, run the "python ./app.py" and "node ./bot.js" commands on 2 powershells synchronously. Voila!

## Overview: 
#### app.py: Flask Backend for LLM and Profanity Checker Integration 
#### bot.js: Main File for Discord Backend 
#### requests.js: Bridge between Flask Backend and Discord CLient. 
#### events: Events for tests and message interaction in guild channels
#### commands: Ordinary commands to check the status of discord bot within Discord
#### deploy-commands.js: Script to deploy commands, in case of a new one existing.

#### Instructions.txt: The commands to give in powershells after setting up the project fully.
