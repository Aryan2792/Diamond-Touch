function showcategory() {
    // alert(category);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = JSON.parse(this.response);
            t = "";
            t += '<a href="shop" class="text-light-black">Category</a>';
            t += '<ul class="sub-menu menu-item-has-children">';
            // console.log(output);
            for (var i of output) {
                t += '<li class="menu-item menu-item-has-children"><a>'+i.catname+'</a>';
                t += '<ul class="sub-menu" style="max-height: 300px;overflow: auto">';
                for (var sb of i.sub) {
                    t += '<li class="menu-item"><a href="shop?subid=' + sb.subid + '">' + sb.subname + '</a></li>';
                }
                t += '</ul></li>';
            }
            t += '</ul>';
            document.getElementById('navcatsub').innerHTML = t;
        }
    };
    xml.open('GET', 'navcategory', true);
    xml.send();
}
