import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["collectionContainer"]

    static values = {
        index: Number,
        prototype: String,
    }

    connect() {
        this.controllerName = this.context.scope.identifier;
    }

    delete(event) {
        console.log('DELETE CLICK');
        let entry = event.target.closest(`.invoice_line`);

        entry.remove();
    }
}