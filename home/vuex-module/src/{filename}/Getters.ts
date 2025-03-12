{{{
	variables.projectName = variables.package.template?.name || variables.package.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

}}}import State from './State';

/**
 * Getters are used to calculate values based off state. They are generally
 * used for filtering or formatting data.
 *
 * @class Getters
 * @package ${{ outputDirectoryRelative.split('src/')[1] }}
 * @project ${{ variables.projectName }}
 */
const getters = {
	/**
	 * @param State state
	 * @return string
	 */
	foo(state: typeof State): string {
		return !!state.foo;
	},
};

export default getters;
