import {FieldsDetail} from './FieldsDetail'
export class Field {
    constructor(
        public Name: string,
        public Fields: FieldsDetail[]
    ) { }
}

export class DocumentField {
    constructor(
        public DisplayTag: string,
        public PreviousValue: object,
        public CurrentValue: object,
        public Id: string,
        public IsDeleted: boolean
    ) { }
}