const button = document.getElementById('button');
const main = document.getElementById('main');
const text = document.getElementById('hsl-text')
const copy = document.getElementById('clipboard-svg');
const clipboardButton = document.getElementById('clipboard-button');
const copyText = document.getElementById('color-copy-text')

button.addEventListener('click', function() {
    let hue = Math.round(Math.random()*100);
    let saturation = Math.round(Math.random()*100);
    let luminosity = Math.round(Math.random()*100);

   let color = `HSL(${hue}, ${saturation}%, ${luminosity}%)`;
   if (luminosity > 70 || (saturation > 50 && luminosity > 50) || (saturation > 69 && luminosit > 39) || (hue > 40 && hue < 60 && luminosity > 40)) {
        text.style.color = '#141414';
        button.style.color = '#141414';
        copy.style.fill = '#141414';
        copyText.style.color = '#141414' ;

   }else {
        text.style.color = 'white';
        button.style.color = 'white';
        copy.style.fill = 'white';
        copyText.style.color = 'white' ;
   }

    text.innerText = color;
    main.style.backgroundColor = color;

});

document.getElementById('clipboard-button').addEventListener('click', function() {
    var textToCopy = document.getElementById('hsl-text').innerText;
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Para dispositivos móviles
    copyText.style.visibility = 'visible';

    navigator.clipboard.writeText(tempTextArea.value).then(function() {
        // Mostrar el mensaje de confirmación después de copiar el texto
        setTimeout(function() {
            copyText.style.visibility = 'hidden';
        }, 2000);
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
    
    document.body.removeChild(tempTextArea);
});


