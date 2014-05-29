angular.module('perfectScrollModule',[])
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

    .directive('perfectScroll', ['$window','$rootScope',function($window, $rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var windowObj   =   angular.element($window);

                //Do not apply on small devices
                if(windowObj.width() < 768){
                    return;
                }


                var applyScrollbarCSS    =   function(){
                    element.css('overflow','hidden');
                    element.css('position','relative');
                };

                var revertScrollbarCss  =   function(){
                    element.css('overflow','initial');
                    element.css('position','relative');
                };


                var setHeightOfElement  =   function(){
                    if(attrs.perfectScroll){
                        element.css('height',attrs.perfectScroll+"px");
                    } else {
                        element.css('height',(windowObj.height()-40)+"px");
                    }
                };

                setHeightOfElement();
                applyScrollbarCSS();

                
                var perfectScrollObject =   {
                    wheelSpeed: attrs.wheelSpeed ? attrs.wheelSpeed :  50,
                    wheelPropagation: attrs.wheelPropagation ? attrs.wheelPropagation :  false,
                    minScrollbarLength: attrs.minScrollbarLength ? attrs.minScrollbarLength :  false,
                    useBothWheelAxes: attrs.useBothWheelAxes ? attrs.useBothWheelAxes :  false,
                    suppressScrollX: attrs.suppressScrollX ? attrs.suppressScrollX :  false,
                    suppressScrollY: attrs.suppressScrollY ? attrs.suppressScrollY :  false,
                };


                if(attrs.scrollPadding){
                    element.css('padding-right',attrs.scrollPadding+"px");
                }

                element.perfectScrollbar({suppressScrollX:true});
                windowObj.resize(function(){
                    "use strict";
                    element.perfectScrollbar('destroy');
                    revertScrollbarCss();

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

                scope.$watch(function(){
                    "use strict";
                    scope.elementHeight =   actualHeight();
                });

                scope.$watch('elementHeight',function(){
                    "use strict";
                    element.perfectScrollbar('update');
                });


    }}}]);