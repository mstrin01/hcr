import boto3
import json
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# AWS Rekognition client (ostavi ovo ako planiraš koristiti Amazon)
rekognition = boto3.client("rekognition", region_name="us-east-1")

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Backend radi! :)"}), 200

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    image_bytes = file.read()

    #try:
        # Amazon Rekognition poziv (ako ga ne koristiš još, možeš ovo zakomentirati)
    #    response = rekognition.detect_text(Image={"Bytes": image_bytes})

    #   extracted_text = " ".join([
    #        text["DetectedText"]
    #       for text in response.get("TextDetections", [])
    #    ])

    #    return jsonify({"text": extracted_text}), 200
    #except Exception as e:
    #    return jsonify({"error": str(e)}), 500 

    return jsonify({"text": "Ovo je testni odgovor jer AWS još nije spojen."}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
