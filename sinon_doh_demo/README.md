A lot of Sinon Programs with D.O.H framework.

# 1. Install dojo v1.10 (https://dojotoolkit.org/download/)

- dojo/dojo
- dojo/dijit
- dojo/dojox
- dojo/util/doh

# 2. Install sinon into dojo

- cd dojo/dojo; npm install sinon.js 

# 3. Move this project into doh

- cd dojo/util/doh
- cp sinon_doh_demo . 

# 4. Run doh

- node ../../dojo/dojo.js load=doh test=sinon_doh_demo/DOHStyle.js
- node ../../dojo/dojo.js load=doh test=sinon_doh_demo/SinonTest.js

PS: doh is run by dojo / dojo is run by node
PS: test=XXXTest, XXXTest can not use ../
