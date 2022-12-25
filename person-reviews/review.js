//Make the person details by objects.
const reviews = [{
    name: 'Joshim Uddin',
    job: 'FrontEnd Developer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sapiente itaque. Esse, vel maiores! Reprehenderit numquam iure nisi nihil velit iusto, minima voluptas, similique modi possimus ipsa vero facere? Deserunt?',
    img : 'images/imgtwo.jpeg'
},
{
    name: 'Md Nur Uddin',
    job: 'Laravel Developer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sapiente itaque. Esse, vel maiores! Reprehenderit numquam iure nisi nihil velit iusto, minima voluptas, similique modi possimus ipsa vero facere? Deserunt?',
    img: 'images/imgthree.jpeg'
},
{
    name: 'Seikh Forhad',
    job: 'Data entry operator',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sapiente itaque. Esse, vel maiores! Reprehenderit numquam iure nisi nihil velit iusto, minima voluptas, similique modi possimus ipsa vero facere? Deserunt?',
    img: 'images/imgfour.jpeg'
},
{
    name: 'Hm nayem',
    job: 'Mern Developer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sapiente itaque. Esse, vel maiores! Reprehenderit numquam iure nisi nihil velit iusto, minima voluptas, similique modi possimus ipsa vero facere? Deserunt?',
    img : 'images/imgfive.jpeg'
}
]
//select div and buttons
const images = document.getElementById('myImg');
const names = document.getElementById('name');
const job = document.getElementById('job');
const details = document.getElementById('summary');
//select buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

//acess items from object.
let currentItem = 0;
//add evenlistner when window loaded.
window.addEventListener('DOMContentLoaded', function () {
    
    showPersonDetails(currentItem);
})

//show person details
function showPersonDetails() {
    const items = reviews[currentItem];
    images.src = items.img;
    names.textContent = items.name;
    job.textContent = items.job;
    details.textContent = items.text;
}
//add evenlister for nextBtn
nextBtn.addEventListener('click', function () {

    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPersonDetails(currentItem);
});
//add evenlistner for prev button
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPersonDetails(currentItem);
})