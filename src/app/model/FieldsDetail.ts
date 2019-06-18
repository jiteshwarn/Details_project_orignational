
export class FieldsDetail {
    public IsRichtextField: boolean = false;
    public IsUpdateable: boolean = false;
    public Label: string;
    public LocalName: string;
    public Length: number;
    public Name: string;
    public ParentType: string;
    public Precision: number;
    public ReadOnly: boolean = false;
    public ReferenceFields: any;
    public ReferenceTo: string;
    public RelationshipMetadata: string;
    public Scale: number = -1;
    public Tag: string;
    public Type: string;
    public LocalizationEnabled: boolean = false;
    constructor(
    ) {
       
    }
}