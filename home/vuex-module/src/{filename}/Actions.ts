{{{
	variables.projectName = variables.package.template?.name || variables.package.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

}}}import { ActionContext } from 'vuex';
import { IStoreState } from './State';

/**
 * @type ActionContext<S, R>
 */
type Context = ActionContext<IStoreState, IStoreState>;

/**
 * Actions are generally meant to be the entrypoint for modifying state.
 *
 * They are asynchronous calls that can perform other tasks and then
 * trigger a mutation (synchronous).
 *
 * @see https://vuex.vuejs.org/guide/actions.html
 *
 * @class Actions
 * @package ${{ outputDirectoryRelative.split('src/')[1] }}
 * @project ${{ variables.projectName }}
 */
const actions = {
	/**
	 * @param Context context
	 * @param any payload
	 * @return void
	 */
	example(context: Context, payload: any): void {
		context.commit('example', payload);
	},
};

export default actions;
