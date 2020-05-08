function sendme() {
        var form = new FormData();
        var controls = document.getElementById('contactform').elements;
        for (var i of controls) {
            form.append(i.name, i.value);
        }
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState==4 && this.status==200){
                alert(this.response);
            }
        };
        xml.open('POST','contact',true);
        xml.send(form);
}