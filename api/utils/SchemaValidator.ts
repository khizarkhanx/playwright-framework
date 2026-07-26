import Ajv from 'ajv';

export class SchemaValidator {
  static validate(schema: any, data: any): boolean {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(data);
  }
}