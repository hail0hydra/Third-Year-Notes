
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (inbBranchDetails == null) var inbBranchDetails = {};
inbBranchDetails._path = '/retail/dwr';
inbBranchDetails.getAllLocation = function(p0, callback) {
  dwr.engine._execute(inbBranchDetails._path, 'inbBranchDetails', 'getAllLocation', p0, callback);
}
inbBranchDetails.getAllBranch = function(p0, callback) {
  dwr.engine._execute(inbBranchDetails._path, 'inbBranchDetails', 'getAllBranch', p0, callback);
}
inbBranchDetails.getBranchWithCode = function(p0, p1, callback) {
  dwr.engine._execute(inbBranchDetails._path, 'inbBranchDetails', 'getBranchWithCode', p0, p1, callback);
}
inbBranchDetails.setBranchMasterDAOImpl = function(p0, callback) {
  dwr.engine._execute(inbBranchDetails._path, 'inbBranchDetails', 'setBranchMasterDAOImpl', p0, callback);
}
