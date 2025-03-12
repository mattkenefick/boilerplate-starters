{{{
	variables.projectName = variables.package.template?.name || variables.package.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

}}}/**
 * @type interface
 */
export interface IStoreState {
	foo: string;
}

/**
 * @class State
 * @package ${{ outputDirectoryRelative.split('src/')[1] }}
 * @project ${{ variables.projectName }}
 */
const state: IStoreState = {
	foo: 'bar',
};

export default state;
