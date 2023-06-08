Required Installation
npm : 6.14.18
nvm : 1.1.10
node :v14.21.3
yarn  :v1.22.19
expo : 6.3.8

To set up run command line: 
>>> pip install flask flask-cors torch torchvision pillow
>>> yarn global add expo-cli ( or npm install -g expo-cli ) 
>>> yarn install

set up localhost:
1. Check IP by run command line:
>>>ipconfig
2. Copy the IPv4 Address of Wireless LAN adapter Wi-Fi or Ethernet adapter Ethernet: (Ex: 192.168.100.5)
Change the ip in 2 files: 
+ src/view/Shooting/Shooting.js at line 44:
from 
.post("http://192.168.100.6:5000/process", formData)
to
.post("http://192.168.100.5:5000/process", formData)
+ src/api/api.py at line 77:
from
app.run(host='192.168.100.6', port=5000)
to
app.run(host='192.168.100.5', port=5000)

to run project have to open 2 terminals in 4 following steps:
1. First terminal run command line: 
>>> cd src/api
>>> python api.py

2. Second terminal run command line:
>>> yarn start
3. Download "Expo Go" Application on IOs (Appstore) or Android (Google Play)
4. Scan the "QR code" in terminal on your phone Camera

if you want to compile this code on website you can follow these 2 steps:
1. First terminal run command line: 
>>> cd src/api
>>> python api.py

2. Second terminal run command line:
>>> yarn web 
