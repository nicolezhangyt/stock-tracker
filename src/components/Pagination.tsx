import { PAGE_SIZE } from '../common/constant';

type PaginationProps = {
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
};
function Pagination({ total, onPageChange, currentPage }: PaginationProps) {
  const lastPage = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm">
            Showing{' '}
            <span className="font-medium">
              {(currentPage - 1) * PAGE_SIZE + 1}
            </span>{' '}
            to <span className="font-medium">{currentPage * PAGE_SIZE}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <span
              onClick={() => onPageChange(1)}
              className={
                'relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-primary focus:z-20 focus:outline-offset-0 cursor-pointer' +
                (currentPage === 1 ? 'cursor-not-allowed' : '')
              }
            >
              {'<<'}
            </span>
            <span
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              className={
                'relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-hoverDark focus:z-20 focus:outline-offset-0 cursor-pointer' +
                (currentPage === 1 ? 'cursor-not-allowed' : '')
              }
            >
              {'<'}
            </span>
            {[
              Math.min(currentPage, lastPage - 5),
              Math.min(currentPage + 1, lastPage - 4),
              Math.min(currentPage + 2, lastPage - 3),
            ].map((item: number, index: number) => (
              <span
                key={index}
                aria-current="page"
                onClick={() => onPageChange(item)}
                className={
                  'relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-hoverDark focus:z-20 focus:outline-offset-0 cursor-pointer' +
                  (item === currentPage
                    ? ' bg-white text-black  hover:bg-white'
                    : '')
                }
              >
                {item}
              </span>
            ))}
            {currentPage < lastPage - 5 && (
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
            )}
            {[lastPage - 2, lastPage - 1, lastPage].map(
              (item: number, index: number) => (
                <span
                  key={index}
                  onClick={() => onPageChange(item)}
                  className={
                    'relative hidden items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-hoverDark focus:z-20 focus:outline-offset-0 md:inline-flex cursor-pointer' +
                    (item === currentPage
                      ? ' bg-white text-black hover:bg-white'
                      : '')
                  }
                >
                  {item}
                </span>
              ),
            )}
            <span
              onClick={() => onPageChange(Math.min(currentPage + 1, lastPage))}
              className="relative inline-flex items-center px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-hoverDark focus:z-20 focus:outline-offset-0 cursor-pointer"
            >
              {'>'}
            </span>
            <span
              onClick={() => onPageChange(lastPage)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-hoverDark focus:z-20 focus:outline-offset-0 cursor-pointer"
            >
              {'>>'}
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
