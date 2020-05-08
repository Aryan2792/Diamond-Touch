function cancelledmodal(billid) {
    $('#billid').val(billid);
    $("#myModal").modal('show');
}

function cancelledorder() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.response);
            $("#myModal").modal('hide');
            window.location.href = 'myorder'
        }
    };
    xml.open('GET', 'cancelledorder?billid=' + $('#billid').val() + "&remarks=" + $('#remarks').val(), true);
    xml.send();
}