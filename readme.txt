npm : 6.14.18
nvm : 1.1.10
node :v14.21.3
yarn  :v1.22.19
expo : 6.3.8

delete node_module folder and yarn.lock
to set up run command line: 
>>> npm install -g expo-cli or yarn global add expo-cli
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

to run project have to open 2 terminals
first terminal run command line: 
>>> cd src/api
>>> python api.py

second terminal run command line:
>>> yarn start
