document.getElementById('home').addEventListener('click', ()=>{
    document.getElementById('home').classList.add('active');
    document.getElementById('service').classList.remove('active');
    document.getElementById('blog').classList.remove('active');
    document.getElementById('about').classList.remove('active');
});

document.getElementById('service').addEventListener('click', ()=>{
    document.getElementById('home').classList.remove('active');
    document.getElementById('service').classList.add('active');
    document.getElementById('blog').classList.remove('active');
    document.getElementById('about').classList.remove('active');
});

document.getElementById('blog').addEventListener('click', ()=>{
    document.getElementById('home').classList.remove('active');
    document.getElementById('service').classList.remove('active');
    document.getElementById('blog').classList.add('active');
    document.getElementById('about').classList.remove('active');
});

document.getElementById('about').addEventListener('click', ()=>{
    document.getElementById('home').classList.remove('active');
    document.getElementById('service').classList.remove('active');
    document.getElementById('blog').classList.remove('active');
    document.getElementById('about').classList.add('active');
});