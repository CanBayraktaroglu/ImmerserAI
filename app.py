from profanity_check import predict, predict_prob
from flask import Flask, request, jsonify
import json
import os
import torch

app = Flask(__name__)

with open('config.json') as fp:
    data = json.load(fp)
    os.environ['HUGGINGFACEHUB_API_TOKEN'] = data["HFtoken"]
    botId = data["clientId"]
    
# Use a pipeline as a high-level helper
from transformers import pipeline, Conversation,AutoTokenizer, AutoModelForCausalLM,T5Tokenizer, T5ForConditionalGeneration

#tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2",use_fast=False,padding_side="left",trust_remote_code=True)
#model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2")

#chatbot = pipeline("text-generation", model=model,tokenizer=tokenizer,torch_dtype=torch.float16,trust_remote_code=True,use_fast=False,device_map={"": "cuda:0"})
# Conversation objects initialized with a string will treat it as a user message
#conversation = Conversation("From now on, you are going to be working as a discord bot and converse with people on demand. You must always be kind, polite and smart in your responses. Your name is Immerser and you are responsible for letting people that chat with you have great time and thoughtful and satisfying conversations. Understood?")
#conversation = chatbot(conversation)
#print(conversation.messages[-1]["content"])

generator = pipeline("text-generation", model="mistralai/Mistral-7B-Instruct-v0.2") #pipeline(model=model, tokenizer=tokenizer)

#device = "cuda"

#encodeds = tokenizer.apply_chat_template(messages, return_tensors="pt")

#model_inputs = encodeds.to(device)
#model.to(device)

#generated_ids = model.generate(model_inputs, max_new_tokens=1000, do_sample=True)
#decoded = tokenizer.batch_decode(generated_ids)

base_instruction = "[INST]You are a conversational discord bot, that MUST answer the messages mostly with irony; but in a smart, collected and elegant way. Try to be as talkative as possible. Try to reply to the messages as long and energetic as possible. "

@app.route('/', methods=['GET','POST'])
def predict():
    # Get data from POST request
    data = request.get_json(force=True)

    # Make prediction using model loaded in the beginning
    profanity_prob = predict_prob([data])
    profanity_present = profanity_prob > 0.7
    
    if botId in data: #"<" in data and "@" in data and ">" in data:
        #new_msg = {"role": "user", "content": data.replace(botId,"").replace("@","").replace("<","").replace(">","")}
        #global conversation
        #global chatbot
        #conversation.add_message(new_msg)
        #conversation = chatbot(conversation)
        
        global generator
        global base_instruction
        new_msg = base_instruction + data.replace(botId,"").replace("@","").replace("<","").replace(">","") + "[/INST]"
        
        ans = generator(new_msg, max_new_tokens=100, do_sample=True)[0]['generated_text'].split("[/INST] ")[-1] #[conversation.messages[-1]["content"]]
        print(f"type: {type(ans)}, content: {ans}")
        
        return jsonify(ans)
    
    return jsonify(list(map(str,profanity_present)))

if __name__ == '__main__':
    app.run(debug=True)
