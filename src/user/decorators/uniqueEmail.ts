import { registerDecorator, ValidationOptions } from "class-validator";
import { SingleEmailValidator } from "../validators/singleEmail";

export const UniqueEmail = (optionsValidations: ValidationOptions) =>{

    return (object: Object, property: string) =>{
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: optionsValidations,
            validator: SingleEmailValidator,
            constraints: []
        })
    }

}