const {Events} = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: Events.MessageCreate,
    async execute(data) {
        try {
            const response = await fetch('http://localhost:5000/', {
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
            //console.log('Response from Flask:', responseData.data);
            return responseData;
        } catch (error) {
            console.error('Error sending data to Flask server:', error);
        }
    }
};
