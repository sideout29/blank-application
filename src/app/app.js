import { LightningElement,track } from 'lwc';

export default class TabsetBasic extends LightningElement {
    @track value2 = ['option1'];

    get options2() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get selectedValues2() {
        return this.value2.join(',');
    }

    handleChange2(e) {
        this.value2 = e.detail.value;
    }
}
