tippy('#discord', {
  content: '_Ollie#4505',
});

function updateInsert(){
  const season = ['Winter', 'Spring', 'Summer', 'Fall'][Math.floor(((new Date()).getMonth() / 12 * 4)) % 4];
  const insert = document.getElementById('insert');

  if(season == 'Winter'){
    insert.innerText = 'in a barren, frozen wasteland somehere in ';
  } else if(season == 'Spring'){
    insert.innerText = ' in a warm sunny state in ';
  } else if(season == 'Summer'){
    insert.innerText = 'somewhere very hot in ';
  } else if(season == 'Fall'){
  insert.innerText = ' in a chilly state of ';
  }
}

updateInsert();