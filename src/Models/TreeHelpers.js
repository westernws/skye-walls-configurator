import { getParent, types } from 'mobx-state-tree';

export const TreeHelpers = types.model()
	.actions(self => ({
		getParentOfName(name) {
			try {
				let parent = getParent(self);
				while (parent?.$treenode?.type?.name !== name) {
					parent = getParent(parent);
				}
				return parent;
			} catch (error) {
				return null;
			}
		},
	}));
