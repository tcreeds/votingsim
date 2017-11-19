class Pref {

    constructor(name, type, value, required=true){
        this.name = name;
        this.valueType = type;
        this.required = required;
        this.setValue(value);
    }

    setValue(value){
        if (this.valueType === 'number'){
            if (typeof(value) == 'number')
                this.value = value
            else
                this.error(value)
        }
        else if (this.valueType === 'boolean'){
            if (typeof(value) == 'boolean')
                this.value = value
            else
                this.error(value)
        }
        else if (this.valueType === 'string'){
            if (typeof(value) == 'string')
                this.value = value
            else
                this.error(value)
        }
    }

    error(value){
        throw new Error('Passed value ' + value + ' to ' + this.name + ', expected type ' + this.valueType + ', got type ' + typeof(value));
    }

    static clone(pref){
        return new Pref(pref.name, pref.valueType, pref.value, pref.required);
    }
}

module.exports = Pref
