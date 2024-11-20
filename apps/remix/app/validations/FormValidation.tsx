import * as yup from "yup";

const today = new Date();

export const schema = yup.object().shape({
  carType: yup.string().required("Заполните данные"),
  pickLocation: yup.string().required("Заполните данные"),
  dropLocation: yup.string().required("Заполните данные"),
  pickDate: yup
    .string()
    .required("Заполните данные")
    .test(
      "is-future",
      "The pick-up date must be in the future",
      function (value) {
        const dateValue = new Date(value);
        return dateValue > today;
      },
    ),
  dropDate: yup
    .string()
    .required("Заполните данные")
    .test(
      "is-after-pickDate",
      "The drop-off date must be the same as or later than the pick-up date",
      function (value, context) {
        const { pickDate } = context.parent;
        if (!pickDate) {
          return true;
        }
        const dropDateObj = new Date(value);
        const pickDateObj = new Date(pickDate);
        return dropDateObj >= pickDateObj;
      },
    ),
});
