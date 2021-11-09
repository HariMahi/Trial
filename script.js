function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
        if (request.readyState === 4 && request.status == 200)
        return request.responseText;
}
function load() {
   var res = readJSON('prod.json');
        for(let product of res){
   var pi = document.getElementById('product_image');
   pi.innerHTML = pi.innerHTML + ${product.image} + "<br>";
   var pn = document.getElementById('product_name');
   pn.innerHTML = pn.innerHTML + ${product.name} + "<br>";
   var pp = document.getElementById('product_price');
   pp.innerHTML = pp.innerHTML + ${product.price} + "<br>";
   var pd = document.getElementById('product_desc');
   pd.innerHTML = pd.innerHTML + ${product.desc} + "<br>";
   var pr = document.getElementById('product_rating');
   pr.innerHTML = pr.innerHTML + ${product.rating} + "<br>";
}
