
from flask import Flask, request
from urllib.request import urlopen
import json

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def home():
    if(request.method == 'GET'):
        response = urlopen('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
        return json.loads(response.read())

if __name__ == '__main__':

	app.run(debug=True, host='0.0.0.0', port=80)


