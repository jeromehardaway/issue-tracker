function fetchIssues () {
  let issues = JSON.parse(localStorage.getItem('issues'));
  let issuesList = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    let id = issues[i].id;
    let desc = issues[i].description;
    let severity = issues[i].assignedTo;
    let status = issues[i].status;

      issuesList.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' ' +
      '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')">Close</a> ' +
      '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' + id + '\')">Delete</a>' +
      '</div>';
  }
}
