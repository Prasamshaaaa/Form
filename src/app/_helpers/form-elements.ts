
export interface IFormElments {
    Element: string;
    ElementType: formElementType;
    DisplayOrder: number;
    Required?: boolean;
    MinLength?: number;
    MaxLength?: number;
    Pattern?: string; SelectOptions?: Array<SelectOption<any>>;
}

export class SelectOption<T> {
    Options!: T;
}

export interface IForms {
    formLayout: formLayoutStrings;
    formElements: Array<IFormElments>;
}

export type formLayoutStrings = "vertical" | "horizontal" | "inline";
export type formElementType = "Text" | "Email" | "Password" | "Number" | "Submit" | "Select" | "Radio" | "Checkbox" | "Date" | "Textarea" | "File" | "Heading" | "Number";