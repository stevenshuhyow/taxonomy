//define class
var Bee = function() {
  // Call superclass
  Grub.call(this);

  //define class properties
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

//setup psuedo-classical plumbing
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
// class methods
