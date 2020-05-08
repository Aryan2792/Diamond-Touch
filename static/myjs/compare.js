function comparedelete(data) {
    // alert(data);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = this.response;
            // alert(output);
            document.getElementById('comparelistbell').innerHTML = output;
            window.location.href = 'compare'
        }
    };
    xml.open('GET', 'compareSessiondelete?q=' + data, true);
    xml.send()
}