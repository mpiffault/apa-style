var Author = function(firstName, lastName, contributorType) {
  this.firstName = firstName || "";
  this.lastName = lastName || "";
  this.contributorType = contributorType || "";
  console.log('Author instance created');
};

var ApaType = function(contributors, primaryTitle){

  this.contributors = contributors || [new Author()];
  this.primaryTitle = primaryTitle || "";
  this.sourcetype = "book";

  console.log('Apa instance created');
};

ApaType.prototype.addAuthor = function() {
  this.contributors.push(new Author());
};

ApaType.prototype.removeAuthor = function(id) {
  this.contributors.remove(id);
};
