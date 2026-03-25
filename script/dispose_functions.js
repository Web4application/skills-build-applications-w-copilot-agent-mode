var listener = function(event) {
  console.log('It happened', event);
};

// start listening
var subscription = fsWatcher.onDidDelete(listener);

// do more stuff

subscription.dispose(); // stop listening
