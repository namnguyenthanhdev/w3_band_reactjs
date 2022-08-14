import methods from 'validator';

class Validator {
    constructor(rules) {
        this.rules = rules;
        this.initiate();
    }
    initiate() {
        this.isValid = true;
        this.errors = {};
    }

    validate(state) {
        this.initiate();
        this.rules.forEach((rule) => {
            if (this.errors[rule.field]) return;
            const fieldValue = state[rule.field] || '';
            const args = rule.args || [];
            const validationMethod = typeof rule.method === 'string' ? methods[rule.method] : rule.method;

            if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
                this.errors[rule.field] = rule.message;
                this.isValid = false;
            }
        });
        return this.errors;
    }

}


const requiredWith = (value, field, state) => state[field] && value;
const rules = [
    {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'The name field is required.',
    },
    {
        field: 'name',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'The name must be at least 5 characters.',
    },
    {
        field: 'message',
        method: requiredWith,
        args: ['subject'],
        validWhen: true,
        message: 'The message field is required when subject is present.',
    },
];
export default Validator;

