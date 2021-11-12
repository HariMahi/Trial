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
    atr.value = res.image;
    pi.setAttributeNode(atr);
   let pn = document.getElementById('product_name');
   pn.innerHTML = pn.innerHTML + res.name + "<br>";
   let pp = document.getElementById('product_price');
   pp.innerHTML = pp.innerHTML + res.price + "<br>";
   let pd = document.getElementById('product_desc');
   pd.innerHTML = pd.innerHTML + res.desc + "<br>";
   let pr = document.getElementById('product_rating');
   pr.innerHTML = pr.innerHTML + res.rating + "<br>";
}
