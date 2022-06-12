export class FeatureDto {
    public featureId: string;
    public title: string;
    public description: string;
    public status: string;

    constructor(
        id: string = '',
        title: string = '',
        description: string = '',
        status: string = '')
    {
        this.featureId = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}