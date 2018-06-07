$( document ).ready(function() {
    
    
    var navlink = $('.nav-link'),
        subNavContainer = $('.sub-nav__container'),
        mobileNavBtn = $('.hamburger-menu'),
        mobileNavBg = $('.mobile-nav__container');

    var displaySubNav = (function(linkObj){
        $('div').removeClass('sub-nav__container--show');    
        $('.'+linkObj+'SubNav').addClass('sub-nav__container--show');
    });

    var hideSubNav = (function(subNavObj){
        $(subNavObj).removeClass('sub-nav__container--show');
    });

    var hoverOnLink = $(navlink).on('mouseover', function(){
        var thisClickedObj = $(this),
            selectedSubNav = thisClickedObj[0].id; 
        displaySubNav(selectedSubNav);        
    });

    var hoverOutLink = $(subNavContainer).on('mouseout', function(){
        var mouseOutSubNav = $(this);
        hideSubNav(mouseOutSubNav);
        
    })
    
    var showMobilNav = (function(){
        $(mobileNavBg).css('display', 'block');
    });

    var hideMobilNav = (function(){
        $(mobileNavBg).css('display', 'none');
    });

    var openMobileNav = $(mobileNavBtn).on('click', function(){
        showMobilNav();
    })
    
    var closeMobileNav = $(mobileNavBg).on('click', function(){
        hideMobilNav();
    })

});
