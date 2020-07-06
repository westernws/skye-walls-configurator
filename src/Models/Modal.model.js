import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ModalModel_') === 0),
		isOpen: false,
		type: types.optional(types.enumeration('Modal Type', ['MODAL', 'MENU', 'FROSTY', 'SLIDER']), 'MODAL'),
		title: '',
		closeOnBackdropClick: false,
		showCloseBtnText: false,
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
		get defaults() {
			return {
				closeOnBackdropClick: false,
				content: null,
				showCloseBtnText: false,
				title: '',
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
			content, type = 'MODAL', title = '', showCloseBtnText = false,
		}) {
			self.type = type;
			self.content = content;
			self.title = title;
			self.showCloseBtnText = showCloseBtnText;
			setTimeout(() => self.setIsOpen(true), 150);
		},
		reset() {
			Object.assign(self, self.defaults);
		},
		setIsOpen(isOpen) {
			self.isOpen = isOpen;
		},
	}));
