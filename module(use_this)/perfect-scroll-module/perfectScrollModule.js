angular.module('perfectScrollModule',[])
    //use this directive when you want to scroll to top on click of an event
    .directive('scrollTop',[function(){
    "use strict";
        return {
            restrict:   'A',
            link:   function(scope,element,attrs){
                var ele =   angular.element(element).find('a');
                ele.on('click',function(e){
                    var perfectScroll   =   angular.element('.ps-container');
                    perfectScroll.scrollTop(0);
                });
            }
        };
    }])
    //perfect scroll directive
    .directive('perfectScroll', ['$window','$parse',function($window,$parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var windowObj   =   angular.element($window);

                //Do not apply on small devices
                if(windowObj.width() < 768){
                    return;
                }

                //add CSS which is neccessary for the scrollbar to work
                var applyScrollbarCSS    =   function(){
                    element.css('overflow','hidden');
                    element.css('position','relative');
                };

                //when scrollbar is destroyed this function is used
                var revertScrollbarCss  =   function(){
                    element.css('overflow','initial');
                    element.css('position','relative');
                };

                //set height of the element as this is also required for the scrollbar to work
                var setHeightOfElement  =   function(){
                    if(attrs.perfectScroll){
                        element.css('height',attrs.perfectScroll+"px");
                    } else {
                        element.css('height',(windowObj.height()-40)+"px");
                    }
                };


                setHeightOfElement();
                applyScrollbarCSS();

                //prepare object to be passed to the perfect scroll plugin
                //parse is used as value passed from attr is string and of no use to us
                var perfectScrollObject =   {
                    wheelSpeed: $parse(attrs.wheelSpeed)() || 50,
                    wheelPropagation: $parse(attrs.wheelPropagation)() || false,
                    minScrollbarLength: $parse(attrs.minScrollbarLength)() || false,
                    useBothWheelAxes: $parse(attrs.useBothWheelAxes)() || false,
                    suppressScrollX: $parse(attrs.suppressScrollX)() || false,
                    suppressScrollY: $parse(attrs.suppressScrollY)() || false
                };

                //if padding is applied then add padding,scrollbar looks better this way
                if(attrs.scrollPadding){
                    element.css('padding-right',attrs.scrollPadding+"px");
                }

                //apply the scrollbar to the element
                element.perfectScrollbar(perfectScrollObject);

                //when window is resized change the scroll bar
                windowObj.resize(function(){
                    "use strict";
                    element.perfectScrollbar('destroy');
                    revertScrollbarCss();

                    //if the width of the screen is greater than 768 then update the scrollbar
                    //cause scroll in touch devices suck.
                    if(windowObj.width() > 768){
                        console.log(perfectScrollObject);
                        element.perfectScrollbar(perfectScrollObject);
                        setHeightOfElement();
                        applyScrollbarCSS();
                    }
                });

                //Function to find the sum height of all the elements inside the element on which the directive is applied
                var actualHeight    =   function(){
                    "use strict";
                    var totalHeight = 0;
                    element.children().each(function(){
                        totalHeight = totalHeight + angular.element(this).outerHeight();
                    });
                    return totalHeight;
                };

                //update the actual height of the element
                scope.$watch(function(){
                    "use strict";
                    scope.elementHeight =   actualHeight();
                });

                //update the scrollbar when the actual height of the element is changed
                scope.$watch('elementHeight',function(){
                    "use strict";
                    element.perfectScrollbar('update');
                });


    }}}]);