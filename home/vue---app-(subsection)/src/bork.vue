{{{
	variables.superClass = outputDirectoryRelative.split('/App/')[1].split('/')[0]
	variables.className = outputPathRelative.split('.').slice(0, -1).join('.').split('/').join('-').split('App-')[1].toLowerCase()
	variables.projectName = variables.package.template?.name || variables.package.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

}}}<template>
	<section class="${{ variables.className }}"></section>
</template>

<script lang="ts">
	import ${{ variables.superClass }}Base from '@/Core/${{ variables.superClass }}.vue';
	import { Component, Prop } from 'vue-property-decorator';
	import { beforeDestroy, mounted } from '@/Utility/Decorators';

	/**
	 * @author ${package.author}
	 * @package ${{ outputDirectoryRelative.split('/App/')[1] }}
	 * @project ${{ variables.projectName }}
	 */
	@Component
	export default class ${{
		outputPathRelative
			.split('.')
			.slice(0, -1)
			.join('.')
			.split('/')
			.map(str => str.charAt(0).toUpperCase() + str.slice(1))
			.join('/')
			.replace(/(.*)\/App\/?/, '')
			.replace(/\//g, '')
	}} extends ${{ variables.superClass }}Base {
		// Not implemented
	}
</script>

<style lang="scss">
	.${{ variables.className }} {
		// Not implemented
	}
</style>
