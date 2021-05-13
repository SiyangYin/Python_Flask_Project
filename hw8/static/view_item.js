

var dataset = []

var start = function(){
    $.ajax({
        type: "POST",
        url: "/init",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(null),
        success: function(result){
//             alert("Init successfully !")
            dataset = result["dataset"]
            display(dataset)
        },
        error: function(request, status, error){
            alert("Fail to init !")        
            console.log("Error")
            console.log(request)
            console.log(status)
            console.log(error)
        }    
    });          
}

var display = function(dataset){
    $("#window").empty()

    $.each(dataset, function(i, data_entry){
//         alert("1")
        var item = $("<div class='col-md-2 item'>");
//         var  = 
        var a = $("<a>")
        var href = "/view_item/" + data_entry["Id"]
        $(a).attr("href", href);
        var img = $("<img>")
//         var src = "../static/images/pic7.jpg"
        var src = data_entry["Poster"]
        $(img).attr("src", src)
        var li = $("<li>")
        $(li).text(data_entry["Rating"])
        var p1 = $("<p>")
        $(p1).text(data_entry["Title"])
        var p2 = $("<p>")
        $(p2).text(data_entry["Genre"])        
        a.append(img)
        a.append(li)
        a.append(p1)
        a.append(p2)
        item.append(a)
//         $("#window").append($("<div class='col-md-1'>"))
        $("#window").append(item)  
        $("#window").append($("<div class='col-md-1'>"))        

//         $("#window").append(<br>)
//         alert("2")
    });  
}

$(document).ready(function(){
//     alert("Successfully !");
    start();
})

    
    