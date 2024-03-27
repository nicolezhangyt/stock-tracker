import { Menu } from '@headlessui/react';
import countries from '../data/countries.json';
import { useState } from 'react';
import chevronDownIcon from '../assets/chevron_down_icon.svg';

type DropDownProp = {
  handleCountrySelection: (countryCode: string) => void;
};

function DropDown({ handleCountrySelection }: DropDownProp) {
  const defaultCountryCode = 'AU';
  const [selectedCountryCode, setSelectedCountryCode] =
    useState<string>(defaultCountryCode);

  const handleClick = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    handleCountrySelection(countryCode);
  };

  const matchedCountry = (countryCode: string) => {
    return countries.find((country) => country.countryCode === countryCode);
  };

  return (
    <Menu>
      <Menu.Button className="flex border p-2 rounded-md mb-2 text-sm">
        {`${
          matchedCountry(selectedCountryCode)?.countryFlag
        } ${selectedCountryCode.toLocaleUpperCase()} Market`}{' '}
        <img
          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          src={chevronDownIcon}
          alt="icon"
        />
      </Menu.Button>
      <Menu.Items className="overflow-scroll max-h-60 absolute rounded-md ">
        {countries.map((country) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={country.countryCode}>
            {({ active }) => (
              <div
                className={`${
                  active
                    ? 'bg-hoverBright text-white p-2'
                    : 'bg-white text-black p-2'
                }`}
                onClick={() => handleClick(country.countryCode)}
              >
                {country.countryFlag} {country.countryName}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default DropDown;
