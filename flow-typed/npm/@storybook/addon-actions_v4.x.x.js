// flow-typed signature: 824de8c4d861db90a6471d410d3df917
// flow-typed version: <<STUB>>/@storybook/addon-actions_v4.0.0/flow_v0.90.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   '@storybook/addon-actions'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module '@storybook/addon-actions' {
	declare type Action = (name: string) => (...args: Array<any>) => void;
	declare type DecorateFn = (args: Array<any>) => Array<any>;

	declare module.exports: {
		action: Action,
		decorateAction(args: Array<DecorateFn>): Action;
	};
}