function add(productid, type, stock) {
    var quantity = parseInt(document.getElementById('quantity-' + productid).value);
    var flag = 1;
    if (type == 'plus') {
        if (quantity <= stock) {
            quantity = 1;
             document.getElementById('minisicon-'+productid).className = 'btn btn-outline-primary js-btn-minus';
            document.getElementById('plusicon-'+productid).className = 'btn btn-outline-primary js-btn-plus';
        } else {
            flag = 0;
            document.getElementById('plusicon-'+productid).className = 'btn btn-outline-danger js-btn-plus';
            document.getElementById('minisicon-'+productid).className = 'btn btn-outline-primary js-btn-minus'
        }
    } else if (type == 'minus') {
        if (quantity > 1) {
            quantity = -1;
            document.getElementById('plusicon-'+productid).className = 'btn btn-outline-primary js-btn-plus';
            document.getElementById('minisicon-'+productid).className = 'btn btn-outline-primary js-btn-minus'
        } else {
            flag = 0;
            document.getElementById('minisicon-'+productid).className = 'btn btn-outline-danger js-btn-minus'
        }
    }
    if (flag != 0) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
                var output = JSON.parse(this.response);
                console.log(output);
                for (var i of output) {
                    document.getElementById('quantity-' + productid).value = i.qty;
                    document.getElementById('netprice-' + productid).innerHTML = i.nettotal;
                    document.getElementById('grandtotal').innerHTML = i.grandtotal;
                }
            }
        };
        xml.open('GET', 'cartDetail?q=' + productid + '&qty=' + quantity, true);
        xml.send();
    }
}