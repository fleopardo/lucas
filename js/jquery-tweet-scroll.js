/*** Minified version of jCarouselLite v 1.0.1 included under the MIT License

**** (http://www.opensource.org/licenses/mit-license.php).

**** Many thanks to Ganeshji Marwaha (gmarwaha.com) ***/

(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:800,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);



(function($){

    $.fn.twitscroller = function(options) {

        var

          defaults = {

                    user: null,

                    visible: 2,

                    speed: 7000,

                    vertical: true,
                    easing: 'easeOutBounce',

                    count: 10

          },

          settings = $.extend({}, defaults, options);

          function parse_date(date_str) {
		      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
		      // cannot handle in IE. We therefore perform the following transformation:
		      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
		      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
		    }

          function relative_time(time_value) {
		      var parsed_date = parse_date(time_value);
		      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
		      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
		      var r = '';
		      if (delta < 60) {
			r = delta + ' segundos';
		      } else if(delta < 120) {
			r = 'un minuto';
		      } else if(delta < (45*60)) {
			r = (parseInt(delta / 60, 10)).toString() + ' minutos';
		      } else if(delta < (2*60*60)) {
			r = 'una hora';
		      } else if(delta < (24*60*60)) {
			r = '' + (parseInt(delta / 3600, 10)).toString() + ' horas';
		      } else if(delta < (48*60*60)) {
			r = 'un dia';
		      } else {
			r = (parseInt(delta / 86400, 10)).toString() + ' dias';
		      }
		      return 'hace ' + r;
		    }


          this.each(function() {



                    var $this = $(this);

                    $this.html('');

                    $this.addClass('twitscroller-replace');



                    $.ajax({

                        type: "GET",

                        url: "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + settings.user,

                        data: {count: settings.count},

                        dataType: "jsonp",

                        success: function (res){

                            $('<ul>').appendTo('.twitscroller-replace')

                            $(res).each(function(i, val) {

                                var title = val.text

                                .replace(/\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/ig, '<a href="$&" target="_top">$&</a>')

                                .replace(/@(\w*)\b/ig, '@<a href="http://twitter.com/$1" target="_top">$1</a>')

                                .replace(/#(\w*)\b/ig, '<a href="http://twitter.com/search?q=%23$1" target="_top">#$1</a>');

                                var date = relative_time(val.created_at);

                                var link = "http://twitter.com/vegagirl5/statuses/" + val.id;

                                $('<li></li>')

                                .html('<span class=\"title-twit\"><a href=\"'+link+'\" target="_top">'+title+'</a></span></span>')

                                .append('<span class=\"date\">'+date+'</span>')

                                /*.append('<span class=\"link\"><a href=\"'+link+'\" target="_top">Ver mas</a></span>')*/

                                .appendTo('.twitscroller-replace ul');

                            });

                            $('.twitscroller-replace').jCarouselLite({

                                vertical: settings.vertical,

                                visible: settings.visible,

                                auto: settings.speed

                            });

                            $('.twitscroller-replace').removeClass('twitscroller-replace');

                        }

                    });

          });

          return this;

    }

})(jQuery);