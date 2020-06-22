import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ModalModel_') === 0),
		isOpen: false,
	})
	.volatile(() => ({
		content: null,
	}))
	.actions(self => ({
		close() {
			self.isOpen = false;
			self.content = null;
		},
		open({ content }) {
			self.isOpen = true;
			self.content = content;
		},
	}));
