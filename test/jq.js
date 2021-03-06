window.jQuery = function(selectorOrArray){

    let elements;
    if(typeof(selectorOrArray) ==='string'){
        elements=document.querySelectorAll(selectorOrArray);
    }else if(selectorOrArray instanceof Array){
      elements=selectorOrArray;
    }
    return {
        oldApi:selectorOrArray.oldApi,
      addClass(className){
          for(let i=0;i<elements.length;i++){
            
            elements[i].classList.add(className);
          }
        return this;
      },
      find(selector){
        let array=[];
        for(let i=0;i<elements.length;i++){  
          const newEl=elements[i].querySelectorAll(selector);
          array=array.concat(Array.from(newEl));
        }
        array.oldApi=this;
        return jQuery(array);
      }
    }
  }
  
  window.$ = window.jQuery
  
  $('#test').find('.child').addClass('red')