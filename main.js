function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbwn9NW1BxllCNOYnU1r4wQJ4nO0q-lV4qAIv7wERJyjBV-H6ZjSZc_u7xy4T_UHtoNQ/exec";

  fetch(url)
  .then(d => d.json())
  .then(d => {
    document.getElementById('app').textContent = d[0].status;
  })
}

document.getElementById('btn').addEventListener('click', testGS);



function addGS(){

  const url = "https://script.google.com/macros/s/AKfycbwn9NW1BxllCNOYnU1r4wQJ4nO0q-lV4qAIv7wERJyjBV-H6ZjSZc_u7xy4T_UHtoNQ/exec";

  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    body: JSON.stringify({name:'MG MG'}) // body data type must match "Content-Type" header
  })
}

document.getElementById('btn2').addEventListener('click', addGS);
