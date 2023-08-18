import React, { useEffect, useState } from 'react';
import LoadingCircle from '../loader/LoadingCircle';

// get API from my own server syedamirali.com
const api = (geoName) =>
  `https://syedamirali.com/php/bangladesh/${geoName}.php`;

export const SelectInput = () => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [postcodes, setPostcodes] = useState([]);
  const [divisionsInput, setDivisionsInput] = useState({
    id: null,
    name: null,
  });
  const [districtsInput, setDistrictsInput] = useState({
    id: null,
    name: null,
  });
  const [upazilasInput, setUpazilasInput] = useState({
    id: null,
    name: null,
  });
  const [postcodesInput, setPostcodesInput] = useState({
    id: null,
    name: null,
  });

  // set all the geojson data in my local state
  useEffect(function () {
    async function fetchData(api, setData) {
      const response = await fetch(api);
      const data = await response.json();
      setData(data);
    }

    fetchData(api('divisions'), setDivisions);

    fetchData(api('districts'), setDistricts);

    fetchData(api('upazilas'), setUpazilas);

    fetchData(api('postcodes'), setPostcodes);
  }, []);

  // console.log(api('divisions'));

  // check the divisions data are available in my local state
  return divisions.length ? (
    <div className="select-body">
      <div className="select-input-box">
        <div>
          {
            // reload button for start address selection from new
          }
          <button
            className="reset-btn"
            onClick={() => window.location.reload()}
          >
            reset
          </button>
        </div>

        {
          // First division select box are available initially
        }
        <div className="select-container">
          <select
            onChange={(e) => {
              const val = e.target.value.split('|');
              setDivisionsInput((prevState) => {
                return { ...prevState, id: val[0], name: val[1] };
              });
            }}
            placeholder="select your division's name"
            defaultValue={divisionsInput.id + '|' + divisionsInput.name}
          >
            <option hidden>Select Division</option>
            {divisions.map((div) => (
              <option key={div.id} value={div.id + '|' + div.name}>
                {div.name}
              </option>
            ))}
          </select>
        </div>

        {
          // after select user's division then available district select box
          divisionsInput.id && (
            <div className="select-container">
              <select
                onChange={(e) => {
                  const val = e.target.value.split('|');
                  setDistrictsInput((prevState) => {
                    return { ...prevState, id: val[0], name: val[1] };
                  });
                }}
                placeholder="select your districts name"
                defaultValue={districtsInput.id + '|' + districtsInput.name}
              >
                <option hidden>Select districts</option>
                {districts
                  .filter((dis) => dis.division_id === divisionsInput.id)
                  .map((dis) => (
                    <option key={dis.id} value={dis.id + '|' + dis.name}>
                      {dis.name}
                    </option>
                  ))}
              </select>
            </div>
          )
        }

        {
          // after select user's districts then available upazilas select box
          districtsInput.id && (
            <div className="select-container">
              <select
                onChange={(e) => {
                  const val = e.target.value.split('|');
                  setUpazilasInput((prevState) => {
                    return { ...prevState, id: val[0], name: val[1] };
                  });
                }}
                placeholder="select your upazila's name"
                defaultValue={upazilasInput.id + '|' + upazilasInput.name}
              >
                <option hidden>Select Upazila</option>
                {upazilas
                  .filter((upa) => upa.district_id === districtsInput.id)
                  .map((upa) => (
                    <option key={upa.id} value={upa.id + '|' + upa.name}>
                      {upa.name}
                    </option>
                  ))}
              </select>
            </div>
          )
        }

        {
          // after select user's upazilas then available postcode select box
          upazilasInput.id && (
            <div className="select-container">
              <select
                onChange={(e) => {
                  const val = e.target.value.split('|');
                  setPostcodesInput((prevState) => {
                    return { ...prevState, id: val[0], name: val[1] };
                  });
                }}
                placeholder="select your postcode's id"
                defaultValue={postcodesInput.id + '|' + postcodesInput.name}
              >
                <option hidden>Select Post Code</option>
                {postcodes
                  .filter(
                    (pc) => pc.district_id === districtsInput.id
                    // pc.upazila === upazilasInput.name
                  )
                  .map((pc, i) => (
                    <option key={i} value={pc.id + '|' + pc.postCode}>
                      {pc.postCode}
                    </option>
                  ))}
              </select>
            </div>
          )
        }
      </div>

      {
        // at last show a simple success message
      }
      {divisionsInput.id &&
      districtsInput.id &&
      upazilasInput.id &&
      postcodesInput.id ? (
        <div className="success-message">
          <p>You Successfully Selected Your Address!</p>
        </div>
      ) : (
        <div className="warning-message">
          <p>Please Select Your Address!</p>
        </div>
      )}
    </div>
  ) : (
    // Simple loading animation logo
    <LoadingCircle />
  );
};

export default SelectInput;

/* 
  *
  * 'http://localhost:5050/api/v1/bd_geojson/divisions',
  * 'http://localhost:5050/api/v1/bd_geojson/districts',
  * 'http://localhost:5050/api/v1/bd_geojson/upazilas',
  * 'http://localhost:5050/api/v1/bd_geojson/postcodes',
  * 'https://syedamirali.com/php/bangladesh/divisions.php',
  *
  * 
  
  console.log(api('divisions'));

  console.log(
    '\ndivisions => ',
    divisions,
    '\ndistricts => ',
    districts,
    '\ndivisionsInput => ',
    divisionsInput,
    '\ndistrictsInput => ',
    upazilas,
    '\nupazilas => ',
    upazilas,
    '\nupazilasInput => ',
    upazilasInput
  );
  
  {console.log(
    '\ndivisions=>',
    divisionsInput,
    '\ndistricts=>',
    districtsInput,
    '\nupazilas=>',
    upazilasInput,
    '\npostcodes=>',
    postcodes.filter((pc) => pc.upazila == upazilasInput.name)
  )}

  */
