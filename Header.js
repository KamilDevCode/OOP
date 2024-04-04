const Header = function(text){
    this.text = text;
}

Header.prototype.render = function(){
  const h1 = document.createElement("h1");
  h1.innerText = this.text;
  return h1
}