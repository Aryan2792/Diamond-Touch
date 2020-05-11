function getdata(find) {
    // alert(find);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            output = JSON.parse(this.response);
            // $('button.nav-item').addClass('active');
            table(output, find);
            document.getElementById("title").innerHTML = find;
        }
    };
    xml.open('GET', 'orderdetails?search=' + find, true);
    xml.send();
}

function table(output, find) {
    if (find == 'pending') {
        var t = "";
        for (var i of output) {
            t += '<tr><td>' + i.srno + '</td><td>' + i.orderno + '</td><td>' + i.datatime + '</td><td>' + i.grandtotal + '</td><td>' + i.paymentmethod + '</td><td><div>' + i.useremail + '</div><div>' + i.userdetails[0] + '</div><div>' + i.userdetails[1] + '</div></td>';
            t += "<td><a class='btn btn-outline-secondary' onclick='showdetailmodal(" + JSON.stringify(i.orderno) + ")'>View Details</a></td>";
            t += "<td><button class='btn btn-outline-primary' onclick='showmodal(" + JSON.stringify(i.orderno) + "," + JSON.stringify(find) + ")'>Ship Order</button></td></tr>";
        }
        document.getElementById('tfilter').innerHTML = t;
    } else if (find == 'ship') {
        var t = "";
        for (var i of output) {
            t += '<tr><td>' + i.srno + '</td><td>' + i.orderno + '</td><td>' + i.datatime + '</td><td>' + i.grandtotal + '</td><td>' + i.paymentmethod + '</td><td><div>' + i.useremail + '</div><div>' + i.userdetails[0] + '</div><div>' + i.userdetails[1] + '</div></td>';
            t += "<td><a class='btn btn-outline-secondary' onclick='showdetailmodal(" + JSON.stringify(i.orderno) + ")'>View Details</a></td>";
            t += "<td><button class='btn btn-outline-primary' onclick='showmodal(" + JSON.stringify(i.orderno) + "," + JSON.stringify(find) + ")'>Dispatch Order</button></td></tr>";
        }
        document.getElementById('tfilter').innerHTML = t;
    } else if (find == 'Dispatched') {
        var t = "";
        for (var i of output) {
            t += '<tr><td>' + i.srno + '</td><td>' + i.orderno + '</td><td>' + i.datatime + '</td><td>' + i.grandtotal + '</td><td>' + i.paymentmethod + '</td><td><div>' + i.useremail + '</div><div>' + i.userdetails[0] + '</div><div>' + i.userdetails[1] + '</div></td>';
            t += "<td><a class='btn btn-outline-secondary' onclick='showdetailmodal(" + JSON.stringify(i.orderno) + "," + JSON.stringify(find) + ")'>View Details</a></td>";
            t += "<td><button class='btn btn-outline-muted' style='cursor: not-allowed'>Order Delivered</button></td></tr>";
        }
        document.getElementById('tfilter').innerHTML = t;
    } else if (find == 'cancelled') {
        var t = "";
        for (var i of output) {
            t += '<tr><td>' + i.srno + '</td><td>' + i.orderno + '</td><td>' + i.datatime + '</td><td>' + i.grandtotal + '</td><td>' + i.paymentmethod + '</td><td><div>' + i.useremail + '</div><div>' + i.userdetails[0] + '</div><div>' + i.userdetails[1] + '</div></td>';
            t += "<td><a class='btn btn-outline-secondary' onclick='showdetailmodal(" + JSON.stringify(i.orderno) + ")'>View Details</a></td>";
            t += "<td><button class='btn btn-outline-muted' style='cursor: not-allowed'>Cancelled Order</button></td></tr>";
        }
        document.getElementById('tfilter').innerHTML = t;
    } else {
        var t = "";
        for (var i of output) {
            t += '<tr><td>' + i.srno + '</td><td>' + i.orderno + '</td><td>' + i.datatime + '</td><td>' + i.grandtotal + '</td><td>' + i.paymentmethod + '</td><td><div>' + i.useremail + '</div><div>' + i.userdetails[0] + '</div><div>' + i.userdetails[1] + '</div></td>';
            t += "<td><a class='btn btn-outline-secondary' onclick='showdetailmodal(" + JSON.stringify(i.orderno) + ")'>View Details</a></td>";
            if (i.status=='pending'){
                t += "<td><button class='btn btn-outline-primary' onclick='showmodal(" + JSON.stringify(i.orderno) + "," + JSON.stringify(find) + ")'>Ship Order</button></td></tr>";
            }else if (i.status=='Ship' || i.status=='Shipped'){
                t += "<td><button class='btn btn-outline-primary' onclick='showmodal(" + JSON.stringify(i.orderno) + "," + JSON.stringify(find) + ")'>Dispatch Order</button></td></tr>";
            }else if (i.status=='cancelled'){
                t += "<td><button class='btn btn-outline-muted' style='cursor: not-allowed'>Cancelled Order</button></td></tr>";
            }
            else {
                t += "<td><button class='btn btn-outline-muted' style='cursor: not-allowed'>Order Delivered</button></td></tr>";
            }
        }
        document.getElementById('tfilter').innerHTML = t;
    }
}

function showmodal(orderno, find) {
    if (find == 'pending') {

        $('#orderno').val(orderno);
        $("#shipModal").modal('show');
    }else{
        $('#urorderno').val(orderno);

        $("#dispatchedModal").modal('show');
    }
}

function showdetailmodal(billid) {
    // alert(billid);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            console.log(output);
            // $("#shipModal").modal('hide');
            // window.location.href = 'alladmin';
            var t = '';
            for (var i of output) {
                t += '<tr><td>' + i.product[0] + '</td><td>' + i.quantity + '</td><td>' + i.price + '</td>';
                t += "<td class='text-center'><img src='static/media/" + i.product[1] + "' class='image-fluid' width='100' height='100'></td>";
                // t += '<td><a class="btn btn-outline-secondary" href="billdetails?billid=' + i.orderno + '">View Details</a></td>';
                // t += "<td><button class='btn btn-outline-primary' onclick='showmodal(" + JSON.stringify(i.useremail) + "," + JSON.stringify(find) + "," + JSON.stringify(i.phone) + ")'>Ship Order</button></td></tr>";
            }
            document.getElementById('tdetail').innerHTML = t;
            $('#showdetailsModal').modal('show');
        }
    };
    xml.open('GET', 'billdetails?billid=' + billid, true);
    xml.send();
}

function shippingconfirm() {
    var formdata = new FormData();
    var controls = document.getElementById('shippingid').elements;
    for (var i of controls) {
        formdata.append(i.name, i.value);
    }
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = this.response;
            if (output == 'success'){
                $("#shipModal").modal('hide');
                getdata('pending');
            }
            else {
                alert('Error Occured');
            }
        }
    };
    xml.open('POST', 'shipping', true);
    xml.send(formdata);
}


function dispatchedconfirm() {

    var formdata = new FormData();
    var controls = document.getElementById('dispatchedid').elements;
    for (var i of controls) {
        formdata.append(i.name, i.value);
    }
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.response);
            var output = this.response;
            if (output == 'success'){
                $("#dispatchedModal").modal('hide');
                getdata('ship');
            }
            else {
                alert('Error Occured');
            }

        }
    };
    xml.open('POST', 'dispatched', true);
    xml.send(formdata);
}

function searchdata() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            console.log(output);
            table(output, $('#status').val());
            document.getElementById("title").innerHTML = $('#status').val();
        }
    };
    xml.open('GET', 'searchdata?datafrom=' + $("#datefrom").val() + "&dateto=" + $('#dateto').val() + "&status=" + $('#status').val(), true);
    xml.send();
}