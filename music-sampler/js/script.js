let albumInfo = document.querySelectorAll('.album_info');
let album = document.querySelectorAll('.album');

function hideAll () {
  albumInfo.forEach(function(el){
    el.style.display = 'none';
  });
}

hideAll();

album.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();

    switch (e.target.getAttribute('id')) {
     case 'part1':
       document.querySelector('#old_friendsStuff')
         .style.display = 'block';
       break;
     case 'part2':
       document.querySelector('#blink182Stuff')
         .style.display = 'block';
       break;
     case 'part3':
       document.querySelector('#kool_aidStuff')
       .style.display = 'block';
       break;
     case 'part3_2':
       document.querySelector('#arcadeStuff')
       .style.display = 'block';
       break;
       default:
       document.querySelectorAll('album_info')
       .style.display = "none";
       break;
   }
 }
});
