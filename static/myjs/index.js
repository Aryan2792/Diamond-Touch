function quickviewmodal(i) {
    document.getElementById('productname').innerHTML = i.productname;
    $('#productimage').attr({'src': "static/media/" + i.productimage});
    document.getElementById('discountedprice').innerHTML = '&#8377; ' + i.discountedprice + '<span class="text-light-white fw-400 fs-14">' + " &#8377; " + i.productprice + '</span>';
    // document.getElementById('productprice').innerHTML = i.productprice;
    document.getElementById('productdesc').innerHTML = i.productdesc;
    if (i.productstock > 0) {
        document.getElementById('productstock').innerHTML = '<h6 class="text-custom-black fw-600">Avability: <span class="text-success ml-2">In Stock</span></h6>';
    } else {
        document.getElementById('productstock').innerHTML = '<h6 class="text-custom-black fw-600">Avability: <span class="text-danger ml-2">Out of Stock</span></h6>';
    }
    $('#addcart').attr({'href': 'shopdetails?pid=' + i.pid});
    $('#quickview').modal('show');

}

function comparelist(data) {
    // alert(data);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var output = this.response;
            document.getElementById('comparelistbell').innerHTML = output;
            // window.location.href = '/'
            alert('Item added successfully in the compare-list')
        }
    };
    xml.open('GET','compareSession?q='+data,true);
    xml.send()
}