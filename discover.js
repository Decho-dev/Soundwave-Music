$(document).ready(function() {
    let newDiv = $('<div>');
    let img = $('<img>');
    img.appendTo(newDiv);
    img.css({'width': '60%', 'height' : '80%', 'margin': '5% 20%'})
    newDiv.appendTo('.full-container')
    newDiv.css({'position' : 'absolute','top' : '80px', 'left' : '50%','transform': 'translateX(-50%)' ,'width': '70%' , 'height' : '70%', 'background-color' : 'rgba(255,0,0,0.3)', 'cursor' : 'pointer'})
    newDiv.hide()

    $('.poster img').click(function() {
        img.attr('src', $(this).attr('src'))
        newDiv.stop().slideDown(200);
    })

    newDiv.click(function() {
        newDiv.stop().slideUp(200)
    })
})
