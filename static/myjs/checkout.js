function payment() {
    if ($('#mycheckout').valid()) {
        var paymentmethod = $("input[name=paymentmethod]:checked").val();
        // alert(paymentmethod);
        if (paymentmethod == "online") {
            // e.preventDefault();
            var amount = document.getElementById('grandtotal').value * 100;
            var options = {
                "key": "rzp_test_dRWiKHS7zr2Gki",
                "amount": amount,
                "name": "",
                "description": "",
                "image": "",
                "handler": function (response) {
                    //alert(response.razorpay_payment_id);
                    if (response.razorpay_payment_id == "") {
                        // alert('Failed');
                        window.location.href = "failedPayment";
                    } else {
                        var controls = document.getElementById("mycheckout").elements;
                        var formdata = new FormData();
                        for (var i = 0; i < controls.length; i++) {
                            if (controls[i].type == "file") {
                                formdata.append(controls[i].name, controls[i].files[0]);
                            } else {
                                formdata.append(controls[i].name, controls[i].value);
                            }
                        }
                        var httpreg = new XMLHttpRequest();
                        httpreg.onreadystatechange = function () {
                            if (this.status == 200 && this.readyState == 4) {
                                var output = this.response;
                                console.log(output);
                                window.location.href = "thanks?orderid=" + output;
                            }

                        };
                        httpreg.open("POST", "paymentBill", true);
                        httpreg.send(formdata);
                    }
                },
                "prefill": {
                    "name": "",
                    "email": $('#disemail').val(),
                    "contact": $('#disphone').val()
                },
                "notes": {
                    "address": ""
                },
                "theme": {
                    "color": "#F37254"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
        } else {
            var controls = document.getElementById("mycheckout").elements;
            var formdata = new FormData();
            for (var i = 0; i < controls.length; i++) {
                if (controls[i].type == "file") {
                    formdata.append(controls[i].name, controls[i].files[0]);
                } else if (controls[i].type == "radio") {
                    formdata.append(controls[i].name, $("input[name=" + controls[i].name + "]:checked").val());
                } else {
                    formdata.append(controls[i].name, controls[i].value);
                }
            }
            var httpreg = new XMLHttpRequest();
            httpreg.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    var output = this.response;
                    alert(output);
                    window.location.href = "thanks?orderid=" + output;
                }

            };
            httpreg.open("POST", "paymentBill", true);
            httpreg.send(formdata);
        }
    }
}