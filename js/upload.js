
$(function() {
	$('input#tags').tagsInput({
        width:'auto',
        onAddTag:function(tag){
        	var str =$('input#tags').attr("value");
        	if(str != ""){
        		tag=","+tag;
        	}
        	str+=tag;
            $('input#tags').attr("value", str);
            // console.log($('input#tags').attr("value"));
        },
        onRemoveTag:function(tag){
            // console.log('删除了'+tag)
            var val = $('input#tags').attr("value");
            if(val.indexOf(tag) == 0){
            	val = val.replace(tag+",","");
            }else{
            	var tmp = ","+tag;
            	val = val.replace(tmp,"");
            }
            $('input#tags').attr("value", val);                    
        }
    });
});

$(function() {
    $('span.waitTags').click(function(){
        console.log('222');
        $('#tags').addTag($(this).text());
    });
});