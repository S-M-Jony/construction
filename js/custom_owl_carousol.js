   /*owl carousel start*/
        $('.testimonial-carousel').owlCarousel({
            items: 2,
            nav: false,
            dots: true,
            margin: 30,
            responsive:{
                0:{
                    items: 1,
                },
                767:{
                items: 2,
              }
            }  
        });