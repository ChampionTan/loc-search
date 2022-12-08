

var format = 'https://www.loc.gov/' + format + '/?q=' + q + '&fo=json';

var searchResults = function (q) {
	var search = 'https://www.loc.gov/search/?q=' + q + '&fo=json';
  
	fetch(apiUrl).then(function (response) {
	  if (response.ok) {
		response.json().then(function (data) {
		  displayIssues(data);
  
		  if (response.headers.get('Link')) {
			displayWarning(repo);
		  }
		});
	  } else {
		document.location.replace('./index.html');
	  }
	});
  };