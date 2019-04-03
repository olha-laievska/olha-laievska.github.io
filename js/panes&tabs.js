$(document).ready(function(){
    // Hiding the courses taken in each quarter by hiding all the div elements that follow the main education article
    $('.edu-ex-1 > div').hide();

    // Show the courses taken by opening the pane on a click and collapsing if clicked again
    $('.edu-ex-1 h3').click(function(){
        $(this).next().animate(
            {'height':'toggle'}, 'slow');
    }); 

    // select tabs container and add a click listener
    $('.tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Toggle tabs to show / hide
        $('.tabs ' + currentAttrValue).fadeIn(400).siblings().fadeOut(0);

        // Add active class to selected tab and remove active class from other tab
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();     
    
    }); 
});

