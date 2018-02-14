// Install LowDash (https://github.com/oshliaer/lodashgs)
// - Select "Resources" > "Libraries..." in the Google Apps Script editor.
// - Enter the project key (1SQ0PlSMwndIuOAgtVJdjxsuXueECtY9OGejVDS37ckSVbMll73EXf2PW) in the "Find a Library" field,

var _ = LodashGS.load();

function phantombuster_fetch(agent, key) {
  // Make a POST request with a JSON payload.
 var data = {
   "output": "first-result-object",
   "argument": {}
 };
 var options = {
   'method' : 'post',
   'contentType': 'application/json',
   'headers': { 'X-Phantombuster-Key-1': key},
   // Convert the JavaScript object to a JSON string.
   'payload' : JSON.stringify(data)
 };
  return UrlFetchApp.fetch('https://phantombuster.com/api/v1/agent/' + agent + '/launch', options).getContentText();
}

function parse_json(text, path) {
  return _.get(JSON.parse(text), path) 
}

