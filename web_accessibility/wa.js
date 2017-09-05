/**
 * Created by Administrator on 2017-08-18.
 */

$(function(){

  var url

  $('.gnb-depth1-link').on({

    'mouseenter': function () {
      $(this).next().addClass('on');
    },

    'mouseleave' : function(){
      $(this).next().removeClass('on');
    },

    'focusin' : function(){
      $(this).next().addClass('on');
    }

  });

  $('.gnb-depth2-link').on('focusout', function(){

    // 현재 a태그의 부모
    var $parent = $(this).parent('.gnb-depth2-item');

    // 현재 a태그의 조상 gnb-depth2 : 해당 gnb-depth2 중에서 몇번째인지 찾기 위해서
    var $parents = $(this).parents('.gnb-depth2').find('.gnb-depth2-item');

    if( $parents.index( $parent ) ==($parents.length-1) ){

      $(this).parents('.gnb-depth2').removeClass('on');
    }

  });

  $('.select-design-button').data('open', 'false').on('click', function(){

    if( $(this).data('open') == 'false' ){

      $(this).next().addClass('on');
      $(this).data('open', 'true');

    } else {

    $(this).next().removeClass('on');
    $(this).data('open', 'false');

    }

  });

  $('.select-design-list-item-button').on('click', function(){
    $('.select-design-button').text( $(this).text() );

    $('.select-design-list').removeClass('on');
    $('.select-design-button').data('open','false');

  });

  $('.select-radio-label').on('click', function(){

    $('.select-design-button').text( $(this).text() );

    $('.select-design-list').removeClass('on');
    $('.select-design-button').data('open','false');

    url = $(this).prev().data('url');

  });

  $('.family-site-move').on('click', function(){

    //location 객체의 href 프로퍼티에 주소값을 넣어주면 해당 주소로 이동동
    //locationhref = url;

    //새창 열기
    window.open(url);
  });

});




























