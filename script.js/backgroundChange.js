document.getElementById('backColorChange').addEventListener('click', function(event){
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    const bgColor = `rgba(${a}, ${b}, ${c},0.2)`;
    document.body.style.background = bgColor;
})