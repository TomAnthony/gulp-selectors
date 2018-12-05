module.exports = generateShortname;

	/**
 * Helper function for generating shortnames based on an alphabetic library.
 *
 * @param seed Integer
 * @returns {string Shortname}
 */
function generateShortname(originalname, mapping) {

	css_entity = originalname;

	for (var key in mapping) {
	    css_entity = css_entity.replace(key, mapping[key]);
	}

	return css_entity;
}