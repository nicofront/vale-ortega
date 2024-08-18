$(document).ready(function() {

    $('select').select2();

    $('.sidebar__trigger, .sidebar__layer').click(function(event){
        event.preventDefault();
        $('.sidebar').stop().toggleClass('sidebar--active');
    });

    $('.header__contrast').click(function(event){
        event.preventDefault();
        $('body').toggleClass('darkmode');
    });

    $('.accordion__trigger').click(function(event){
        var self = $(this);
        event.preventDefault();
        self.toggleClass('accordion__trigger--active');
        self.next().stop().slideToggle();
    });

    $('.search__filters select').change(function(){
        var self = $(this);
        var name = self.attr('name');
        var selected = self.children("option:selected").val();
        if(selected){
            $("select[name=" + name + "]").next().addClass('active');
        }else{
            $("select[name=" + name + "]").next().removeClass('active');
        }
    });

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

}); //end ready