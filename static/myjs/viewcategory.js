function categoryupdate(data) {
    // $('#up_supercat').val(data.superCat);
    $('#up_catname').val(data.catName);
    $('#catDescp').val(data.catDescp);
    $("#catid").val(data.catid);
    $('#myUpdateCategoryModel').modal('show');
}


function deleteCat(catid) {
    // alert(catid);
    var result = confirm('Are you want to delete?');
    if (result == true) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = this.response;
                if (data == 'success') {
                    window.location.href = 'showCategory';
                } else {
                    alert('This Category Contain Some Products');
                }
            }
        };
        xml.open('GET', 'categorydelete?delete=' + catid, true);
        xml.send();
    }
}


function updateCat() {
    var form = new FormData();
    // form.append('up_supercat', $('#up_supercat').val());
    form.append('up_catname', $('#up_catname').val());
    form.append('catDescp', $('#catDescp').val());
    form.append('catid', $('#catid').val());
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Updated " + this.response);
            $('#myUpdateCategoryModel').modal('hide');
            window.location.href = 'showCategory'
        }
    };
    xml.open('POST', 'updateCategorySave', true);
    xml.send(form);
}