import express from 'express';
import {
  divisions,
  districts,
  upazilas,
  postcodes,
} from '../config/res_data.js';

const router = express.Router();

// http://localhost:5050/api/v1/bd_geojson/divisions
router.get('/divisions', function (red, res) {
  res.send(divisions);
});

// http://localhost:5050/api/v1/bd_geojson/district
router.get('/districts', function (red, res) {
  res.send(districts);
});

// http://localhost:5050/api/v1/bd_geojson/upazilas
router.get('/upazilas', function (red, res) {
  res.send(upazilas);
});

// http://localhost:5050/api/v1/bd_geojson/postcodes
router.get('/postcodes', function (red, res) {
  res.send(postcodes);
});

export default router;
