$(document).ready(function() {
    const slider = $(".your-class");
    slider.slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [{
            breakpoint: 1224,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                verticalSwiping: true,
                vertical: true
            }
        }]

    });

    slider.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));


});



var linkNextPage = document.querySelectorAll('.linkNextPage');

function disNone(e) {
    if (this.classList.contains('linkNextPageOne')) {
        e.preventDefault();
        var one = document.querySelector('.one');
        one.classList.add("oneNextpage");
        setTimeout(function() { document.location.href = 'one.html'; }, 600);
        // document.location.href = 'one.html'
        // alert("Это ");
    } else if (this.classList.contains('linkNextPageTwo')) {

        e.preventDefault();
        var two = document.querySelector('.two');
        two.classList.add("twoNextpage");
        setTimeout(function() { document.location.href = 'two.html'; }, 600);


    } else if (this.classList.contains('linkNextPageThree')) {
        e.preventDefault();
        var three = document.querySelector('.three');
        three.classList.add("threeNextpage");
        setTimeout(function() { document.location.href = 'three.html'; }, 600);

    } else if (this.classList.contains('linkNextPageFoure')) {
        e.preventDefault();
        var foure = document.querySelector('.foure');
        foure.classList.add("foureNextpage");
        setTimeout(function() { document.location.href = 'foure.html'; }, 600);

    }

};
for (var i = 0; i < linkNextPage.length; i++) {
    linkNextPage[i].addEventListener('click', disNone, false);
}