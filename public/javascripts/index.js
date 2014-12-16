$(function(){
    $(".del").click(function(e){
        e.preventDefault();
        var btn = $(e.target);
        var tr = btn.parent().parent();
        tr.remove();
        var names = $(".name");
        for(var i = 1 ; i <= names.length ;i++){
            var pos = i - 1 ;
            names[pos].innerText = "P"+ i;
            names[pos].nextSibling.firstChild.firstChild.firstChild.setAttribute('name',"[" + i + "]" + "[0][0]");
            names[pos].nextSibling.firstChild.firstChild.nextSibling.firstChild.setAttribute('name',"[" + i + "]" + "[0][1]");
            names[pos].nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.setAttribute('name',"[" + i + "]" + "[0][2]");
            names[pos].nextSibling.nextSibling.firstChild.firstChild.firstChild.setAttribute('name',"[" + i + "]" + "[1][0]");
            names[pos].nextSibling.nextSibling.firstChild.firstChild.nextSibling.firstChild.setAttribute('name',"[" + i + "]" + "[1][1]");
            names[pos].nextSibling.nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.setAttribute('name',"[" + i + "]" + "[1][2]");
            names[pos].nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.setAttribute('name',"[" + i + "]" + "[2][0]");
            names[pos].nextSibling.nextSibling.nextSibling.firstChild.firstChild.nextSibling.firstChild.setAttribute('name',"[" + i + "]" + "[2][1]");
            names[pos].nextSibling.nextSibling.nextSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.setAttribute('name',"[" + i + "]" + "[2][2]");
        };
    });
    $(".add").click(function(e){
        e.preventDefault();
        var lenNow = $(".name").length + 1;
        $(".avai").attr("rowspan",function(){
            this.rowSpan++;
            return this.rowSpan
        });
        $("tbody").append('<tr><td class="name">P'+lenNow+'</td><td><div class="row"><div class="col-xs-4"><input type="text" name="['+lenNow+'][0][0]" value="0" class="form-control"></div><div class="col-xs-4"><input type="text" name="['+lenNow+'][0][1]" value="0" class="form-control"></div><div class="col-xs-4"><input type="text" name="['+lenNow+'][0][2]" value="0" class="form-control"></div></div></td><td><div class="row"><div class="col-xs-4"><input type="text" name="['+lenNow+'][1][0]" value="0" class="form-control"></div><div class="col-xs-4"><input type="text" name="['+lenNow+'][1][1]" value="0" class="form-control"></div><div class="col-xs-4"><input type="text" name="['+lenNow+'][1][2]" value="0" class="form-control"></div></div></td><td><div class="row"><div class="col-xs-4"><input type="text" name="['+lenNow+'][2][0]" value="0" class="form-control"></div><div class="col-xs-4"><input type="text" name="['+lenNow+'][2][1]" value="0" class="form-control"></div><div class="col-xs-4"><input type="text" name="['+lenNow+'][2][2]" value="0" class="form-control"></div></div></td><td><button disabled="disabled" class="btn-danger btn">false</button></td><td><button class="btn-danger btn del">delete</button></td></tr>');
    });

    //检查输入的数符合要求
    var valueBefore;
    $("input").focus(function(e){
        var input = $(e.target);
        valueBefore = input.val();
    });
    $("input").blur(function(e){
        var input = $(e.target);
        var valueAfter = input.val();
        var patten=new RegExp(/^[0-9]+$/);
        if(patten.test(valueAfter) !== true ||valueAfter < 0 || valueAfter > 99 || valueAfter.length > 2 ){
          alert("输入的数需要是一个小于100的两位正整数！") ;
          input.attr("value",valueBefore);
          input.val(valueBefore);
          return;
        };
        if(valueAfter[0] == 0 && valueAfter.length >= 2){
          valueAfter = valueAfter.slice(1,2);
          input.attr("value",valueAfter);
          input.val(valueAfter);
        };
    });
});