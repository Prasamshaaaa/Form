
export interface IFormElments {
    Element: string;
    ElementType: formElementType;
    DisplayOrder: number;
    SelectOptions?: Array<SelectOption<any>>;
}

export class SelectOption<T> {
    Options!: T;
}

export interface IForms {
    formLayout: formLayoutStrings;
    formElements: Array<IFormElments>;
}

export type formLayoutStrings = "vertical" | "horizontal" | "inline";
export type formElementType = "Text" | "Email" | "Password" | "Number" | "Submit" | "Select";