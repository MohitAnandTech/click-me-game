const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
 const height = Math.floor(Math.random()*window.innerHeight)
  const width = Math.floor(Math.random()*window.innerWidth)
    // console.log('Mouse Over Me!');
    btn.style.left = `${width}`;
    btn.style.top = `${height}`;
});


btn.addEventListener('click', function() {
    btn.innerText = "Yo Got ME!! HA HA";
    document.body.style.backgroundColor = "green";
   });

