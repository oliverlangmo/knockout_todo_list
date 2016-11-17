console.log('hello world!');

$(document).ready(function(){
function todoTask (task, rawDate) {
 var self = this;
 self.task = task;
 self.rawDate = rawDate;
 self.completion = false;
 self.date = ko.computed(function(){
   var day = rawDate.getDate();
   var month = rawDate.getMonth()+1;
   var year = rawDate.getFullYear();
   var dateFull = month + '/' + day + '/' + year;
   return dateFull;
});
self.completeTask = function(){
		if(self.completion() === false){
			self.completion(true);
		//set symbol to show completed. I used the empty symbol
		self.completeContent("&empty;");
	}
	else{
		self.completion(false);
		self.completeContent("&nbsp;");
	}
};
}

function taskViewModel(){
self.tasks = ko.observableArray([]);
 self.newTask = ko.observable('');
 self.addTask = function(){
   self.tasks.push(new todoTask(self.newTask, new Date()));
   self.newTask = ('');
 };
self.removeTask = function() {
  self.tasks.remove(this);

};

}


ko.applyBindings(new taskViewModel());
});
