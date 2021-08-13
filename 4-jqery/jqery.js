
$(document).ready(function(){
    $('#save').click(function(){
        if($("#name").val() != null && $("#email").val() != ''){
            $("tbody").append(
                "<tr>" +"<td>" +$('#name').val()+ "</td>"
                +"<td >" + $('#email').val()+"</td>"
                +"<td>" +$('#phone').val()+"</td>"
                +"<td>" +$('#web').val()+"</td>"
                + "<td>" + "<button type='button' id='dell'>"+"Remove"+"</button>"
                + "</td>" + "<td >" +
                "<button type='button' id='edit'>"+"edit"+"</button>" + "</td>"+"</tr>");};
        $(form).trigger("reset")
    })
    // end of append information of form to table

    // start od code for edite information data

    $(document).on('click','#dell',function(){
    $(this).parent().parent().remove();
})
    $("#table").on('click','#edit',function(){
    $("form").append("<button type='button' id='update'>"+"update"+"</button>");
    var currentRow=$(this).closest("tr");
    var col1=currentRow.find("td:eq(0)").text();
    var col2=currentRow.find("td:eq(1)").text();
    var col3=currentRow.find("td:eq(2)").text();
    var col4=currentRow.find("td:eq(3)").text();
    $("#name").val(col1);
    $("#email").val(col2);
    $("#phone").val(col3);
    $("#web").val(col4);

// codes of update button

    $("#form").on('click','#update',function(){
    var new_row=  "<tr>" +"<td>" +$('#name').val()+ "</td>"
    +"<td >" + $('#email').val()+"</td>"
    +"<td>" +$('#phone').val()+"</td>"
    +"<td>" +$('#web').val()+"</td>"
    + "<td>" + "<button type='button' id='dell'>"+"Remove"+"</button>"
    + "</td>" + "<td >" +
    "<button type='button' id='edit'>"+"edit"+"</button>" + "</td>"+"</tr>"
        $("#table").find($(currentRow)).replaceWith(new_row);
        $("table tbody").find($(currentRow)).replaceWith(new_row);
        if(currentRow){
    $("table tbody").find($(currentRow)).replaceWith(new_row);
    currentRow = null;
}
    $("#update").remove();

});

});

});
