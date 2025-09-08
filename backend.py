from flask import Flask, request, jsonify
import csv
import os
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow all origins
CSV_FILE = "messages.csv"

# Ensure CSV exists with headers
if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["Timestamp", "Name", "Email/Phone", "Message"])

@app.route("/send_message", methods=["POST"])
def send_message():
    data = request.get_json()

    # Validate incoming data
    name = data.get("name", "").strip()
    email_phone = data.get("email_phone", "").strip()
    message = data.get("message", "").strip()

    if not name or not email_phone or not message:
        return jsonify({"status": "error", "message": "All fields are required."}), 400

    # Append to CSV
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    try:
        with open(CSV_FILE, mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow([timestamp, name, email_phone, message])
        return jsonify({"status": "success", "message": "Message saved successfully!"})
    except Exception as e:
        print("Error saving message:", e)
        return jsonify({"status": "error", "message": "Failed to save message."}), 500

if __name__ == "__main__":
    app.run(debug=True)
