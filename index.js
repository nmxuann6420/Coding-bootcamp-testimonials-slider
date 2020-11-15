function slide() {

    const slideList = [{
            description: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
            name: "Tanya Sinclair",
            job: "UX Engineer",
            photoSrc: "images/image-tanya.jpg",
        },

        {
            description: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
            name: "John Tarkpor",
            job: "Junior Front-end Developer",
            photoSrc: "images/image-john.jpg",
        },
    ];

    var nextArrow = document.querySelector('.next-slide__next');
    var prevArrow = document.querySelector('.next-slide__prev');
    var descriptionElement = document.querySelector('.content__description');
    var nameElement = document.querySelector('.name');
    var jobElement = document.querySelector('.job');
    var imageElement = document.querySelector('.slide__image-person');

    var pos = 0;

    function nextSlide(e) {
        e.target.parentElement.onclick = function (e) {
            e.preventDefault();
        }
        if(e.target.className === 'next-slide__next') {
            pos++;
        } else {
            pos--;
        }

        if(pos === slideList.length) {
            pos = 0;
        } else if(pos < 0) {
            pos = slideList.length - 1;
        }

        descriptionElement.innerText = slideList[pos].description;
        nameElement.innerText = slideList[pos].name;
        jobElement.innerText = slideList[pos].job;
        imageElement.setAttribute('src', slideList[pos].photoSrc);
    }

    nextArrow.addEventListener('click', nextSlide);
    prevArrow.addEventListener('click', nextSlide);

    var boxNext = document.querySelector('.slider__next-link');
    console.log(boxNext);
    boxNext.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target.className);
    })
}