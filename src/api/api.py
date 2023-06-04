from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
from torchvision import transforms, models
from PIL import Image
from train import *
import os

app = Flask(__name__)
CORS(app)

# Load the saved model
num_classes = 4
loaded_model = models.resnet18(pretrained=False)
loaded_model.avgpool = nn.Sequential(
    nn.AdaptiveAvgPool2d(1),
    CBAM(channels=loaded_model.fc.in_features)
)
loaded_model.fc = nn.Linear(loaded_model.fc.in_features, num_classes)

# Xác định đường dẫn tuyệt đối của file api.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Xây dựng đường dẫn tương đối đến file resnet_model.pth
model_path = os.path.join(current_dir, 'resnet_model', 'resnet_model.pth')

# Sử dụng đường dẫn tương đối để tải state dictionary
state_dict = torch.load(model_path)

# Remove the keys corresponding to the additional layers
state_dict = {k: v for k, v in state_dict.items() if k in loaded_model.state_dict()}

# Load the modified state dictionary into the model
loaded_model.load_state_dict(state_dict)

# Move the model to the device
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
loaded_model = loaded_model.to(device)

# Set the model to evaluation mode
loaded_model.eval()

# Define the transformations for preprocessing the image
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.25, 0.25, 0.25])
])

@app.route('/process', methods=['POST'])
def process_endpoint():
    if 'image' not in request.files:
        return jsonify({'error': 'No image found'})

    # Get the image file from the POST request
    image_file = request.files['image']

    try:
        # Open and preprocess the image
        image = Image.open(image_file)
        image = transform(image).unsqueeze(0).to(device)

        # Perform inference on the image
        output = loaded_model(image)
        _, predicted_class = torch.max(output, 1)
        predicted_class = predicted_class.item()
        class_names = ["level_0", "level_1", "level_2", "level_3"]
        predicted_label = class_names[predicted_class]

        # Return the predicted class and processed image URL as JSON response
        return jsonify({'predicted_class': predicted_label})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='192.168.1.9', port=5000)

