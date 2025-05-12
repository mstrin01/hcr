import boto3
import json
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

textract = boto3.client("textract", region_name="eu-central-1")

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Backend radi! :)"}), 200

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    image_bytes = file.read()

    try:
        response = textract.detect_document_text(
            Document={"Bytes": image_bytes}
        )

        extracted_text = " ".join(
            [block["Text"] for block in response["Blocks"] if block["BlockType"] == "LINE"]
        )

        return jsonify({"text": extracted_text}), 200

    except Exception as e:
        print("AWS error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
