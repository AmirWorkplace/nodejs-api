const route = 'http://localhost:5050/api/v1/user/';
const api = (id) => route + id;
const body = JSON.stringify({
  name: 'Code With Syed Amir',
  email: 'codewithsyedamir@gmail.com',
  password: 'codewithsyedamir',
  gender: 'Male',
});

const update = async (id) => {
  const response = await fetch(api(id), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  console.log(response);
};

// update('64d2ed0a62ea88338c52ae17');
update('64d38210f90521cf0584c812');

// console.log(api('64d2ed0a62ea88338c52ae17'), body);
fetch(api('64d2ed0a62ea88338c52ae17'))
  .then((r) => r.json())
  .then((d) => console.log(d));
