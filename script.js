(function () {
    var button = document.getElementById('capture');
    button.addEventListener('click', function (e) {
        html2canvas(document.querySelector("#content")).then(canvas => {
            canvas.toBlob(function (blob) {
                console.log('blob created');
            }, 'image/jpeg', 0.95)
        });
    })
})();   