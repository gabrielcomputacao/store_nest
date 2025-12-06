import { registerDecorator, ValidationOptions,  } from "class-validator";
import { NumberEqualTen } from "../validations/numberEqualTen";


export const IsEqualTen = ( optionsValidator: ValidationOptions ) =>{

    return (object: Object, property: string) => {

        registerDecorator({
            target: object.constructor,
            propertyName: property,
            validator: NumberEqualTen,
            options: optionsValidator
        });

    }

}