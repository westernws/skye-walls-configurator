import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ModalModel_') === 0),
		backdropOffsetX: 0,
		backdropOffsetY: 0,
		isOpen: false,
		type: types.optional(types.enumeration('Modal Type', ['MODAL', 'MENU']), 'MODAL'),
	})
	.volatile(() => ({
		content: null,
	}))
	.views(self => ({
		get backdropOffset() {
			return {
				left: self.backdropOffsetX,
				top: self.backdropOffsetY,
			};
		},
	}))
	.actions(self => ({
		close() {
			self.isOpen = false;
			self.content = null;
		},
		open({ backdropOffset = {}, content, type = 'MODAL' }) {
			self.backdropOffsetX = backdropOffset.x || 0;
			self.backdropOffsetY = backdropOffset.y || 0;
			self.type = type;
			self.content = content;
			self.isOpen = true;
		},
	}));
