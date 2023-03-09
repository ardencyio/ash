import datepicker from "js-datepicker";

export function initDatepickers() {
  return {
    init() {
      const pickerOne = datepicker(".datepicker-start", {
        id: 1,
        overlayButton: "Confirm",
        minDate: new Date(),
        startDate: new Date(),
        showAllDates: true,
        formatter: (input, date, instance) => {
          const value = date.toLocaleDateString("en-EN", {
            month: "short",
            day: "numeric",
          });
          input.value = value;
        },
      });

      const pickerTwo = datepicker(".datepicker-end", {
        id: 1,
        overlayButton: "Confirm",
        minDate: new Date(),
        startDate: new Date(),
        showAllDates: true,
        formatter: (input, date, instance) => {
          const value = date.toLocaleDateString("en-EN", {
            month: "short",
            day: "numeric",
          });
          input.value = value;
        },
      });
    },
  };
}
