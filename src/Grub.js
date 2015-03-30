var Grub = function() {
//everything here is for all instances
  this.age = 0;
  this.color = "pink";
  this.food = "jelly";
};
//everything here is registered at the class level
//and shared between all instances
Grub.prototype = Object.create(Grub.prototype);
Grub.prototype.constructor = Grub;
//class methods
Grub.prototype.eat = function(){

}
