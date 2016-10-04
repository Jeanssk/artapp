// this segment ensures the file has access to all necessary modules
//    it also names them for later use
const express = require('express');
const app = express();
const path = require('path');

// this segment initializes your server on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000');
})

// this is where you will define your virutal paths
app.use(express.static('public'));
app.use(express.static('public/statics'));

// make sure this path is named appropriately for your file system
// later, you will modify this section so it points to your home page
app.get('/', (req, res) => {
	res.sendFile(path.join('/Users/SamJam/Projects/crud/public/statics/index.html'));
})
