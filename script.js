function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
        if (request.readyState === 4 && request.status == 200)
        return request.responseText;
}
function load() {
   var res = readJSON('prod.json');
   var pi = document.getElementById('product_image');
   pi.innerHTML = pi.innerHTML + res[0].image + "<br>";
   var pn = document.getElementById('product_name');
   pn.innerHTML = pn.innerHTML + res[0].name + "<br>";
   var pp = document.getElementById('product_price');
   pp.innerHTML = pp.innerHTML + res[0].price + "<br>";
   var pd = document.getElementById('product_desc');
   pd.innerHTML = pd.innerHTML + res[0].desc + "<br>";
   var pr = document.getElementById('product_rating');
   pr.innerHTML = pr.innerHTML + res[0].rating + "<br>";
}
