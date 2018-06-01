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

document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  let issueId = chance.guid();
  let issueDesc = document.getElementById('issueDescInput').value;
  let issueSeverity = document.getElementById('issueSeverityInput').value;
  let issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  let issueStatus = 'Open';

  let issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo;
    status: issueStatus
  }

  if (localStorage.getItem('issues') === null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();

  e.preventDefault();
}
