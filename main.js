function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbx1thxh7jFTKREi-4acPVqGnoS5JTK43_WDAvwSTS3zg_T3gyzB-NLFOe949UGQMfy-/exec";

  fetch(url)
  .then(d => d.json())
  .then(d => {
    document.getElementById('app').textContent = d[0].status;
  })
}

document.getElementById('btn').addEventListener('click', testGS);