const {Events} = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: Events.MessageCreate,
    async execute(data) {
        console.log( data);
        try {
            const response = await fetch('http://127.0.0.1:8080', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error sending data to Flask server:', error);
        }
    }
};
