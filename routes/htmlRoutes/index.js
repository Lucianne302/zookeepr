
const path = require('path');
const router = require('express').Router();

// const animalRoutes = require('../apiRoutes/animalRoutes');

// router.use(animalRoutes);

//router.use(require('http://localhost:3001/routes/apiRoutes/zookeeperRoutes'));
//router.use(require('../apiRoutes/zookeeperRoutes'));

//router.use(require('./zookeeperRoutes'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;