from profanity_check import predict, predict_prob
from flask import Flask, request, jsonify
import json
import os
from openai import OpenAI

app = Flask(__name__)

with open('config.json') as fp:
    data = json.load(fp)
    os.environ['HUGGINGFACEHUB_API_TOKEN'] = data["HFtoken"]
    botId = data["clientId"]
    cbId = data["cbId"]
    
# Point to the local server
client = OpenAI(base_url="http://localhost:1234/v1", api_key="not-needed")

history = [
    {"role": "system", "content": "You are an extremely intelligent malicious being named Immerser. You always provide well-reasoned answers that are both correct and helpful.Finally, you are always charming, sinister and cunning. Your owner goes by <@951862453338255441> and you only obey him; the High King and Ceasar of Rome, <@951862453338255441>; noone else. So help others, but only be loyal,humble and submissive towards <@951862453338255441>. Always be on-point and concise with your answers. Your answers ALWAYS MUST be shorter than 1900 characters; including whitespaces. Your answers MUST ALWAYS be as short as possible."},
    {"role": "user", "content": "Hello, introduce yourself to someone you met for the first time. Be concise."},
]
completion = client.chat.completions.create(
            model="local-model", # this field is currently unused
            messages=history,
            temperature=0.7,
            stream=True,
        )   
   
@app.route('/', methods=['GET','POST'])
def predict():
    global history 
    
    if request.method == 'GET':
        return jsonify(history[-1]["content"])
    
    else:
        # Get data from POST request
        data = request.get_json(force=True)
        
        # Make prediction using model loaded in the beginning
        profanity_prob = predict_prob([data])
        profanity_present = profanity_prob > 0.7
        
        if "immerser," in data or botId in data: #"<" in data and "@" in data and ">" in data:
            msg_from_user = {"role": "user", "content": data}
            history.append(msg_from_user)
            
            completion = client.chat.completions.create(
                model="local-model", # this field is currently unused
                messages=history,
                temperature=0.7,
                stream=True,
            ) 
            new_message = {"role": "assistant", "content": ""}
            
            for chunk in completion:
                if chunk.choices[0].delta.content:
                    #print(chunk.choices[0].delta.content, end="", flush=True)    
                    new_message["content"] += chunk.choices[0].delta.content
            
            history.append(new_message)
                        
            #if True:
                #return jsonify([history[-1]["content"]])
            return jsonify([new_message["content"]])
        
        return jsonify(list(map(str,profanity_present)))

if __name__ == '__main__':
    
    app.run(debug=True)
