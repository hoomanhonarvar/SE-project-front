import React, { useState, useEffect } from 'react';

function Exp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/users/list',{
        method:"GET",
        headers:{'Content-Type':'application/json',"Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Origin": " *","Access-Control-Allow-Headers":"Origin X-Requsted-With",
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH'

            }
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <script crossorigin src="/"></script>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default Exp;