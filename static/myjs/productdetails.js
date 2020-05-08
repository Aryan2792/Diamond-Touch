function sessionProduct(data) {
    // alert(data);
    // alert(document.getElementById('qty').value);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.response);
            alert("Items Added To Card Successfully");
            document.getElementById('cardsession').innerHTML = this.response;
            // window.location.href = 'shopdetails?pid='+data;
        }
    };
    xmlhttp.open('GET', 'sessionProduct?q=' + data + '&qty=' + $('#qty').val(), true);
    xmlhttp.send()
}

function updateqty(stock, type) {
    var qty = parseInt(document.getElementById('qty').value);
    if (qty < stock && type == 'add') {
        document.getElementById('qty').value = qty + 1;
    } else if (type == 'minus' && qty > 1) {
        document.getElementById('qty').value = qty - 1;
    } else if (type == 'add' && qty == stock) {
        document.getElementById('qty').value = stock;
        alert('Product quantity reach the stock limit')
    }else if (type == 'minus' && qty == 1){
        document.getElementById('qty').value = 1;
    }
}


function comparelist(data) {
    // alert(data);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = this.response;
            document.getElementById('comparelistbell').innerHTML = output;
            // window.location.href = '/'
            alert('Item added successfully in the compare-list');
            document.getElementById('comparelist').disabled = 'true';
        }
    };
    xml.open('GET','compareSession?q='+data,true);
    xml.send()
}