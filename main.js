function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbx9SGzwpSokDto3-GbZp8C5I9B3YjiOqpdx23HY4T2VLQyxuMH-ySCXou-Ahb5cC3zO/exec";

  fetch(url)
  .then(d => d.json())
  .then(d => {
    //document.getElementById('app').textContent = d[0].status;
    document.getElementById('app').textContent = d;
  })
  })
}

document.getElementById('btn').addEventListener('click', testGS);



function addGS(){

  const url = "https://script.google.com/macros/s/AKfycbx9SGzwpSokDto3-GbZp8C5I9B3YjiOqpdx23HY4T2VLQyxuMH-ySCXou-Ahb5cC3zO/exec";

  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    body: JSON.stringify({First:"San Lin ",'Last Name':"Myat","Phone No":123343490}) // body data type must match "Content-Type" header
  })
}

document.getElementById('btn2').addEventListener('click', addGS);
