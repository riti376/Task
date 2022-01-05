function myfun(data) {
  var row = document.querySelector('#table');
  for(const [x, arr] of Object.entries(data)){
      for(const item of arr)
          {
              var myhtml = '<table class = "table"><tr><td class="table-primary">' + item.name + '</td><td class="table-primary">' + item.company + '</td></tr></table>';
              row.innerHTML += myhtml;
              console.log('running')
          }
  }
}
fetch('https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6', )
  .then(response => response.json())
  .then(data => myfun(data));





