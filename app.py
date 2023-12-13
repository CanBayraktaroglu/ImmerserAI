@app.route('/', methods=['GET','POST'])
def predict():
    # Get data from POST request
    data = request.get_json(force=True)

    # Make prediction using model loaded in the beginning
    kufurDetected = snf.tahmin([data])
    #print(kufurDetected)
    #processed = list(map(str,kufurDetected))
    #print(processed)

    # For now, just echo the received data
    return jsonify(list(map(str,kufurDetected)))

if __name__ == '__main__':
    app.run(debug=True)
