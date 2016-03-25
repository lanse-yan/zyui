//dialog
(function($){
  var zdialog = {
    init: function(opts){
      var defaults = {
        title: '信息提示',
        okbtn: '确认',
        cancelbtn: false
      };
      opts = $.extend({}, defaults, opts);
      this.createUI(opts);
      this.addEvent(opts);
      $('.dialog').on('click', function(e){
        var $this = $(e.target);
        if($this.hasClass('dialog-btn') || $this.hasClass('dialog-close')){
          $('.dialog').hide();
        }
      })
    },
    createUI: function(opts){
      var htmArr = ['<div class="dialog"><div class="dialog-content">', this.createHeader(opts),
        this.createBody(opts), this.createFooter(opts), '</div></div>'];
      $('body').append(htmArr.join(''));
    },
    createHeader: function(opts){
      var titleHtm = ' <div class="dialog-header"><span class="dialog-title">' + opts.title
        + '</span><span class="dialog-close"></span></div>';
      return titleHtm;
    },
    createBody: function(opts){
      var bodyHtm = '<div class="dialog-body">' + opts.body + '</div>';
      return bodyHtm;
    },
    createFooter: function(opts){
      var btnHtm = '<div class="dialog-footer">';
      if(opts.okbtn){
        btnHtm += '<button type="button" class="dialog-btn ok">' + opts.okbtn + '</button>';
      }
      if(opts.cancelbtn){
        btnHtm += '<button type="button" class="dialog-btn cancel">' +opts.cancelbtn+ '</button>';
      }
      return btnHtm + '</div>';
    },
    updateBody: function(str){
      $('.dialog-body').html(str);
    },
    updateTitle: function(str){
      $('.dialog-title').html(str);
    },
    updateFooter: function(opts){
      var htm = this.createFooter();
      $('.dialog-footer').replaceWith(htm);
    },
    addEvent: function(opts){
      if(opts.okHandler){$('.dialog .ok').on('click', opts.okHandler);}
      if(opts.cancelHandler){$('.dialog .cancel').on('click', opts.cancelHandler);}
    }
  };
  $.zdialog = {
    init: function(opts){
      if(!$.isPlainObject(opts)){
        zdialog.init({body: opts});
      }else {
        zdialog.init(opts);
      }
    },
    update: function(str){
      if($('.cancel').length > 0){$('.cancel').remove();}//只有一个确定按钮
      $('.ok').off('click');
      zdialog.updateBody(str);
      $('.dialog').show();
    },
    modify: function(opts){//改变框体内容，增加callback,只有一个确定按钮
      if($('.cancel').length > 0){$('.cancel').remove();}
      $('.ok').off('click');
      zdialog.updateBody(opts.body);
      zdialog.addEvent(opts);
      $('.dialog').show();
    },
    confirm: function(opts){
      $('.dialog-footer').empty().html(zdialog.createFooter(opts));
      $('.ok').off('click');
      zdialog.updateBody(opts.body);
      zdialog.addEvent(opts);
      $('.dialog').show();
    }
  }
})(jQuery);