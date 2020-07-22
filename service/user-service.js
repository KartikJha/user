const { wrapServiceResult } = require("../utils/common");

const saveUser = (user) => {
	return wrapServiceResult({}, []);
};

module.exports = {
	saveUser
}

