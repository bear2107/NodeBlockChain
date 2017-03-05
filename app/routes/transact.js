var express = require('express');
var app = express();
// Body parser for parsing the request body
var bodyParser = require('body-parser')

app.use(bodyParser.json());

exports.trans=function trans(req,res)
{

	var qr = req.body.read;

	// Construct the invoke request
	var invokeRequest = {
		// Name (hash) required for invoke
		chaincodeID: chaincodeID,
		// Function to trigger
		fcn: "invoke",
		// Parameters for the invoke function
		args: ["account", qr]
	};

	// Trigger the invoke transaction
	var invokeTx = app_user.invoke(invokeRequest);

	// Invoke transaction submitted successfully
	invokeTx.on('submitted', function (results) {
		console.log(util.format("Successfully submitted chaincode invoke " +
		"transaction: request=%j, response=%j", invokeRequest, results));

		res.status(200).json({ status: "submitted" });
	});
	// Invoke transaction submission failed
	invokeTx.on('error', function (err) {
		var errorMsg = util.format("ERROR: Failed to submit chaincode invoke " +
		"transaction: request=%j, error=%j", invokeRequest, err);

		console.log(errorMsg);

		res.status(500).json({ error: errorMsg });
	});


}