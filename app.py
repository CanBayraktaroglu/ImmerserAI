from profanity_check import predict, predict_prob
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def predict():
    # Get data from POST request
    data = request.get_json(force=True)

    # Make prediction using model loaded in the beginning
    profanity_prob = predict_prob([data])
    profanity_present = profanity_prob > 0.7
    
    #profanity_present = predict(data)
    #print(f"profanity present?: {profanity_present}")

    # For now, just echo the received data
    return jsonify(list(map(str,profanity_present)))

if __name__ == '__main__':
    app.run(debug=True)
