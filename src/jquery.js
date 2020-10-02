const { selectors } = require("sizzle")

window.jQuery = function(selectorORArray){

    //1.
    // const elements = document.querySelectorAll(selector)
    //2.
    let elements;
    if( typeof selectorORArray === 'string' ){
        elements = document.querySelectorAll(selectorORArray);
    }else if( selectorORArray instanceof Array){
        elements = selectorORArray;
    }

    const api= {

        oldApi : selectorORArray.oldApi,
        //find 返回了一个新的newApi
        find(selector){
            //之后要对这个数组进行操作，不能直接对伪数组newEl操作
            let array=[];
            for(let i=0;i<elements.length;i++){
                            //scope:elements[i]
                const newEl=elements[i].querySelectorAll(selector)
                array=array.concat(Array.from(newEl));

            }

            //保存一个曾经的api,即function jQuery 创建的api
            array.oldApi = this; //原来的api
            //不直接return array
            const newApi =jQuery(array);
            return newApi;
        },

        end(){

            return this.oldApi; //新的api

        },

        each(fn){
            for(let i=0;i<elements.length;i++){
                //不指向this
                fn.call(null,elements[i],i)

            }
            return this; //this===api
        },

        parent(){
            const array=[];
            //每个elements[i].parentNode 都放入array
            this.each((node)=>{
                if(array.indexOf(node.parentNode)===-1){
                    array.push(node.parentNode)
                }
            });
            //newApi
            return jQuery(array);
        },

        children(){

            const array=[];
            this.each((node)=>{
                //一定要展开node.children
                 array.push(...node.children)
            })
            return jQuery(array);
        },

        print(){

            console.log(elements); //当前元素
        },

        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this; //api.addClass(),this===api
        },

    }
    return api;
}

window.$=window.jQuery;

