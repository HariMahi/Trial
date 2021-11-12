function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
        if (request.readyState === 4 && request.status == 200)
        return request.responseText;
}
function load() {
   let res = readJSON('prod.json');
    res = JSON.parse(res);
   let pi = document.getElementById('product_image');
   let atr = document.createAttribute("src");
    atr.value = res[0].image;
    pi.setAttributeNode(atr);
   let pn = document.getElementById('product_name');
   pn.innerHTML = pn.innerHTML + res[0].name + "<br>";
   let pp = document.getElementById('product_price');
   pp.innerHTML = pp.innerHTML + res[0].price + "<br>";
   let pd = document.getElementById('product_desc');
   pd.innerHTML = pd.innerHTML + res[0].desc + "<br>";
   let pr = document.getElementById('product_rating');
   pr.innerHTML = pr.innerHTML + res[0].rating + "<br>";
       
   let pi1 = document.getElementById('product_image');
   let atr1 = document.createAttribute("src");
    atr1.value = res[1].image;
    pi1.setAttributeNode(atr);
   let pn1 = document.getElementById('product_name1');
   pn1.innerHTML = pn1.innerHTML + res[1].name + "<br>";
   let pp1 = document.getElementById('product_price1');
   pp1.innerHTML = pp1.innerHTML + res[1].price + "<br>";
   let pd1 = document.getElementById('product_desc1');
   pd1.innerHTML = pd1.innerHTML + res[1].desc + "<br>";
   let pr1 = document.getElementById('product_rating1');
   pr1.innerHTML = pr1.innerHTML + res[1].rating + "<br>";
   
}
