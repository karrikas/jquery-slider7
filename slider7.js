(function ( $ ) {
 
    $.fn.slider7 = function( options ) {

        return this.each(function(){
            var settings = $.extend({
                height: "400px",
                imgContent: "div",
                imgMarginRight: "15px",
                speed: 15
            }, options );

            var $this = $(this);
            var $width = 0;
            var $widthThis = $this.innerWidth();
            var innerHtml = "";
            var $inner = "";
            var $currentPosition = 0;
            var $interval;

            innerHtml = $this.children(settings.imgContent).detach();
            var $inner = $("<div>").html(innerHtml).appendTo($this);
            var $btnPrev = $("<a>").attr("href", "#").appendTo($this);
            var $spanPrev = $("<span>").html(" < ").appendTo($btnPrev);
            var $btnNext = $("<a>").attr("href", "#").appendTo($this);
            var $spanNext = $("<span>").html(" > ").appendTo($btnNext);

            $inner.find(settings.imgContent).find("img").each(function(){
                $(this).css({
                    "margin-right": settings.imgMarginRight,
                    "height": settings.height
                });
                $width += $(this).width();
                $width += 15;
                console.log($width);
            });

            $inner.children(settings.imgContent).css({
                "float": "left"
            });

            $this.css({
                "position": "relative",
                "overflow": "hidden"
            });

            $inner.css({
                "height": settings.height,
                "width": ($width+100)+"px",
                "overflow": "hidden",
                "position": "relative"
            });

            $btnNext.css({
                "position": "absolute",
                "right": "0px",
                "top": "0px",
                "height": settings.height,
                "background-color": "rgba(0,0,0,0.5)",
                "width": "50px",
                "text-decoration": "none"
            });

            $btnPrev.css({
                "position": "absolute",
                "left": "0px",
                "top": "0px",
                "height": settings.height,
                "background-color": "rgba(0,0,0,0.5)",
                "width": "50px",
                "text-decoration": "none"
            });


            $spanCss = {
                "color": "white",
                "display": "table-cell",
                "height": settings.height,
                "text-align": "center",
                "vertical-align": "middle",
                "width": "50px",
                "font-size": "40px"
            };
            $spanNext.css($spanCss);
            $spanPrev.css($spanCss);

            $btnNext.on("mouseover", function(event) {
                $interval = setInterval(goAhead, 10)
            });

            $btnNext.on("mouseout", function(event) {
                 clearInterval($interval);
            });

            $btnPrev.on("mouseover", function(event) {
                $interval = setInterval(goBack, 10)
            });

            $btnPrev.on("mouseout", function(event) {
                 clearInterval($interval);
            });

            function goAhead () {
                if ($currentPosition <= -($width-40-$widthThis)) {
                    return false;
                }
                $currentPosition -= settings.speed;
                $inner.css("left", $currentPosition+"px");
            }

            function goBack () {
                if ($currentPosition >= 0) {
                    $currentPosition = 0;
                    return false;
                }
                $currentPosition += settings.speed;
                $inner.css("left", $currentPosition+"px");
            }
        });
    };
 
}( jQuery ));

