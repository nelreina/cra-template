import moment from "moment-timezone";

const apiFormat = "YYYY-MM-DD";
const cardTitleFormat = "ddd DD-MMM";

export const curaDate = (date) => moment(date).format("DD MMM YYYY");
export const curaDateTime = (date) => moment(date).format("DD MMM");
// export const curaDateTime = (date) => moment(date).format("DD MMM");
export const getAge = (dob) => moment().diff(dob, "years");

export const today = () => moment().format(apiFormat);
export const dayForward = (date) =>
  moment(date).add(1, "days").format(apiFormat);
export const dayBack = (date) =>
  moment(date).subtract(1, "days").format(apiFormat);

export const cardTitle = (date) => moment(date).format(cardTitleFormat);

export const fromNow = (date) => moment(date).fromNow();

export const getSelectOptions = (
  data,
  config = { value: "id", label: "name" }
) =>
  data.map((item) => ({
    value: item[config.value],
    label: item[config.label],
  }));
