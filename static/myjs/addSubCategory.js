function category() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            var t = '';
            t = '<option value="#" selected>--Select Category--</option>';
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