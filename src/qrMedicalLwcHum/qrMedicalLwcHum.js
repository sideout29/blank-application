import { LightningElement, track } from 'lwc';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TabsetBasic extends LightningElement {
    @track currStep = "6";
    @track iStep = 6;
    @track maxSteps = 6;
    @track isStep1 = false;
    @track isStep2 = false;
    @track isStep3 = false;
    @track isStep4 = false;
    @track isStep5 = false;
    @track isStep6 = true;
    @track step1Label = "Prospect/Eligible-Enrolled Information";
    @track step2Label = "Competitor Information";
    @track step3Label = "Contribution/Network Information";
    @track step4Label = "Requested Network";
    @track step5Label = "Medical Profiles";
    @track step6Label = "Submit";
    @track hasError = false;
    @track isFI = false;
    @track isASO = false;
    @track test = "some value";
    @track progressType = "base";


    @track value;
    @track value2;

    get options() {
        return [
            { label: 'Competitor Rates', value: '1' },
            { label: 'Contract Term End', value: '2' },
            { label: 'Creative Plan Design', value: '3' },
        ];
    }

    get options2() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get options3() {
        return [
            { label: 'Austin', value: 'Austin' },
            { label: 'Choice', value: 'Choice' },
            { label: 'CINNKY', value: 'CINNKY' },
        ];
    }

    get fundingTypeOptions() {
        return [
            { label: 'FI', value: '1' },
            { label: 'ASO', value: '2' },
            { label: 'FI/ASO', value: '3' },
            { label: 'ASO w/Stop Loss', value: '4' },
        ];
    }

    get contributionTypeOptions() {
        return [
            { label: 'Employer Sponsored', value: '1' },
            { label: 'Voluntary', value: '2' },
        ];
    }

    get rateGuaranteeOptions() {
        return [
            { label: 'Yes', value: '1' },
            { label: 'No', value: '2' },
        ];
    }

    get fiCommissionTypeOptions() {
        return [
            { label: '$', value: '1' },
            { label: '%', value: '2' },
        ];
    }

    get asoCommissionTypeOptions() {
        return [
            { label: '$', value: '1' },
            { label: '%', value: '2' },
        ];
    }

    changeStep(oldStep, newStep) {
        console.log('oldStep=' + oldStep + ' newStep=' + newStep);
        if (oldStep === undefined) {
            oldStep = 1;
        }
        if (newStep === undefined) {
            newStep = 1;
        }

        switch (oldStep) {
            case 1: this.isStep1 = false; break;
            case 2: this.isStep2 = false; break;
            case 3: this.isStep3 = false; break;
            case 4: this.isStep4 = false; break;
            case 5: this.isStep5 = false; break;
            case 6: this.isStep6 = false; break;
        }

        switch (newStep) {
            case 1:
                this.isStep1 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();
                break;
            case 2:
                this.isStep2 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();
                break;
            case 3:
                this.isStep3 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();
                break;
            case 4:
                this.isStep4 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();
                break;
            case 5:
                this.isStep5 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();
                break;
            case 6:
                this.isStep6 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();
                break;
            default:
                this.isStep1 = true;
                this.iStep = newStep;
                this.currStep = this.iStep.toString();

        }

    }

    handlePrev() {
        if (this.iStep > 1) {
            this.changeStep(this.iStep, this.iStep - 1);
        }
    }

    handleNext() {
        console.log('in handle next');
        if (this.iStep < this.maxSteps) {
            this.changeStep(this.iStep, this.iStep + 1);

        }
    }

    selectStep1() {
        this.changeStep(this.iStep, 1);
    }
    selectStep2() {
        this.changeStep(this.iStep, 2);
    }
    selectStep3() {
        this.changeStep(this.iStep, 3);
    }
    selectStep4() {
        this.changeStep(this.iStep, 4);
    }
    selectStep5() {
        this.changeStep(this.iStep, 5);
    }
    selectStep6() {
        this.changeStep(this.iStep, 6);
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    handleChange2(event) {
        this.value2 = event.detail.value;
    }

    handleFundingTypeChange(event) {
        this.value = event.detail.value;
        this.test = this.value;
        switch (this.value) {
        case '1':
            this.isFI = true;
            this.isASO = false;
            this.test = this.test + this.isFI;
            break;
        case '2':
            this.isFI = false;
            this.isASO = true;
            break;
        case '3':
            this.isFI = true;
            this.isASO = true;
            break;
        default :
            this.isFI = false;
            this.isASO = false;
        }
}

    @track keyCompValue = '';

    get keyCompOptions() {
        return [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
        ];
    }

    handleSubmit() {
        console.log('in handle submit');
        this.showNotification('Test Title','Test Message','error');
//        alert('The Quote Request has been submitted');

    }

    showNotification(inTitle,inMessage,inVariant) {
        const evt = new ShowToastEvent({
            title: inTitle,
            message: inMessage,
            variant: inVariant,
        });
        this.dispatchEvent(evt);
    }

    handleTriggerError() {
        this.hasError = true;
    }
    handleClearError() {
        this.hasError = false;
    }

    get selectedValues() {
        return this.selectedValues.join(',');
    }

    @track medicalHMOOptionsValue = [''];

    get medicalHMOOptions() {
        return [
            { label: 'Austin', value: 'Austin' },
            { label: 'Choice', value: 'Choice' },
            { label: 'CINNKY', value: 'CINNKY' },
            { label: 'Colorado', value: 'Colorado' },
            { label: 'DAYCINKY', value: 'DAYCINKY' },
            { label: 'Dayton', value: 'Dayton' },
            { label: 'HCPNV', value: 'HCPNV' },
            { label: 'Houston', value: 'Houston' },
            { label: 'HumanaH', value: 'HumanaH' },
            { label: 'IL CCN', value: 'IL CCN' },
            { label: 'Louisville', value: 'Louisville' },
            { label: 'NKY', value: 'NKY' },
            { label: 'Ochsner', value: 'Ochsner' },
            { label: 'Phoenix', value: 'Phoenix' },
            { label: 'Platinum', value: 'Platinum' },
            { label: 'PremierM', value: 'PremierM' },
            { label: 'SelectLV', value: 'SelectLV' },
            { label: 'SelectM', value: 'SelectM' },
            { label: 'Tampa Bay Core', value: 'Tampa Bay Core' },
            { label: 'Tucson', value: 'Tucson' },
            { label: 'Waco', value: 'Waco' },
            { label: 'WIValue', value: 'WIValue' },
        ];
    }

    get selectedmedicalHMOOptionsValue() {
        return this.medicalHMOOptionsValue.join(',');
    }

    handleMedicalHMOChange(e) {
        this.medicalHMOOptionsValue = e.detail.value;
    }
    
    @track medicalPPOOptionsValue = [''];

    get medicalPPOOptions() {
        return [
            { label: 'Choice POS (CHC)', value: 'Choice POS (CHC)' },
            { label: 'Humana Preferred (CHC)', value: 'Humana Preferred (CHC)' },
            { label: 'Choice Care (CHC)', value: 'Choice Care (CHC)' },
            { label: 'Choice Care Plus', value: 'Choice Care Plus' },
            { label: 'Preferred one', value: 'Preferred one' },
            { label: 'Preferred Community Choice', value: 'Preferred Community Choice' },
            { label: 'Humana Preferred', value: 'Humana Preferred' },
        ];
    }

    get selectedmedicalPPOOptionsValue() {
        return this.medicalPPOOptionsValue.join(',');
    }

    handleMedicalPPOChange(e) {
        this.medicalPPOOptionsValue = e.detail.value;
    }
    
    @track medicalPOSOptionsValue = [''];

    get medicalPOSOptions() {
        return [
            { label: 'Humana Preferred POS Open Access', value: '1' },
            { label: 'National POS Open Access', value: '2' },
            { label: 'National POS Open Access Plus', value: '3' },
        ];
    }

    handleMedicalPOSChange(e) {
        this.medicalPOSOptionsValue = e.detail.value;
    }
    
    @track rxOptionsValue = [''];

    get rxOptions() {
        return [
            { label: 'National', value: '1' },
            { label: 'Select', value: '2' },
        ];
    }

    handlerxChange(e) {
        this.rxOptionsValue = e.detail.value;
    }
    
    @track medicalProfileOptionsValue = [''];

    get medicalProfileOptions() {
        return [
            { label: 'ASO-Complete', value: '1' },
            { label: 'ASO-Flex', value: '2' },
            { label: 'Behavioral Health – Humana Achieve (IMBH)', value: '3' },
            { label: 'Behavioral Health - MBH – Managed Behavioral Health', value: '4' },
            { label: 'Chronic Condition Management (ASO Only)', value: '5' },
            { label: 'EAP – 3 Visit', value: '6' },
            { label: 'EAP – 5 Visit', value: '7' },
            { label: 'EAP – 6 Visit', value: '8' },
            { label: 'EAP – 8 Visit', value: '9' },
            { label: 'EAP – Custom', value: '10' },
            { label: 'EAP – Telephonic (no Work-Life)', value: '11' },
            { label: 'EAP – Telephonic and Work-Life', value: '12' },
            { label: 'Enhanced Utilization Management (ASO Only)', value: '13' },
            { label: 'Go365 – Onsite Biometric Screenings Add On – eHealth', value: '14' },
            { label: 'Go365 – Onsite Biometric Screenings Add On – Health & Wellness Professional (HWP)', value: '15' },
            { label: 'Go365 – Onsite Biometric Screenings Add On – Quest', value: '16' },
            { label: 'Go365 – Onsite Biometric Screenings with Flu Shot Add On', value: '17' },
            { label: 'Go365 Buy-Up (ASO & FI Custom)', value: '18' },
            { label: 'Go365 Coaching Buy Up', value: '19' },
            { label: 'Go365 w/Healthy Foods Buy-Up (ASO & FI Custom)', value: '20' },
            { label: 'Go365 Coaching Buy Up – Custom w/ Go365 (ASO Only) (PSQ req’d)', value: '21' },
            { label: 'Humana Beginnings (ASO Only)', value: '22' },
            { label: 'Minimum Premium', value: '23' },
            { label: 'Nurse Advice Line (ASO Only)', value: '24' },
            { label: 'One Year LPA', value: '25' },
            { label: 'Public Sector', value: '26' },
            { label: 'Telemedicine Driven by Doctor n Demand (ASO Only)', value: '27' },
            { label: 'Total Health', value: '28' },
            { label: 'Two Year Portfolio', value: '29' },
            { label: 'Wellness Fund', value: '30' },
        ];
    }

    get selectedmedicalProfileOptionsValue() {
        return this.medicalProfileOptionsValue.join(',');
    }

    handleMedicalProfileChange(e) {
        this.medicalProfileOptionsValue = e.detail.value;
    }

    handleProgressType() {
        if(this.progressType == "base") {
            this.progressType = "path";
        }
        else {
            this.progressType = "base";
        }
    }   
}
