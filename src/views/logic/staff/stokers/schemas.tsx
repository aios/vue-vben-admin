import {FormSchema} from "/@/components/Form";
import {
  Errors, getBotField,
  getClientField,
  getLocationsField,
  getSalaryFields,
  getProductTypesField,
  handleErrors
} from "/@/views/logic/staff/common/schemas";

export const getSchemas = (errors?: Errors): FormSchema[] => {
  const schema: FormSchema[] =  [
    getClientField(),

    getBotField(),

    getLocationsField(),

    getProductTypesField(),

    ...getSalaryFields(),
  ];

  return handleErrors(schema, errors);
};