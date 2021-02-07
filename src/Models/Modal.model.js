import { types } from 'mobx-state-tree';

export const ModalModel = types
	.model('Modal', {
		id: types.refinement(types.identifier, identifier => identifier.indexOf('modal-') === 0),
		name: '',
		isOpen: false,
		isClosing: false,
		type: types.optional(types.enumeration('Modal Type', [
			// Your standard modal
			'MODAL',
			// Same as standard but less padding
			'MODAL_TIGHT',
			// Mobile top menu
			'MENU',
			// A light backdrop with a different frame treatment
			'FROSTY',
			// Slides in from the right, takes up most of the page width
			'SLIDER',
			// This is meant to be used as another slider layer on top of an existing slider
			'SLIDER_SECONDARY',
			// This is like the normal slider only a lot less wide
			'SLIDER_TERTIARY',
			// Panel that slides up from the bottom, covering the whole screen except the header
			'PANEL',
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
				showCloseBtn: true,
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
