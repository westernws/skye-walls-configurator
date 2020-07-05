import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ModalModel_') === 0),
		backdropOffsetX: 0,
		backdropOffsetY: 0,
		isOpen: false,
		type: types.optional(types.enumeration('Modal Type', ['MODAL', 'MENU', 'FROSTY']), 'MODAL'),
		title: '',
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
			// Delay to give transition animation time to fade out.
			setTimeout(self.reset, 300);
		},
		open({
			backdropOffset = {}, content, type = 'MODAL', title = '',
		}) {
			self.backdropOffsetX = backdropOffset.x || 0;
			self.backdropOffsetY = backdropOffset.y || 0;
			self.type = type;
			self.content = content;
			self.title = title;
			self.isOpen = true;
		},
		reset() {
			self.title = '';
			self.content = null;
		},
	}));
