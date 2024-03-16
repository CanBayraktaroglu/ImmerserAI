from profanity_check import predict_prob
from flask import Flask, request, jsonify
import json
import os
from groq import Groq


app = Flask(__name__)

with open('config.json') as fp:
    data = json.load(fp)
    os.environ['GROQ_API_KEY'] = data["groq_api_key"]
    botId = data["clientId"]
    ownerId = data["ownerId"]
    systemPromptLLM = data["systemPromptLLM"]
    
# Point to the local server
client = Groq(api_key=os.environ['GROQ_API_KEY'])

@app.route('/', methods=['GET','POST'])
def predict():
    
    if request.method == 'GET':
        return "Hello, World!"
    
    else:
        # Get data from POST request
        data = request.get_json(force=True)
        
        # Make prediction using model loaded in the beginning
        profanity_prob = predict_prob([data])
        profanity_present = profanity_prob > 0.7
        
        if "immerser" in data or botId in data: #"<" in data and "@" in data and ">" in data:

            completion = client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": systemPromptLLM
                    },
                    {
                        "role": "user",
                        "content": data,
                    }
                ],
                model="mixtral-8x7b-32768",
            )
        
            output = completion.choices[0].message.content
        
            return jsonify(output)
        
        return jsonify(list(map(str,profanity_present)))

if __name__ == '__main__':
    app.run(debug=True)
