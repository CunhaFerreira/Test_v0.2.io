$(document).ready(function () {

            let $btns = $('.project-section .button-group button');

            $btns.click(function (e) {

                $('.project-section .button-group button').removeClass('active');
                e.target.classList.add('active');

                let selector = $(e.target).attr('data-filter');
                $('.project-section .grid').isotope({
                    filter: selector
                });

                return false;
            })

            //$('.project-section .button-group #btn1').trigger('click'); Add this function if images with diff. size has been added


            //Sticky Navegation Menu
            let nav_offset_top = $('.header-section').height() + 50;

            function navbarFixed() {
                if ($('.header-section').length) {
                    $(window).scroll(function () {
                        let scroll = $(window).scrollTop();
                        if (scroll >= nav_offset_top) {
                            $('.header-section .main-menu nav').addClass('navbar-fixed');
                        } else {
                            $('.header-section .main-menu nav').removeClass('navbar-fixed')
                        }
                    })
                }

            }
         
                navbarFixed();

            });
         