/**
 * Created by Administrator on 2017-08-18.
 */

$(function(){

  $('.gnb-depth1-link').on({

    'mouseenter': function () {
      $(this).next().addClass('on');
    },

    'mouseleave' : function(){
      $(this).next().removeClass('on');
    }

  });

  $('.family-site-select').selectric();
});