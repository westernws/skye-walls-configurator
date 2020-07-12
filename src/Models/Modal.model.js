import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('modal-') === 0),
		name: '',
		isOpen: false,
		isClosing: false,
		type: types.optional(types.enumeration('Modal Type', [
			'MODAL', 'MODAL_TIGHT', 'MENU', 'FROSTY', 'SLIDER', 'SLIDER_SECONDARY', 'PANEL',
		]), 'MODAL'),
		title: '',
		closeOnBackdropClick: false,
		showCloseBtn: true,
		showCloseBtnText: false,
		showBackdrop: true,
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
				showBackdrop: true,
				closeOnBackdropClick: false,
				content: null,
				name: '',
				showCloseBtnText: false,
				title: '',
			};
		},
	}))
	.actions(self => ({
		alter(options) {
			Object.assign(self, options);
		},
		close() {
			self.setIsOpen(false);
			self.isClosing = true;
			// Delay to give transition animation time to fade out.
			setTimeout(() => {
				self.reset();
				self.isClosing = false;
			}, 300);
		},
		open(options) {
			self.alter(options);
			setTimeout(() => self.setIsOpen(true), 150);
		},
		reset() {
			Object.assign(self, self.defaults);
		},
		setIsOpen(isOpen) {
			self.isOpen = isOpen;
		},
		setShowCloseBtnText(show) {
			self.showCloseBtnText = show;
		},
		setType(type) {
			self.type = type;
		},
	}));
