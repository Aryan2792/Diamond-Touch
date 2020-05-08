var outputt;

function getdata(find) {
    // alert(find);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            table(output, find);
            if (find == 'main') {
                document.getElementById('subtitle').innerHTML = 'All Sub-Category';
            } else {
                document.getElementById("subtitle").innerHTML = outputt[document.getElementById("supsdfercat").value].catName;
            }
        }
    };
    if (find=='main') {
        xml.open('GET', 'showSubCategory?search='+find, true);
    }else{
        xml.open('GET', 'showSubCategory?search=' + outputt[parseInt(document.getElementById("supsdfercat").value)].catid, true);
    }
    xml.send();
}


function table(output, find) {
    var t = '';
    for (var i of output) {
        t += '<tr><td>' + i.subname + '</td><td>' + i.subdesc + '</td>';
        t += "<td><button onclick='subcategoryupdate(" + JSON.stringify(i) + ")' class='btn btn-success'>Update</button></td>";
        t += '<td class="text-center"><button type="button" onclick="deletesubCat(' + i.subid + ')" class="btn btn-danger">Delete</button></td></tr>';
    }
    // console.log(t);
    document.getElementById('tfilter').innerHTML = t;
}


function subcategoryupdate(data) {
    // alert(data);
    $('#subid').val(data.subid);
    $('#subname').val(data.subname);
    $('#subDescription').val(data.subdesc);
    $('#exampleModalCenter').modal('show');
}


function deletesubCat(subid) {
    // alert(subid);
    var result = confirm('Are you want to delete?');
    if (result == true) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = this.response;
                if (data == 'success') {
                    window.location.href = 'viewcategory';
                } else {
                    alert('This Sub-Category Contain Some Products');
                }
            }
        };
        xml.open('GET', 'deleteSubCategory?delete=' + subid, true);
        xml.send();
    }
}

function updateSubCat() {
    var form = new FormData();
    form.append('subid', $('#subid').val());
    form.append('subname', $('#subname').val());
    form.append('subDescription', $('#subDescription').val());
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Updated " + this.response);
            $('#exampleModalCenter').modal('hide');
            window.location.href = 'viewcategory';
        }
    };
    xml.open('POST', 'subcategoryupdate', true);
    xml.send(form);
}

function category() {
    outputt = "";
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {


            outputt = JSON.parse(this.response);
            var t = '';
            t = '<option value="main" selected>--Select Category--</option>';
            for (var i=0;i<outputt.length;i++) {
                t += '<option value="' + i + '">' + outputt[i].catName + '</option>'
            }
            document.getElementById('supsdfercat').innerHTML = t;
            // $('#catgory').slideDown(1000);
        }
    };
    xml.open('GET', 'showCatName', true);
    xml.send();
}