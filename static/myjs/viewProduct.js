function getdata(find) {
    // alert(find);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            // console.log(output);
            table(output);
        }
    };
    xml.open('GET', 'showProduct?search=' + find, true);
    xml.send();
}


function table(output) {
    var t = '';
    for (var i of output) {
        t += '<tr><td class="text-muted">' + i.srno + '</td><td>' + i.productname + '</td><td>' + i.productprice + ' &#x20B9</td><td>' + i.productstock + '</td><td>' + i.productdiscount + '%</td><td>' + i.productdesc + '</td>';
        t += "<td class='text-center'><img src='static/media/" + i['productimage'] + "' class='image-fluid' width='100' height='100'></td>";
        t += "<td><button onclick='subcategoryupdate(" + JSON.stringify(i) + ")' class='btn btn-success'>Update</button></td>";
        t += '<td><button type="button" onclick="deleteProducts(' + i.pid + ')" class="btn btn-danger">Delete</button></td></tr>';
    }
    document.getElementById('tfilter').innerHTML = t;
}

function supercategory() {
    // var s = $('#supercat').val();
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            var t = '';
            t += '<option value="main">--Choose--</option>';
            for (var i of output) {
                t += '<option value="' + i.catid + '">' + i.catName + '</option>'
            }
            console.log();
            document.getElementById('supsdfercat').innerHTML = t;
            // $('#catgory').slideDown(1000);
        }
    };
    xml.open('GET', 'showCatName', true);
    xml.send();
}

function getCategory(data) {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            console.log(output);
            var t = '';
            t += '<option value="main">--Choose--</option>';
            for (var i of output) {
                t += '<option value="' + i.subid + '">' + i.subname + '</option>'
            }
            document.getElementById('subcattbody').innerHTML = t;
            // $('#subcatgory').slideDown(1000);
        }
    };
    xml.open('GET', 'filterSubCat?cat=' + data, true);
    xml.send();
}

function subcategoryupdate(data) {
    $('#pid').val(data.pid);
    $('#pname').val(data.productname);
    $('#pdesc').val(data.productdesc);
    $('#pprice').val(data.productprice);
    $('#sprice').val(data.productstock);
    $('#pdiscount').val(data.productdiscount);
    $('#img').attr({'src': 'static/media/' + data.productimage});
    $('#exampleModalCenter').modal('show');

}

function deleteProducts(pid) {
    var result = confirm('Are you want to delete?');
    if (result == true) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // alert(this.response);
                window.location.href = 'viewallProduct'
            }
        };
        xml.open('GET', 'deleteProduct?pid=' + pid, true);
        xml.send();
    }
}

function updateProduct() {
    var form = new FormData();
    form.append('pname', $('#pname').val());
    form.append('pid', $('#pid').val());
    form.append('pdesc', $('#pdesc').val());
    form.append('pprice', $('#pprice').val());
    form.append('sprice', $('#sprice').val());
    form.append('pdiscount', $('#pdiscount').val());
    form.append('file', document.getElementById('file').files[0]);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.response);
            $('#exampleModalCenter').modal('hide');
            window.location.href = 'viewallProduct'
        }
    };
    xml.open('POST','updateProduct',true);
    xml.send(form);
}