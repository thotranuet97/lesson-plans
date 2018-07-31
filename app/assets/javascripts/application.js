// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap
//= require bootstrap-sprockets

$(document).ready(function () {
    // $(".click-toggle").click(function(){
    //     $(this).next().toggle('3000');
    //     $(this).toggleClass("fa-angle-down fa-angle-right");
    // });

    /* Ajax filter category */
    // $('.click-cat').click(function () {
    //     event.preventDefault();
    //     var cat_id = $(this).attr('data_id');
    //
    //     $.ajax({
    //         url: "/posts/",
    //         method: "POST",
    //         data: {
    //             id: cat_id
    //         },
    //         success: function () {
    //             $('.post-archive').html('<div>'+cat_id+'</div>');
    //         }
    //     })
    // })

    $('.filter-list li input').on('change', function() {
        var input_name = $(this).attr('name');
        var group = ".filter-list li input[name='" + input_name + "']"
            $(group).not(this).prop('checked', false);
    });
})