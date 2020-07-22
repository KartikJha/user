var common = require("./common");

const sendResponse = (res, status, message, headers, errors, data) => {
	res.status(status || 200).send({
		status,
		message: common.wrapInArray(message),
		headers: headers ? headers : {},
		data,
		errors: common.wrapInArray(errors),
	});
}
module.exports = {
	sendResponse
}
