function category() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            var t = '';
            t = '<option value="main" selected>--Select Category--</option>';
            for (var i of output) {
                t += '<option value="' + i.catid + '">' + i.catName + '</option>'
            }
            document.getElementById('supsdfercat').innerHTML = t;
            // $('#catgory').slideDown(1000);
        }
    };
    xml.open('GET', 'showCatName', true);
    xml.send();
}

function filtersubcategory() {
    var s = $('#supsdfercat').val();
    // alert(s);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            console.log(output);
            var t = '';
            for (var i of output) {
                t += '<option value="' + i.subid + '">' + i.subname + '</option>'
            }
            document.getElementById('subcatshow').innerHTML = t;
            // $("#subcatgory").slideDown(1000);
        }
    };
    xml.open('GET', 'filterSubCat?cat=' + s, true);
    xml.send();
}
