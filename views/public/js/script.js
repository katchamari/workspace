function windowSettings(window){
    window.draggable({
        handle:'.window-header',
        containment:$('#workspace')
    });
    window.resizable({
        minHeight:200,
        minWidth:400,
        containment:$('#workspace')
    });
}
$(document).ready(function(){
    windowSettings($('.workspace-window'));
    $(document).on('click', '.close-window', function(e){
        e.preventDefault();
        $(this).parents('.workspace-window').fadeOut(200, () => {
            $(this).remove();
        })
    })

    $(document).on('click', function(e){
        e.preventDefault();

        if(!$(e.target).closest('.nav-item.active').length){
            $('.nav-item, .sub-menu-list').removeClass('active');
        }
    })

    $('.nav-item a').on('click', function(e){
        console.log('sdfsdfsdfds');
        e.preventDefault();
        const href = $(this).attr('href');
        const navItem = $(this).parent();
        const subMenu = $(`.sub-menu-list${href}`);
        
        $('.nav-item, .sub-menu-list').removeClass('active');

        if(navItem.is('.opens-submenu')){
            navItem.addClass('active');
            subMenu.addClass('active');
            navItem.parentsUntil('.main-nav-list').addClass('active');
        }
    });
})