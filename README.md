# Immerser - An Intelligent, dynamic and immersive Discord Bot
## GitHub Link: <https://github.com/CanBayraktaroglu/Immerser.git>
## Description:


Immerser is an innovative and multifaceted Discord bot, leveraging the capabilities of a GPT-3.5 level language model (LLM) to provide an immersive and dynamic experience for Discord guild members. The core of this project revolves around the integration of a powerful AI agent, similar in capability to OpenAI's GPT-3.5, into Discord channels. This integration makes advanced conversational AI accessible to all members of the guild, fostering an engaging and interactive environment.

The primary function of this bot is to act as an interactive AI companion for guild members. It enables users to engage in a wide range of activities, such as asking questions, participating in role-playing games, generating code, summarizing text, and carrying on general conversations. What makes this bot particularly unique is its customizable nature. Through a configuration file (config.json), guild administrators can tailor the AI’s behavior, including its origin story, manners, style, and personality. This customization ensures that the AI agent aligns with the specific culture and preferences of each guild or channel, providing a unique and upmost immersive experience for different groups.

Another significant feature of the project is its commitment to maintaining a respectful and comfortable online space. The bot is equipped with a mechanism to detect and flag the use of profanity by guild members. This feature helps to uphold a standard of communication within the guild, promoting a safe and friendly environment for interaction among friends, clients, or customers. By discouraging the use of swear words, the bot contributes to creating a more inclusive and welcoming community.

In terms of utilities, Immerser AI offers a versatile range of applications. For instance, the AI can assist in code generation, which can be particularly beneficial for guilds that revolve around programming and development. The text summarization feature is another utility that can prove useful in various contexts, such as quickly condensing large amounts of information into more digestible forms. The role-playing aspect enhances the entertainment value, providing an interactive storytelling experience where the AI can participate as a character or a narrator.

Furthermore, the project being open-source and free for non-commercial usage widens its accessibility. This approach encourages community-driven development and customization, allowing other developers to contribute to and improve the bot. It also ensures that small communities or guilds without substantial funding can benefit from advanced AI capabilities, democratizing access to cutting-edge technology.

In summary, the project stands out as a comprehensive solution for Discord communities, blending entertainment, utility, and community management. By integrating a customizable and powerful GPT-3.5 level AI into Discord, it offers unique interactive experiences tailored to each guild's culture. Simultaneously, it upholds community standards through its profanity detection feature, fostering a more respectful and enjoyable online environment. The open-source nature of the project further adds to its appeal, inviting ongoing enhancement and adaptation by the wider community.

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
