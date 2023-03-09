import autocomplete from "autocompleter";

const countries = [
  { label: "Canada", value: "CA" },
  { label: "United States", value: "US" },
  { label: "France", value: "FR" },
  { label: "Germany", value: "GR" },
  { label: "Japan", value: "JP" },
  { label: "China", value: "CH" },
  { label: "Morocco", value: "MA" },
  { label: "Senegal", value: "SE" },
];

const countryGroups = [
  { label: "Canada", value: "CA", group: "North America" },
  { label: "United States", value: "US", group: "North America" },
  { label: "France", value: "FR", group: "Europe" },
  { label: "Germany", value: "GR", group: "Europe" },
  { label: "Japan", value: "JP", group: "Asia" },
  { label: "China", value: "CH", group: "Asia" },
  { label: "Morocco", value: "MA", group: "Africa" },
  { label: "Senegal", value: "SE", group: "Africa" },
];

const countryFlags = [
  { label: "Australia", value: "AU", flag: "/img/flags/australia.svg" },
  { label: "United States", value: "US", flag: "/img/flags/united-states-of-america.svg" },
  { label: "France", value: "FR", flag: "/img/flags/france.svg" },
  { label: "Germany", value: "GR", flag: "/img/flags/germany.svg" },
  { label: "South Africa", value: "SA", flag: "/img/flags/south-africa.svg" },
  { label: "China", value: "CH", flag: "/img/flags/china.svg" },
  { label: "Spain", value: "ES", flag: "/img/flags/spain.svg" },
  { label: "England", value: "UK", flag: "/img/flags/england.svg" },
];

export function initAutocompletes() {
  return {
    firstAutocomplete: autocomplete({
      onSelect: function (item) {
        alert(item.value);
      },
      input: document.getElementById("autocomplete-1"),
      minLength: 1,
      emptyMsg: "No elements found",
      render: function (item, currentValue) {
        let div = document.createElement("div");
        let template = `
                    <div class="autocomplete-item">
                        <span>${item.label}</span>
                        <span>${item.value}</span>
                    </div>
                `;
        div.innerHTML = template;
        return div;
      },
      renderGroup: function (groupName, currentValue) {
        let div = document.createElement("div");
        let template = `
                    <div class="autocomplete-group">
                        <span>${groupName}</span>
                    </div>
                `;
        div.innerHTML = template;
        return div;
      },
      className: "autocomplete-spaced",
      fetch: function (text, callback) {
        text = text.toLowerCase();
        var suggestions = countries;
        callback(suggestions);
      },
      debounceWaitMs: 200,
    }),
    secondAutocomplete: autocomplete({
      onSelect: function (item) {
        alert(item.value);
      },
      input: document.getElementById("autocomplete-2"),
      minLength: 1,
      emptyMsg: "No elements found",
      render: function (item, currentValue) {
        let div = document.createElement("div");
        let template = `
                    <div class="autocomplete-item">
                        <span>${item.label}</span>
                        <span>${item.value}</span>
                    </div>
                `;
        div.innerHTML = template;
        return div;
      },
      renderGroup: function (groupName, currentValue) {
        let div = document.createElement("div");
        let template = `
                    <div class="autocomplete-group">
                        <span>${groupName}</span>
                    </div>
                `;
        div.innerHTML = template;
        return div;
      },
      className: "autocomplete-grouped",
      fetch: function (text, callback) {
        text = text.toLowerCase();
        var suggestions = countryGroups;
        callback(suggestions);
      },
      debounceWaitMs: 200,
    }),
    thirdAutocomplete: autocomplete({
      onSelect: function (item) {
        alert(item.value);
      },
      input: document.getElementById("autocomplete-3"),
      minLength: 1,
      emptyMsg: "No elements found",
      render: function (item, currentValue) {
        let div = document.createElement("div");
        let template = `
                    <div class="autocomplete-item is-custom">
                        <img src="${item.flag}" class="autocomplete-image" alt="${item.label}" />
                        <span class="block meta">
                          <span>${item.label}</span>
                          <span class="inline-block ml-auto rem-90">[${item.value}]</span>
                        </span>
                    </div>
                `;
        div.innerHTML = template;
        return div;
      },
      renderGroup: function (groupName, currentValue) {
        let div = document.createElement("div");
        let template = `
                    <div class="autocomplete-group">
                        <span>${groupName}</span>
                    </div>
                `;
        div.innerHTML = template;
        return div;
      },
      className: "autocomplete-custom",
      fetch: function (text, callback) {
        text = text.toLowerCase();
        var suggestions = countryFlags;
        callback(suggestions);
      },
      debounceWaitMs: 200,
    }),
  };
}
