function postRequest(endpointName, data) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/${endpointName}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  postRequest,
};
