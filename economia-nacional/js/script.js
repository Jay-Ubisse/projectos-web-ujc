const menuItem = document.getElementsByClassName('menu');

document.getElementById('recursos').style.display = 'none';
document.getElementById('industria').style.display = 'none';
document.getElementById('turismo').style.display = 'none';
document.getElementById('comercio').style.display = 'none';

menuItem[0].addEventListener('click', function () {
    document.getElementById('agricultura').style.display = 'block';
    document.getElementById('recursos').style.display = 'none';
    document.getElementById('industria').style.display = 'none';
    document.getElementById('turismo').style.display = 'none';
    document.getElementById('comercio').style.display = 'none';
});

menuItem[1].addEventListener('click', function () {
    document.getElementById('agricultura').style.display = 'none';
    document.getElementById('recursos').style.display = 'block';
    document.getElementById('industria').style.display = 'none';
    document.getElementById('turismo').style.display = 'none';
    document.getElementById('comercio').style.display = 'none';
});

menuItem[2].addEventListener('click', function () {
    document.getElementById('agricultura').style.display = 'none';
    document.getElementById('recursos').style.display = 'none';
    document.getElementById('industria').style.display = 'block';
    document.getElementById('turismo').style.display = 'none';
    document.getElementById('comercio').style.display = 'none';
});

menuItem[3].addEventListener('click', function () {
    document.getElementById('agricultura').style.display = 'none';
    document.getElementById('recursos').style.display = 'none';
    document.getElementById('industria').style.display = 'none';
    document.getElementById('turismo').style.display = 'block';
    document.getElementById('comercio').style.display = 'none';
});

menuItem[4].addEventListener('click', function () {
    document.getElementById('agricultura').style.display = 'none';
    document.getElementById('recursos').style.display = 'none';
    document.getElementById('industria').style.display = 'none';
    document.getElementById('turismo').style.display = 'none';
    document.getElementById('comercio').style.display = 'block';
});