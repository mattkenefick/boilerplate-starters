{{{
	variables.projectName = variables.package.template?.name || variables.package.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

}}}import State from './State';

/**
 * Mutations are a synchronous way of modifying state. They are generally
 * called through Actions. It's best to think of them as setters.
 *
 * @see https://vuex.vuejs.org/guide/mutations.html
 *
 * @class Mutations
 * @package ${{ outputDirectoryRelative.split('src/')[1] }}
 * @project ${{ variables.projectName }}
 */
const mutations = {
	/**
	 * @param State state
	 * @param any payload
	 * @return void
	 */
	example(state: typeof State, payload: any): void {
		state.foo = 'boo';
	},
};

export default mutations;
