import boto3
import json
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS  # Dodaj flask_cors

app = Flask(__name__)
CORS(app)  # Omogućava CORS za sve rute

# AWS Credentials (pobrini se da ih imaš u okruženju)
rekognition = boto3.client("rekognition", region_name="us-east-1")

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    image_bytes = file.read()

    try:
        # Slanje slike Amazon Rekognitionu
        response = rekognition.detect_text(Image={"Bytes": image_bytes})

        # Ekstrakcija teksta
        extracted_text = " ".join([text["DetectedText"] for text in response.get("TextDetections", [])])

        return jsonify({"text": extracted_text}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Dodano port=5000 radi sigurnosti
