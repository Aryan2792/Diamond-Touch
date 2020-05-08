function topproducts() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200){
            var output = JSON.parse(this.response)
            // console.log(output);
            var t = "";
            for (var i of output){
                t += '<article class="side-post pb-xl-20 mb-xl-20 u-line">';
                t += '<div class="thumb-img">';
                t += `<a href="shopdetails?pid=${i.pid}">`;
                t += `<img src="static/media/${i.productimage}" alt="thumb-img">`;
                t += '</a></div>';
                t += '<div class="content-wrap"><div class="entry-meta-content"><h6 class="entry-title">';
                t += `<a href="shopdetails?pid=${i.pid}" class="text-light-black">${i.productname}</a>`;
                t += '</h6>';
                t += `<div class="entry-tye"> <span class="text-light-green fw-600">&#8377; ${i.productprice}</span>`;
                t += '</div></div></div></article>';
            }
            document.getElementById('topproductarticle').innerHTML = t;
        }
    };
    xml.open('GET','topproduct',true);
    xml.send();
}


function category() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200){
            var output = JSON.parse(this.response)
            // console.log(output);
            var t = "";
            for (var i of output){
                t += `<li class="pb-xl-20 u-line mb-xl-20"> <a href="shop?search=${i.catname}" class="text-light-black fw-600">${i.catname} <span class="text-light-white fw-400">(${i.stock})</span></a></li>`
            }
            document.getElementById('categorylist').innerHTML = t;
        }
    };
    xml.open('GET','categorylist',true);
    xml.send();
}

function quickviewmodal(i) {
    document.getElementById('productname').innerHTML = i.productname;
    $('#productimage').attr({'src':"static/media/"+i.productimage});
    document.getElementById('discountedprice').innerHTML = i.discountedprice +'<span class="text-light-white fw-400 fs-14">'+i.productprice+'</span>';
    // document.getElementById('productprice').innerHTML = i.productprice;
    document.getElementById('productdesc').innerHTML = i.productdesc;
    if (i.productstock>0) {
        document.getElementById('productstock').innerHTML = '<h6 class="text-custom-black fw-600">Avability: <span class="text-success ml-2">In Stock</span></h6>';
        document.getElementById('btncartmodel').innerHTML = `<a href="shopdetails?pid=${i.pid}" class="btn-solid with-line ml-2">Add to Cart <i class="pe-7s-cart"></i></a>`;
    }else{
        document.getElementById('productstock').innerHTML = '<h6 class="text-custom-black fw-600">Avability: <span class="text-danger ml-2">Out of Stock</span></h6>';
        document.getElementById('btncartmodel').innerHTML = `<a class="btn-solid bg-danger text-white with-line ml-2">Out Of Stock ! <i class="pe-7s-cart"></i></a>`;
    }
    $('#quickview').modal('show');
}


function sessionProduct(data) {
    // alert(data);
    // alert(document.getElementById('modelqty').value);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.response);
            alert("Items Added To Card Successfully");
            document.getElementById('cardsession').innerHTML = this.response;
            $('#quickview').modal('hide');
            window.location.href = 'shopdetails?pid='+data;
        }
    };
    xmlhttp.open('GET', 'sessionProduct?q=' + data + '&qty=' + $('#modelqty').val(), true);
    xmlhttp.send()
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