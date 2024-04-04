const Button = function (label, onClick) {

    this.label = label
    this.onClick = onClick
}

Button.prototype.render = function(){
    const button = document.createElement("button");

    button.innerText = this.label;

    button.addEventListener("click", () => this.onClick());
  
  return button  ;
}