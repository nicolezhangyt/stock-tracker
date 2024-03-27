import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MarketCapOrder } from '../types/serviceTypes';
import chevronDownIcon from '../assets/chevron_down_icon.svg';

const classNames = (...classes: unknown) => {
  return classes.filter(Boolean).join(' ');
};

const DESC = 'Market Cap High to Low';
const ASC = 'Market Cap Low to High';

type FilterProps = {
  selectedOrder: (selectedOrder: MarketCapOrder) => void;
};

function Filter({ selectedOrder }: FilterProps) {
  const [isHighToLow, setIsHighToLow] = useState<boolean>(true);
  const [title, setTitle] = useState<string>(DESC);

  const sortOptions = [
    {
      name: DESC,
      onClick: () => handleFilterSelect(true),
      current: isHighToLow,
    },
    {
      name: ASC,
      onClick: () => handleFilterSelect(false),
      current: isHighToLow,
    },
  ];

  const handleFilterSelect = (isHighToLow: boolean) => {
    setIsHighToLow(isHighToLow);
    setTitle(isHighToLow ? DESC : ASC);
    selectedOrder(isHighToLow ? MarketCapOrder.desc : MarketCapOrder.asc);
  };

  return (
    <div className="flex items-center">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button className="group py-2 inline-flex rounded-md justify-center text-sm font-medium text-white hover:bg-hoverDark">
            {title}{' '}
            <img
              className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              src={chevronDownIcon}
              alt="icon"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 w-50 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <div
                      className={classNames(
                        option.current
                          ? 'font-medium text-gray-900'
                          : 'text-gray-500',
                        active ? 'bg-hoverBright text-white p-2' : '',
                        'block px-4 py-2 text-sm',
                      )}
                      onClick={option.onClick}
                    >
                      {option.name}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Filter;
