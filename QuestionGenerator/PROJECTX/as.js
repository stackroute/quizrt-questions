(function($){
   var tempQID="https://www.wikidata.org/wiki/Special:EntityData/"
   var playListURL = 'https://www.wikidata.org/wiki/Special:EntityData/Q668.json';
   $.getJSON(playListURL ,function(data) {
     //console.log(data);
       var hash = data
       $.each(data["entities"]["Q668"]["claims"],function(k,v){
           if(k==="P36"){
           $.each(v,function(key,val){
           var numericID="Q"+val["mainsnak"]["datavalue"]["value"]["numeric-id"];
           var capitalLink=tempQID+numericID+".json"
             $.getJSON(capitalLink ,function(data1){
               alert(data1["entities"][numericID]["labels"]["en"]["value"]);
             });
           });
         }
       });
   });
 })(jQuery);
