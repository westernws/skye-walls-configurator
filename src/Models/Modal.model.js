import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ModalModel_') === 0),
		name: '',
		isOpen: false,
		type: types.optional(types.enumeration('Modal Type', [
			'MODAL', 'MODAL_TIGHT', 'MENU', 'FROSTY', 'SLIDER',
		]), 'MODAL'),
		title: '',
		closeOnBackdropClick: false,
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
		close() {
			self.isOpen = false;
			// Delay to give transition animation time to fade out.
			setTimeout(self.reset, 300);
		},
		open({
			content, name = '', type = 'MODAL', title = '', showCloseBtnText = false, showBackdrop = true,
		}) {
			self.name = name;
			self.type = type;
			self.content = content;
			self.title = title;
			self.showCloseBtnText = showCloseBtnText;
			self.showBackdrop = showBackdrop;
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
