function addlist(task){
    var doList=document.getElementById("dolist");//添加li
    var mission=document.createElement("li");
    doList.appendChild(mission);

    var lab=document.createElement("label");//li内任务内容
    lab.appendChild(document.createTextNode(task));
    mission.appendChild(lab);
    lab.className="lab";

    var btn=document.createElement("button");//添加单个删除
    btn.appendChild(document.createTextNode("删除"));
    mission.appendChild(btn);
    btn.className="del";
    btn.onclick=function(){
        btn.parentNode.parentNode.removeChild(btn.parentNode);
    };
     
    var btn2=document.createElement("button"); //添加单个修改
    btn2.appendChild(document.createTextNode("修改"));
    mission.appendChild(btn2);
    btn2.className="fix";
    btn2.onclick=function(){
        var fix=prompt("请输入要修改后的任务内容");
        btn2.parentNode.firstChild.innerHTML=fix;
    }
}

function getKey(){
    if(event.keyCode===13){
        var task=document.getElementById("thing").value;
        if(task==null||task==""){
            return;
        }else{
        addlist(task);
        document.getElementById("thing").value="";
        }
    }  
}

function deleteAll(){
    if(confirm("您确定要删除列表中所有的任务吗？")){
    document.getElementById("dolist").innerHTML="";
}
}